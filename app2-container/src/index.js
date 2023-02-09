import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

window.renderApp2 = (containerId, history) => {
  const rootElement = document.getElementById(containerId);
  const root = createRoot(rootElement);

  root.render(
    <App history={history} />,
  );
  serviceWorker.unregister();
};

window.unmountApp2 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('App2-container')) {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  root.render(<App />,);
  serviceWorker.unregister();
}

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();