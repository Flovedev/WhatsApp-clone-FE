const SingleUser = () => {
  return (
    <div className="my-2 single-user">
      <div className="d-flex align-items-center ml-3 my-2">
        <div className="d-flex align-items-center justify-content-center img-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
            alt="trollface"
          />
        </div>
        <div className="d-flex flex-grow-1 mx-3 single-user-data align-items-center">
          <div className="my-3">
            <p className="mb-0">Username</p>
            <span>Info</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
