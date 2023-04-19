import { Col, FormControl, InputGroup } from "react-bootstrap";
import { FaUserFriends } from "react-icons/fa";
import { RiLoader3Line, RiMessage2Fill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import SingleChat from "./SingleChat";
import { useEffect } from "react";
import { getChats } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IChats } from "../../redux/interfaces/IChats";

interface IProps {
  showUsersMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftBar = (props: IProps) => {
  const dispatch = useAppDispatch();
  let chats = useAppSelector((state) => state.chats.allChats);
  console.log(chats);
  useEffect(() => {
    dispatch(getChats("643d6d724241c52f1fc63103"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col className="p-0 col-12 col-md-3">
      <div className="d-flex top-bars mt-3 align-items-center">
        <div className="flex-grow-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
            alt="trollface"
            className="top-images my-2 mx-3"
          />
        </div>

        <div className="d-flex">
          <FaUserFriends className="top-icons m-1 mx-3" />
          <RiLoader3Line className="top-icons m-1 mx-3" />
          <RiMessage2Fill
            className="top-icons m-1 mx-3"
            onClick={() => props.showUsersMenu(true)}
          />
          <SlOptionsVertical className="top-icons m-1 mx-3" />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <InputGroup className="my-2 ml-3 top-input-main">
          <InputGroup.Prepend>
            <InputGroup.Text className="top-input">
              <AiOutlineSearch className="top-search" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search for a chat or ///ask"
            className="top-input top-search"
          />
        </InputGroup>
        <BsFilter className="top-icons top-filter m-1 mx-3" />
      </div>
      <div className="single-chats-container">
        {chats.success === false
          ? "Create a new chat to start"
          : chats.map((e: IChats, i: number) => {
              return <SingleChat key={i} data={e} />;
            })}
      </div>
    </Col>
  );
};

export default LeftBar;
