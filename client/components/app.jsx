import React from 'react';
import Hero from './hero';
import FilmSummary from './film-summary';
import Specs from './specs';

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <FilmSummary />
        <Specs />
      </>
    );
  }
}

export default App;
