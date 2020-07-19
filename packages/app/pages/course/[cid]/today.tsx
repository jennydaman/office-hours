import { Role } from "@template/common";
import { API } from "@template/api-client";
import { Role } from "@template/common";
import { Button, Col, Result, Row } from "antd";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR, { mutate } from "swr";
import NavBar from "../../../components/Nav/NavBar";
import OpenQueueCard from "../../../components/Today/OpenQueueCard";
import { useRoleInCourse } from "../../../hooks/useRoleInCourse";
import Schedule from "./schedule";

const Container = styled.div`
  margin: 32px 64px;
  @media (max-width: 768px) {
    margin: 32px 24px;
  }
`;

const CreateQueueButton = styled(Button)`
  background: #2a9187;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: #212934;
`;

export default function Today() {
  const router = useRouter();
  const { cid } = router.query;
  const role = useRoleInCourse(Number(cid));

  const { data, error } = useSWR(
    `api/v1/courses/${cid}`,
    async () => cid && API.course.get(Number(cid))
  );

  const updateQueueNotes = async (queueId, notes) => {
    const newQueues =
      data && data.queues.map((q) => (q.id === queueId ? { ...q, notes } : q));

    mutate(`api/v1/courses/${cid}`, { ...data, queues: newQueues }, false);
    await API.queues.updateNotes(queueId, notes);
    mutate(`api/v1/courses/${cid}`);
  };

  if (error) {
    return (
      <Result
        status="500"
        title="Something went wrong, please ask chinese man"
      />
    );
  }

  if (role) {
    return (
      <div>
        <NavBar courseId={Number(cid)} />
        <Container>
          <Row gutter={64}>
            <Col md={12} xs={24}>
              <Row justify="space-between">
                <Title>Current Office Hours</Title>
                {role === Role.TA && (
                  <CreateQueueButton type="default" size="large">
                    Create Queue
                  </CreateQueueButton>
                )}
              </Row>
              {data?.queues?.map((q) => (
                <OpenQueueCard
                  key={q.id}
                  queue={q}
                  isTA={role === Role.TA}
                  updateQueueNotes={updateQueueNotes}
                />
              ))}
            </Col>
            <Col md={12} sm={24}>
              <Schedule today={true} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return null;
  }
}
