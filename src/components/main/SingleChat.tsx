import { useEffect } from "react";
import { IChats } from "../../redux/interfaces/IChats";

interface IProps {
  data: IChats;
}

const SingleChat = (props: IProps) => {
  const currentUser = "643d6d724241c52f1fc63103";

  const notCurrentUser = props.data.members.filter(
    (user) => !(user._id === currentUser)
  );

  //TODO with rooms working
  // const lastMessage = props.data.messages.map((message) => message);
  // console.log(lastMessage);

  return (
    <>
      <div className="my-2 single-chats">
        <div className="d-flex align-items-center ml-3 my-2">
          <div className="d-flex align-items-center justify-content-center img-container">
            <img src={notCurrentUser[0].avatar} alt="trollface" />
          </div>
          <div className="d-flex flex-grow-1 ml-3 align-items-center">
            <div className="flex-grow-1 my-3">
              <p className="mb-0">{notCurrentUser[0].username}</p>
              <span>TODO</span>
            </div>
            <span className="mr-3">TODO</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChat;
