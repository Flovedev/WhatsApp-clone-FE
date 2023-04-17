import ChatSection from "./ChatSection";
import LeftBar from "./LeftBar";
import { Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <Container className="main-page">
      <Row>
        <LeftBar />
        <ChatSection />
      </Row>
    </Container>
  );
};

export default Main;
