import { Col, FormControl, Form, ListGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { SlOptionsVertical, SlEmotsmile } from "react-icons/sl";
import { RiAttachment2 } from "react-icons/ri";
import { BsFillMicFill } from "react-icons/bs";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { Message, User } from "../../redux/types";
import SingleMessage from "./SingleMessage";
import { useAppSelector } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";
import { current } from "@reduxjs/toolkit";

const socket = io(process.env.REACT_APP_BE_URL!, { transports: ["websocket"] });

const ChatSection = () => {
  let currentChat = useAppSelector((state) => state.currentChat.chat);
  let currentUser = useAppSelector((state) => state.currentUser.currentUser);
  let otherUser = currentChat?.members?.filter(
    (user: IUser) => !(user._id === currentUser._id)
  );

  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const [message, setMessage] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  // const [chatHistory, setChatHistory] = currentChat?.messages;

  // console.log("this", currentChat.messages);

  useEffect(() => {
    socket.on("welcome", (welcomeMessage) => {
      console.log(welcomeMessage);
    });
    socket.emit("joinRoom", "room");
    socket.on("newMessage", (newMessage) => {
      setChatHistory((allMessages: any) => [
        ...allMessages,
        newMessage.message,
      ]);
    });
  }, []);

  const sendMessage = () => {
    const newMessage = {
      sender: currentUser,
      text: message,
      createdAt: new Date().toLocaleString("en-US"),
      chatId: currentChat._id,
    };
    socket.emit("sendMessage", { message: newMessage });
    setChatHistory([...chatHistory, newMessage]);
  };

  return (
    <Col className="col-12 col-md-9 p-0 mt-3 border-left border-secondary d-flex flex-column">
      <div className="d-flex top-bars align-items-center">
        <div className="flex-grow-1 d-flex align-items-center">
          {otherUser && (
            <>
              {" "}
              <img
                src={otherUser[0]?.avatar}
                alt="User's avatar"
                className="top-images my-2 mx-3"
              />
              <p className="mb-0" style={{ color: "#d9dee0" }}>
                {otherUser[0]?.username}
              </p>
            </>
          )}
        </div>

        <div className="d-flex">
          <AiOutlineSearch className="top-icons m-1 mx-3" />
          <SlOptionsVertical className="top-icons m-1 mx-3" />
        </div>
      </div>
      <div className="messages-section flex-grow-1 d-flex flex-column-reverse ">
        <>
          {/* {currentChat.messages
          .slice()
          .reverse()
          .map((message: any, index: number) => (
            <SingleMessage data={message} key={index} />
          ))} */}

          {/* {chatHistory
            .slice()
            .reverse()
            .map((message: any, index: number) => (
              <SingleMessage data={message} key={index} />
            ))} */}
          {console.log("this")}
        </>
      </div>
      <div className="d-flex align-items-center py-2 px-2 top-bars">
        <SlEmotsmile className="top-icons mx-2" />
        <RiAttachment2 className="top-icons mx-2" />
        <Form
          className="message-container"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
            setMessage("");
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
