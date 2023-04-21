import { IChats } from "../../redux/interfaces/IChats";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CLEAN_LIVE_CHAT, getChatHistory } from "../../redux/actions";

interface IProps {
  data: IChats;
}

const SingleChat = (props: IProps) => {
  const dispatch = useAppDispatch();
  let currentUser = useAppSelector((state) => state.currentUser.currentUser);

  const notCurrentUser = props.data.members.filter(
    (user) => !(user._id === currentUser._id)
  );

  const handleChats = (chatId: string) => {
    dispatch(getChatHistory(chatId));
    dispatch({ type: CLEAN_LIVE_CHAT, payload: [] });
  };

  return (
    <div
      className="my-2 single-chats"
      onClick={() => {
        handleChats(props.data._id);
      }}
    >
      <div className="d-flex align-items-center ml-3 my-2">
        <div className="d-flex align-items-center justify-content-center img-container">
          <img src={notCurrentUser[0]?.avatar} alt="trollface" />
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
  );
};

export default SingleChat;
