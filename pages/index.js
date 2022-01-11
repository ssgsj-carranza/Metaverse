import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  
  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Metaverse</h1>
      
      <div>
        <div className='max-w-screen-2xl mx-auto'>
          {/* header */}
          <Header />
          {/* messages */}
        </div>
      </div>
      
      <button onClick={logout}>Logout</button>
    </div>
  );
}


// npm install react-moralis
// npm install moralis
// npm install @walletconnect/web3-provider
