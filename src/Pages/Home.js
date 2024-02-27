import React from 'react'
import Header from '../components/Header/Header';
import AgaraHub from '../components/Header/content/Heading';
import Main from '../components/meaning/main';
import Footer from '../components/Footer/Footer';
function Home() {
  return (
      <div>
         <Header/>
         <AgaraHub />
         <Main />
         <Footer />
      </div>
  );
}

export default Home