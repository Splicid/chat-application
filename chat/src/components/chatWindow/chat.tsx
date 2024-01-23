import React from 'react';
import MessageList from './messageList';
import InputBar from './inputBar';

type ChatWindowProps = {
    messages: Array<{ id: number, text: string, sender: string }>;
    onSendMessage: (message: string) => void;
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage }) => {
    return (
        <div className="flex flex-col h-screen max-w-md mx-auto border border-gray-300 rounded-lg">
            <MessageList messages={messages} />
            <InputBar onSendMessage={onSendMessage} />
        </div>
    );
};

export default ChatWindow;
