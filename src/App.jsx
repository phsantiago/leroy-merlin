import React from 'react';
import { AppContainer } from 'react-hot-loader';
import Header from './components/Header/Header.jsx';
import styles from './App.css';

const App = () => (
  <AppContainer>
    <div className={styles.App}>
      <Header />
    </div>
  </AppContainer>
);
export default App;
