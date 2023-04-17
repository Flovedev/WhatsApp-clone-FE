import ChatSection from "./ChatSection";
import LeftBar from "./LeftBar";
import { Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <Container fluid className="main-page px-5 pb-3 d-flex">
      <Row className="flex-grow-1">
        <LeftBar />
        <ChatSection />
      </Row>
    </Container>
  );
};

export default Main;
