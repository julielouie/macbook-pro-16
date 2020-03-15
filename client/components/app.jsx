import React from 'react';
import Header from './header';
import Hero from './hero';
import FilmSummary from './film-summary';
import Specs from './specs';
import RetinaHeadline from './retina-headline';
import RetinaSummary from './retina-summary';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <FilmSummary />
        <Specs />
        <RetinaHeadline />
        <RetinaSummary />
      </>
    );
  }
}

export default App;
