import ChatSection from "./ChatSection";
import LeftBar from "./LeftBar";
import { Container, Row } from "react-bootstrap";
import UsersMenu from "./UsersMenu";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

const Main = () => {
  const [showUsersMenu, setShowUsersMenu] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  return (
    <Container fluid className="main-page px-5 pb-3 d-flex">
      <Row className="flex-grow-1">
        {!showUsersMenu && !showProfileMenu && <LeftBar showUsersMenu={setShowUsersMenu} showProfileMenu={setShowProfileMenu} />}
        {showUsersMenu && <UsersMenu showUsersMenu={setShowUsersMenu} />}
        {showProfileMenu && <ProfileMenu showProfileMenu={setShowProfileMenu} />}
        <ChatSection />
      </Row>
    </Container>
  );
};

export default Main;
