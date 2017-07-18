import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(<HashRouter><Route path="/" component={App}></Route></HashRouter>,app);
registerServiceWorker();