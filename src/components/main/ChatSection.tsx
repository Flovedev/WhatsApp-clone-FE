import { Col } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

const ChatSection = () => {
  return (
    <Col>
      <div className="d-flex top-bars mt-3 align-items-center">
        <div className="flex-grow-1 d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
            alt="trollface"
            className="top-images my-2 mx-3"
          />
          <p className="mb-0">Pochita</p>
        </div>

        <div className="d-flex">
          <AiOutlineSearch className="top-icons m-1 mx-3" />
          <SlOptionsVertical className="top-icons m-1 mx-3" />
        </div>
      </div>
    </Col>
  );
};

export default ChatSection;
