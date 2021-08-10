import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { StateProvider } from './pages/utils/StateProvider';
import reducer, { initialState } from './pages/utils/reducer';
ReactDOM.render(
    <React.StrictMode>
        {/* initialState is what data layer look like in beginning &
        reducer is how we manipulate the data layer */}
        <StateProvider initialState={initialState} reducer={reducer}>
            <App/>
        </StateProvider>
    </React.StrictMode>
    ,
    document.getElementById('app')
);

module.hot.accept();