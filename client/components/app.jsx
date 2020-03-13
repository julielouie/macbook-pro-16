import React from 'react';
import Hero from './hero';
import FilmSummary from './film-summary';

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <FilmSummary />
      </>
    );
  }
}

export default App;
