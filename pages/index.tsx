
import styled from 'styled-components';
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout';
import GlobalStyle from '@/components/GlobalStyle';
import HomeContent from '@/components/Home/HomeContent';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <GlobalStyle />
      <Container>
        <Layout />
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
