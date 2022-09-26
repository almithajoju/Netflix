import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import{ Action,Originals,Comedy, Romantic, Horror, Trending, documentaries} from './urls';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={Trending} title='Trending Movies' isSmall/>
      <RowPost url={Action} title='Action Movies' isSmall/>
      <RowPost url={Comedy} title='Comedy Movies' isSmall/>
      <RowPost url={Romantic} title='Romantic Movies' isSmall/>
      <RowPost url={Horror} title='Horror Movies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
