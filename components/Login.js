import Image from "next/image";

function Login() {
    return (
        <div className="bg-black relative">
            <h1>Login</h1>
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
                {/* logo */}
                <Image
                    className="object-cover rounded-full" 
                    src='https://ml.globenewswire.com/Resource/Download/dc9ca8e0-ed7e-48d8-a73c-5b8278eb5a0a?size=2'
                    height={200}
                    width={200}
                />
                {/* login button */}
                <button className="bg-purple-400 rounded-lg p-5 font-bold animate-bounce">Login into Metaverse</button>
            </div>

            <div className="w-full h-screen">
                {/* background image */}
                <Image 
                    src='https://venturebeat.com/wp-content/uploads/2021/09/virtual_reality.jpg?fit=3840%2C2160&strip=all'
                    layout='fill'
                    objectFit="cover"
                />
            </div>        
        </div>
    );
}

export default Login
