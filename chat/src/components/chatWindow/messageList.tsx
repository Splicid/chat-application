import React from 'react';

type MessageListProps = {
    messages: Array<{ id: number, text: string, sender: string }>;
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="flex-1 overflow-y-auto p-4">
            {messages.map(message => (
                <div key={message.id} className="mb-4">
                    <div className="text-sm text-gray-600">{message.sender}</div>
                    <div className="mt-1">{message.text}</div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
