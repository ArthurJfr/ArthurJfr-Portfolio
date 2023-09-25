
import styled from 'styled-components';
import { Inter } from 'next/font/google'

import GlobalStyle from '@/components/GlobalStyle';
import HomeContent from '@/components/HomeContent';
import Header from '@/components/Header';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <GlobalStyle />
      <Container>
        <Header />
        <HomeContent />
      </Container>
    </main>
  )
}

const Container = styled.div`
display : flex;
flex-direction : row;
width : 100%;
height: 100vh;
gap : 2rem;
`;
