import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import storeObj from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeObj.store}>
      <PersistGate loading={'Loading...'} persistor={storeObj.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
