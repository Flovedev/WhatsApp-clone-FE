import { Message } from "../../redux/types";

interface IProps {
  data: Message;
}

const SingleMessage = (props: IProps) => {
  return (
    <>
      <div className="d-flex flex-row-reverse pr-5">
        <div className="chat-message-user mb-1 mx-5 p-1">
          <p className="mb-0 mx-2">{props.data.sender}</p>
          <p className="mb-0 mx-2">{props.data.text}</p>
          <span className="mx-2 float-right">{props.data.createdAt}</span>
        </div>
      </div>

      {/* <div className="pl-5">
        <div className="chat-message mb-1 mx-5 p-1">
          <p className="mb-0 mx-2">Recieved message</p>
          <span className="mx-2 float-right">12:14</span>
        </div>
      </div> */}
    </>
  );
};

export default SingleMessage;
