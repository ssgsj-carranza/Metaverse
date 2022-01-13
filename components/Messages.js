import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis';

function Messages() {
    const {user} = useMoralis();

    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis variant='dark' style={{marginLeft:'auto', marginRight:'auto'}} />
            </div>

            <div>
                {/* messages render */}
            </div>

            <div>
                {/* <SendMessage /> */}
            </div>

            <div>
                <p>You're up to date {user.getUsername()}! 🎉</p>
            </div>
            
        </div>
    )
}

export default Messages
