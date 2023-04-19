import ChatSection from "./ChatSection";
import LeftBar from "./LeftBar";
import { Container, Row } from "react-bootstrap";
import UsersMenu from "./UsersMenu";
import { useState } from "react";

const Main = () => {
  const [showUsersMenu, setShowUsersMenu] = useState(false)

  return (
    <Container fluid className="main-page px-5 pb-3 d-flex">
      <Row className="flex-grow-1">
        {!showUsersMenu && <LeftBar showUsersMenu={setShowUsersMenu} />}
        {showUsersMenu && <UsersMenu showUsersMenu={setShowUsersMenu} />}
        <ChatSection />
      </Row>
    </Container>
  );
};

export default Main;
