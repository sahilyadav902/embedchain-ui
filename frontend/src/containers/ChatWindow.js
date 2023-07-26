import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function ChatWindow({ embedding_model, app_type }) {
  const [bot, setBot] = useState(null);
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { bot_slug } = router.query;

  useEffect(() => {
    if (bot_slug) {
      const fetchBots = async () => {
        const response = await fetch("/api/get_bots");
        const data = await response.json();
        const matchingBot = data.find((item) => item.slug === bot_slug);
        setBot(matchingBot);
      };
      fetchBots();
    }
  }, [bot_slug]);

  useEffect(() => {
    const storedChats = localStorage.getItem(`chat_${bot_slug}_${app_type}`);
    if (storedChats) {
      const parsedChats = JSON.parse(storedChats);
      setChats(parsedChats.chats);
    }
  }, [app_type, bot_slug]);

  const handleChatResponse = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const queryInput = e.target.query.value;
    e.target.query.value = "";
    const chatEntry = {
      sender: "H",
      message: queryInput,
    };
    setChats((prevChats) => [...prevChats, chatEntry]);

    const response = await fetch("/api/get_answer", {
      method: "POST",
      body: JSON.stringify({
        query: queryInput,
        embedding_model,
        app_type,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      const botResponse = data.response;
      const botEntry = {
        sender: "B",
        message: botResponse,
      };
      setIsLoading(false);
      setChats((prevChats) => [...prevChats, botEntry]);
      const savedChats = {
        chats: [...chats, chatEntry, botEntry],
      };
      localStorage.setItem(
        `chat_${bot_slug}_${app_type}`,
        JSON.stringify(savedChats)
      );
    } else {
      router.reload();
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-4 overflow-x-auto h-full pb-6">
          {/* Greeting Message */}
          <div className="rounded-lg">
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black text-white flex-shrink-0">
                B
              </div>
              <div className="ml-3 text-sm bg-white py-2 px-4 shadow-lg rounded-xl">
                <div>Hi, I am {bot?.name}. How can I help you today?</div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          {chats.map((chat, index) => (
            <React.Fragment key={index}>
              {chat.sender === "B" ? (
                // Bot Message
                <div className="rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black text-white flex-shrink-0">
                      B
                    </div>
                    <div className="ml-3 text-sm bg-white py-2 px-4 shadow-lg rounded-xl">
                      <div>{chat.message}</div>
                    </div>
                  </div>
                </div>
              ) : (
                // Human Message
                <div className="rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-800 text-white flex-shrink-0">
                      H
                    </div>
                    <div className="mr-3 text-sm bg-blue-200 py-2 px-4 shadow-lg rounded-xl">
                      <div>{chat.message}</div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Loader */}
          <div
            id="loader"
            className={`rounded-lg ${isLoading ? "" : "hidden"}`}
          >
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black text-white flex-shrink-0">
                B
              </div>
              <div className="ml-3 text-sm bg-white py-2 px-4 shadow-lg rounded-xl">
                <div>
                  <div className="flex items-center justify-center space-x-2 animate-pulse">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white fixed bottom-0 left-0 right-0 h-32 sm:h-20"></div>

        {/* Query Form */}
        <form
          onSubmit={handleChatResponse}
          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center sticky bottom-3"
        >
          <div className="w-full">
            <input
              id="query"
              name="query"
              type="text"
              placeholder="Enter your query..."
              className="text-sm w-full border-2 border-black rounded-xl focus:outline-none focus:border-blue-800 sm:pl-4 h-11"
              required
            />
          </div>

          <div className="w-full sm:w-fit">
            <button
              type="submit"
              id="sender"
              disabled={isLoading}
              className={`${
                isLoading ? "opacity-60" : ""
              } w-full bg-black hover:bg-blue-800 rounded-xl text-lg text-white px-6 h-11`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
