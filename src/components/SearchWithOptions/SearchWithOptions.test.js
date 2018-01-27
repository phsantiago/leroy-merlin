import React from 'react';
import ReactDOM from 'react-dom';
import SearchWithOptions from './SearchWithOptions.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchWithOptions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
