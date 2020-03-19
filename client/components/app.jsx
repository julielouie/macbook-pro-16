import React from 'react';
import Header from './header';
import VideoModal from './video-modal';
import Hero from './hero';
import FilmSummary from './film-summary';
import Specs from './specs';
import RetinaHeadline from './retina-headline';
import RetinaSummary from './retina-summary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const videoModal = this.state.showModal ? <VideoModal toggleModal={this.toggleModal} /> : null;
    return (
      <>
        {videoModal}
        <Header />
        <Hero />
        <FilmSummary toggleModal={this.toggleModal} />
        <Specs />
        <RetinaHeadline />
        <RetinaSummary />
      </>
    );
  }
}

export default App;
