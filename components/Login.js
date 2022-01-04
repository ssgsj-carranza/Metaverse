import Image from "next/image";

function Login() {
    return (
        <div className="bg-black relative text-white">
            <h1>Login</h1>
            <div>
                {/* logo */}
                {/* login button */}
            </div>

            <div className="w-full h-screen">
                {/* background image */}
                <Image 
                    src='https://links.papareact.com/55n'
                    layout='fill'
                    objectFit="cover"
                />
            </div>        
        </div>
    );
}

export default Login
