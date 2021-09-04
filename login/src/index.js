import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";


ReactDOM.render(
      <App />,
  document.getElementById('root')
);


// if user is already register in system then show login button if not then register button 
// and with that if user is not register then show additional confirm password field  