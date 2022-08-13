import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import './styles/reset.css';
import './styles/main.css';
import App from './components/app';
import { store } from './store';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

Object.defineProperty(window, 'reduxState', {
  get() {
    return store.getState();
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
