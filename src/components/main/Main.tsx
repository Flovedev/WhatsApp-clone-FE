import ChatSection from "./ChatSection";
import LeftBar from "./LeftBar";
import { Container, Row } from "react-bootstrap";
import UsersMenu from "./UsersMenu";
import { useState, useEffect } from "react";
import ProfileMenu from "./ProfileMenu";
import { getUsers } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";

const Main = () => {
  const dispatch = useAppDispatch();
  const [showUsersMenu, setShowUsersMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Container fluid className="main-page px-5 pb-3 d-flex">
      <Row className="flex-grow-1">
        {!showUsersMenu && !showProfileMenu && (
          <LeftBar
            showUsersMenu={setShowUsersMenu}
            showProfileMenu={setShowProfileMenu}
          />
        )}
        {showUsersMenu && <UsersMenu showUsersMenu={setShowUsersMenu} />}
        {showProfileMenu && (
          <ProfileMenu showProfileMenu={setShowProfileMenu} />
        )}
        <ChatSection />
      </Row>
    </Container>
  );
};

export default Main;
