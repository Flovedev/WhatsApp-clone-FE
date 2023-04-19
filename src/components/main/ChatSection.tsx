import { Col, FormControl, Form, ListGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { SlOptionsVertical, SlEmotsmile } from "react-icons/sl";
import { RiAttachment2 } from "react-icons/ri";
import { BsFillMicFill } from "react-icons/bs";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { Message, User } from "../../redux/types";
import SingleMessage from "./SingleMessage";

const socket = io(process.env.REACT_APP_BE_URL!, { transports: ["websocket"] });

const ChatSection = () => {
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const [message, setMessage] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  useEffect(() => {
    //   socket.on("welcome", (welcomeMessage) => {
    //     console.log(welcomeMessage);
    //   });

<<<<<<< Updated upstream
      socket.on("loggedIn", (onlineUsersList) => {
        console.log(onlineUsersList);
        setOnlineUsers(onlineUsersList);
        setLoggedIn(true);
      });

      socket.on("updateOnlineUsersList", (updatedList) => {
        setOnlineUsers(updatedList);
      });

      socket.on("newMessage", (newMessage) => {
        console.log(newMessage);
        setChatHistory((chatHistory) => [...chatHistory, newMessage.message]);
      });
    });
=======
    //   // socket.emit("joinRoom", "room"); // UNIQUE ROOM NAME FOR EACH USER

    //   socket.on("newMessage", newMessage => {
    //     setChatHistory((allMessages) => [...allMessages, newMessage.message])
    //   })
>>>>>>> Stashed changes
  }, []);


  // const sendMessage = () => {
  //   const newMessage = {
  //     sender: "username",
  //     text: message,
  //     createdAt: new Date().toLocaleString("en-US"),
  //   };
  //   socket.emit("sendMessage", { message: newMessage });
  //   setChatHistory([...chatHistory, newMessage]);
  // };

  return (
    <Col className="col-12 col-md-9 p-0 mt-3 border-left border-secondary d-flex flex-column">
      <div className="d-flex top-bars align-items-center">
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
      <ListGroup>
        {onlineUsers.map((user: User) => (
          <ListGroup.Item key={user.socketId}>{user.username}</ListGroup.Item>
        ))}
      </ListGroup>
      <div className="messages-section flex-grow-1 d-flex flex-column-reverse ">
        {chatHistory.slice().reverse().map((message, index) => (
          <SingleMessage data={message} key={index} />
        ))}
      </div>
      <div className="d-flex align-items-center py-2 px-2 top-bars">
        <SlEmotsmile className="top-icons mx-2" />
        <RiAttachment2 className="top-icons mx-2" />
        <Form className="message-container"
          onSubmit={(e) => {
            e.preventDefault();
            // sendMessage();
            // setMessage("")
          }}
        >
          <FormControl
            placeholder="Your message..."
            className="top-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form>
        <BsFillMicFill className="top-icons mx-3" />
      </div>
    </Col>
  );
};

export default ChatSection;
