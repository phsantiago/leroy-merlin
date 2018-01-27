import React from 'react';
import ReactDOM from 'react-dom';
import LinkList from './LinkList.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkList haystack={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
