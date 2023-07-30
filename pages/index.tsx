
import HomeP from '@/components/HomePage'
import { Inter } from 'next/font/google'
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from '@/components/Global/Navbar';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <HomeP />
      <Navbar />
    </>
  )
}
