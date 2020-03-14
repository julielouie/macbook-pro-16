import React from 'react';
import Header from './header';
import Hero from './hero';
import FilmSummary from './film-summary';
import Specs from './specs';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <FilmSummary />
        <Specs />
      </>
    );
  }
}

export default App;
