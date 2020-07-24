import { API } from "@template/api-client";
import { ClosedQuestionStatus, Question, QuestionType } from "@template/common";
import { Button, Card, Col, Grid, Modal, Row } from "antd";
import React, { ReactElement, useCallback, useState } from "react";
import styled from "styled-components";
import useSWR, { mutate } from "swr";
import { useProfile } from "../../hooks/useProfile";
import EditableQuestion from "./EditableQuestion";
import QuestionForm from "./QuestionForm";
import StudentQueueCard from "./StudentQueueCard";
const { useBreakpoint } = Grid;

const StatusText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #8895a6;
  font-variant: small-caps;
  width: 96px;
  float: right;
  margin-right: 0;
`;

const StudentHeaderCard = styled(Card)`
  height: 64px;
  padding-left: 8px;
  padding-right: 8px;
  background: inherit;
`;

const HeaderText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #8895a6;
  font-variant: small-caps;
`;

const QueueTitle = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: #212934;
`;

const CenterRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;

const JoinButton = styled(Button)`
  background-color: #3684c6;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  margin-left: 16px;
`;

interface StudentQueueListProps {
  qid: number;
}

export default function StudentQueueList({
  qid,
}: StudentQueueListProps): ReactElement {
  const profile = useProfile();

  const { data: queue, error: queuesError, mutate: mutateQueue } = useSWR(
    qid && `/api/v1/queues/${qid}`,
    async () => API.queues.get(Number(qid))
  );

  const { data: questions, error: questionsError } = useSWR(
    qid && `/api/v1/queues/${qid}/questions`,
    async () => API.questions.index(Number(qid))
  );
  const studentQuestion =
    profile && questions && questions.find((q) => q.creator.id === profile.id);

  const joinQueue = useCallback(async () => {
    const createdQuestion = await API.questions.create({
      queueId: Number(qid),
      text: "",
      questionType: QuestionType.Bug, // TODO: endpoint needs to be changed to allow empty questionType for drafts
      // for the moment I am defaulting this data so that there is no error
    });

    const newQuestions = [...questions, createdQuestion];
    mutate(`/api/v1/queues/${qid}/questions`, newQuestions);
  }, [qid, questions]);

  const leaveQueue = useCallback(async () => {
    await API.questions.update(studentQuestion?.id, {
      status: ClosedQuestionStatus.Deleted,
    });

    mutate(`/api/v1/queues/${qid}/questions`);
  }, [qid, studentQuestion?.id]);

  const finishQuestion = useCallback(
    async (text: string, questionType: QuestionType) => {
      const updateStudent = {
        text: text,
        questionType: questionType,
      };
      console.log(updateStudent, "test");
      await API.questions.update(studentQuestion?.id, updateStudent);
      const newQuestions = questions?.map((q) =>
        q.id === studentQuestion?.id ? { ...q, updateStudent } : q
      );
      mutate(`/api/v1/queues/${qid}/questions`, newQuestions);
    },
    [qid, questions, studentQuestion?.id]
  );

  const screens = useBreakpoint();
  const [popupEditQuestion, setPopupEditQuestion] = useState(false);
  const [isJoining, setIsJoining] = useState(false);

  const openEditModal = useCallback(() => {
    setPopupEditQuestion(true);
  }, []);

  const closeEditModal = useCallback(() => {
    setPopupEditQuestion(false);
    setIsJoining(false);
  }, []);

  const renderEditableQuestion = () => {
    return (
      <Col xs={24} lg={10} xxl={6} order={screens.lg === false ? 1 : 2}>
        <StudentHeaderCard
          bodyStyle={{ paddingLeft: 0 }}
          style={{
            paddingLeft: 0,
            marginTop: screens.lg === false ? 0 : "46px",
          }}
          bordered={false}
        >
          <HeaderText>your question</HeaderText>
        </StudentHeaderCard>
        <EditableQuestion
          position={questions.indexOf(studentQuestion) + 1}
          type={studentQuestion.questionType}
          text={studentQuestion.text}
          location={
            studentQuestion.location ? studentQuestion.location : "Online"
          }
          photoUrl={studentQuestion.creator.photoURL}
          openEdit={openEditModal}
          leaveQueue={leaveQueue}
        />
      </Col>
    );
  };

  const leaveQueueAndClose = useCallback(() => {
    leaveQueue();
    closeEditModal();
  }, [leaveQueue, closeEditModal]);

  const joinQueueOpenModal = useCallback(() => {
    joinQueue();
    openEditModal();
  }, [joinQueue, openEditModal]);

  const finishQuestionAndClose = useCallback(
    (text: string, qt: QuestionType) => {
      finishQuestion(text, qt);
      closeEditModal();
    },
    [finishQuestion, closeEditModal]
  );

  return (
    <div>
      <Row gutter={[64, 64]}>
        <Col flex="auto" order={screens.lg === false ? 2 : 1}>
          <Row justify="space-between">
            <QueueTitle>{queue?.room}</QueueTitle>
            {!studentQuestion && (
              <JoinButton
                type="primary"
                size="large"
                onClick={joinQueueOpenModal}
              >
                Join Queue
              </JoinButton>
            )}
          </Row>
          <StudentHeaderCard bordered={false}>
            <CenterRow justify="space-between">
              <Col span={1}>
                <HeaderText>#</HeaderText>
              </Col>
              <Col xs={16} sm={11} lg={6}>
                <HeaderText>name</HeaderText>
              </Col>
              <Col xs={0} lg={2}>
                <HeaderText>type</HeaderText>
              </Col>
              <Col span={2}>
                <HeaderText>wait</HeaderText>
              </Col>
              <Col xs={0} lg={2}>
                <StatusText>status</StatusText>
              </Col>
            </CenterRow>
          </StudentHeaderCard>
          {questions?.map((question: Question, index: number) => {
            return (
              <StudentQueueCard
                key={question.id}
                rank={index + 1}
                waitTime={30} //TODO: figure out later
                question={question}
                highlighted={studentQuestion === question}
              />
            );
          })}
        </Col>
        {studentQuestion && renderEditableQuestion()}
        <Modal
          visible={isJoining || popupEditQuestion}
          closable={true}
          onCancel={closeEditModal}
          footer={<div></div>}
        >
          <QuestionForm
            question={studentQuestion}
            leaveQueue={leaveQueueAndClose}
            finishQuestion={finishQuestionAndClose}
          />
        </Modal>
      </Row>
    </div>
  );
}
