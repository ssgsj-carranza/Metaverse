import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";


function Header() {
    const {user} = useMoralis();
    return (
        <div className="text-pink-500">
            <div className="">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        className="rounded-full" 
                        src='https://ml.globenewswire.com/Resource/Download/dc9ca8e0-ed7e-48d8-a73c-5b8278eb5a0a?size=2' 
                    />
                </div>
                
                <div>
                    <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
                        <Avatar logoutOnPress />        
                    </div>
                    
                    <h1 className='text-3xl'>Welcome to the METAVERSE</h1>
                    <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>
                    
                    <ChangeUsername />

                    {/* change username */}
                </div>
            </div>        
        </div>
    )
}

export default Header
