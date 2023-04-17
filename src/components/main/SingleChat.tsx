const SingleChat = () => {
  return (
    <div className="d-flex align-items-center my-1 single-chats">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
        alt="trollface"
        className="chat-img m-1"
      />
      <div className="d-flex flex-grow-1 ml-3 align-items-center">
        <div className="flex-grow-1 my-3">
          <p className="mb-0">Pochita</p>
          <span>Last message!</span>
        </div>
        <span className="mr-3">13:14</span>
      </div>
    </div>
  );
};

export default SingleChat;
