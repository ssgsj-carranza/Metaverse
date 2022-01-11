import Image from "next/image";
import { useMoralis } from "react-moralis";


function Header() {
    const {user} = useMoralis();
    return (
        <div>
            <div>
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        className="rounded-full" 
                        src='https://ml.globenewswire.com/Resource/Download/dc9ca8e0-ed7e-48d8-a73c-5b8278eb5a0a?size=2' 
                    />
                </div>
            </div>        
        </div>
    )
}

export default Header
