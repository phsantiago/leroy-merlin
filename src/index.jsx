import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App/App.jsx', () => {
    render(App);
  });
}

registerServiceWorker();
