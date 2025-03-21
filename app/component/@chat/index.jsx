'use client'
import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]); // 用于存储所有消息
  const [input, setInput] = useState(''); // 用于存储用户输入

  // 处理发送消息的逻辑
  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // 添加用户消息到消息列表
    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // 模拟AI的回复
    const aiMessage = {
      sender: 'ai',
      text: `AI的回答：你刚才说的是 "${input}"`,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);

    // 清空输入框
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-md overflow-hidden shadow-lg">
      <div className="h-80 overflow-y-auto p-4 bg-gray-100 flex flex-col gap-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-md max-w-[80%] ${
              message.sender === 'user'
                ? 'self-end bg-blue-100'
                : 'self-start bg-gray-200'
            }`}
          >
            <strong>{message.sender === 'user' ? '我' : 'AI'}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="flex items-center border-t border-gray-300 p-3 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入消息..."
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          发送
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;