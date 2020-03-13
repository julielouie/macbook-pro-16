import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const app = <App />;
const rootElem = document.querySelector('#root');

ReactDOM.render(app, rootElem);
