import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getAccessToken } from './utils/localstorage.js';
import { fetchMe } from './features/auth/slice/auth-slice.js';
import { Provider } from 'react-redux';
import store from './store';

if (getAccessToken()) {
  store.dispatch(fetchMe());
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
