import { IChats } from "../../redux/interfaces/IChats";

interface IProps {
  data: IChats;
}

const SingleChat = (props: IProps) => {
  return (
    <>
      <div className="my-2 single-chats">
        <div className="d-flex align-items-center ml-3 my-2">
          <div className="d-flex align-items-center justify-content-center img-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
              alt="trollface"
            />
          </div>
          <div className="d-flex flex-grow-1 ml-3 align-items-center">
            <div className="flex-grow-1 my-3">
              <p className="mb-0"></p>
              <span>Last message!</span>
            </div>
            <span className="mr-3">13:14</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChat;
