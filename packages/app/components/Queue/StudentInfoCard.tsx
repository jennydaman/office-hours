import { UserOutlined } from "@ant-design/icons";
import {
  ClosedQuestionStatus,
  Question,
  QuestionStatus,
} from "@template/common";
import { Avatar, Button, Card, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import UpdateQuestionPopover from "./UpdateQuestionPopover";

const HelpCard = styled(Card)`
  margin-bottom: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
`;

const Email = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #8895a6;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #212934;
`;

const HeadingText = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  color: #8895a6;
  font-variant: small-caps;
`;

const BodyText = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #212934;
  margin-bottom: 16px;
`;

const AlertButton = styled(Button)`
  width: 48%;
  font-weight: 500;
  font-size: 14px;
  color: #5f6b79;
  border: 1px solid #cfd6de;
  border-radius: 6px;
`;

const CantFindButton = styled(Button)`
  width: 48%;
  font-weight: 500;
  font-size: 14px;
  color: #da3236;
  background: #f8f9fa;
  border: 1px solid #cfd6de;
  border-radius: 6px;
`;

const FinishButton = styled(Button)`
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  background: #3684c6;
  border-radius: 6px;
`;

interface StudentInfoCardProps {
  updateQuestion: (question: Question, status: QuestionStatus) => void;
  alertStudent: (question: Question) => void;
  question: Question;
}

const StudentInfoCard = ({
  updateQuestion,
  alertStudent,
  question,
}: StudentInfoCardProps) => {
  return (
    <HelpCard
      headStyle={{ padding: "0 16px", borderStyle: "none" }}
      bodyStyle={{ padding: "16px" }}
      title={
        <Row justify="space-between">
          <Name>{question.creator.name}</Name>
          <Email>takayama.a@northeastern.edu</Email>
        </Row>
      }
    >
      <Row>
        <Col span={6}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        <Col span={18}>
          <HeadingText>question</HeadingText>
          <BodyText>{question.text ?? ""}</BodyText>
          <HeadingText>location</HeadingText>
          <BodyText>Outside room, by the couches</BodyText>
        </Col>
      </Row>

      <Row justify="space-between">
        <AlertButton onClick={() => alertStudent(question)}>Alert</AlertButton>
        <UpdateQuestionPopover
          onConfirm={() => {
            updateQuestion(question, ClosedQuestionStatus.NoShow);
          }}
        >
          <CantFindButton danger>Can&apos;t Find</CantFindButton>
        </UpdateQuestionPopover>
      </Row>
      <FinishButton
        block
        type="primary"
        onClick={() => updateQuestion(question, ClosedQuestionStatus.Resolved)}
      >
        Finish Helping
      </FinishButton>
    </HelpCard>
  );
};

export default StudentInfoCard;
