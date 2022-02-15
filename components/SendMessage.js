import { useState } from 'react';
import {useMoralis} from 'react-moralis';

function SendMessage() {
    const {user, Moralis} = useMoralis();
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        if(!message) return;

        //Creates a table in the data base for messages, prepping it
        const Messages = Moralis.Object.extend('Messages');
        //Gives us object to update or pushover to moralis
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAdress: user.get('ethAddress')
        })
    };

    return (
        <form className='flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border border-blue-400'>
            <input  className='flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5' 
                    type='text' 
                    placeholder={`Enter a Message ${user.getUsername()}...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}        
            />
            <button type='submit' onClick={sendMessage} className='font-bold text-pink-500'>Send</button>        
        </form>
    )
}

export default SendMessage;
