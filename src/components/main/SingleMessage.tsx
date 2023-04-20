import { useAppSelector } from "../../redux/hooks";
import { Message } from "../../redux/types";

interface IProps {
  data: any;
}

const SingleMessage = (props: IProps) => {
  let currentUser = useAppSelector((state) => state.currentUser.currentUser);
  return (
    <>
      {props.data.sender._id === currentUser._id ? (
        <div className="d-flex flex-row-reverse pr-5">
          <div className="chat-message-user mb-1 mx-5 p-1">
            <p className="mb-0 mx-2">{props.data.sender.username}</p>
            <p className="mb-0 mx-2">{props.data.text}</p>
            <span className="mx-2 float-right">{props.data.createdAt}</span>
          </div>
        </div>
      ) : (
        <div className="pl-5">
          <div className="chat-message mb-1 mx-5 p-1">
            <p className="mb-0 mx-2">{props.data.sender.username}</p>
            <p className="mb-0 mx-2">{props.data.text}</p>
            <span className="mx-2 float-right">{props.data.createdAt}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMessage;
