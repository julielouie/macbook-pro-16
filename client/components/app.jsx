import React from 'react';
import Header from './header';
import Hero from './hero';
import FilmSummary from './film-summary';
import Specs from './specs';
import RetinaHeadline from './retina-headline';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <FilmSummary />
        <Specs />
        <RetinaHeadline />
      </>
    );
  }
}

export default App;
