// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';

// ReactDOM.render(
//     <Provider store={store}>
//     <App />
//     </Provider>,
//   document.getElementById('root')
// );

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
    <App />
    </Provider>,
);

