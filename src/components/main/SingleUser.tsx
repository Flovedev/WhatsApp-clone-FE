import { createChat } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";

interface IProps {
  data: IUser;
  //   hideUsers: React.Dispatch<React.SetStateAction<boolean>>;
}

const SingleUser = (props: IProps) => {
  const dispatch = useAppDispatch();
  const currentUser = "643d6d724241c52f1fc63103";
  const bothUsers = { members: [props.data._id, currentUser] };

  const handleChats = () => {
    dispatch(createChat(bothUsers, currentUser));
  };

  return (
    <div
      className="my-2 single-user"
      onClick={() => {
        handleChats();
      }}
    >
      <div className="d-flex align-items-center ml-3 my-2">
        <div className="d-flex align-items-center justify-content-center img-container">
          <img src={props.data.avatar} alt="trollface" />
        </div>
        <div className="d-flex flex-grow-1 mx-3 single-user-data align-items-center">
          <div className="my-3">
            <p className="mb-0">{props.data.username}</p>
            <span>{props.data.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
