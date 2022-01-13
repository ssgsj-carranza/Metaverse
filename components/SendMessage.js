import {useMoralis} from 'react-moralis';

function SendMessage() {
    const {user} = useMoralis();

    return (
        <form>
            <input  className='outline-none bg-transparent text-white placeholder-gray-500' 
                    type='text' 
                    placeholder={`Enter a Message ${user.getUsername()}...`}        
            />
            <button className='font-bold text-pink-500'>Send</button>        
        </form>
    )
}

export default SendMessage
