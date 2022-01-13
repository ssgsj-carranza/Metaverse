import { useState } from 'react';
import {useMoralis} from 'react-moralis';

function SendMessage() {
    const {user, Moralis} = useMoralis();
    const [message, setMessage] = useState('');

    return (
        <form className='flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border border-blue-400'>
            <input  className='flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5' 
                    type='text' 
                    placeholder={`Enter a Message ${user.getUsername()}...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}        
            />
            <button className='font-bold text-pink-500'>Send</button>        
        </form>
    )
}

export default SendMessage;
