import React, { Fragment, useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Messages = () => {
  const [newMessages, setNewMessages] = useState("");
  const [messageList, setMessageList] = useState([]);

  const message = (e) => {
    setNewMessages(e.target.value);
  };

  const newMessage = () => {
    // If message field is empty. Displays and error message.
    if (!newMessages) {
      alert("Please enter a message first");
      return;
    }
    const newMsg = {
      id: new Date().getTime().toString(),
      title: newMessages,
      timestamp: new Date().toString().substring(15, 21),
    };
    setMessageList([...messageList, newMsg]);
    // Stores message to LocalStorage
    localStorage.setItem("msgs", JSON.stringify([...messageList, newMsg]));
    setNewMessages("");
  };

  // Retrieves messages from localStorage and displays them.
  useEffect(() => {
    if (localStorage.getItem("msgs")) {
      const stored = JSON.parse(localStorage.getItem("msgs"));
      setMessageList(stored);
    }
  }, []);

  return (
    <>
      <section className="flex justify-center pt-7">
        <input
          value={newMessages}
          onChange={message}
          className="h-[30px] w-[300px] absolute py-4 pl-2 pr-10 text-purple-700 font-xmas font-semibold text-xl outline-none drop-shadow-lg rounded-lg"
          placeholder="Leave a message..."
          maxLength="35"
        />
        <button onClick={newMessage} className="relative left-[125px] top-2/4">
          <BsFillPlayFill />
        </button>
      </section>
      <section className="grid grid-rows-3 grid-cols-3 justify-center items-center pt-10 mx-auto">
        {messageList.map((msg) => {
          return (
            <Fragment key={msg.id}>
              <div className="bg-white text-purple-700 font-xmas text-xl font-semibold rounded-lg m-3 w-[300px] drop-shadow-lg flex justify-between p-2">
                <h1>{msg.title}</h1>
                <p>{msg.timestamp}</p>
              </div>
            </Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Messages;
