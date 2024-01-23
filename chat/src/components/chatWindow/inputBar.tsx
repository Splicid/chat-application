import React, { useState } from 'react';

type InputBarProps = {
    onSendMessage: (message: string) => void;
};

const InputBar: React.FC<InputBarProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSendMessage(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex p-4 border-t border-gray-300">
            <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Type a message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button
                type="submit"
                className="ml-4 px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-none"
            >
                Send
            </button>
        </form>
    );
};

export default InputBar;
