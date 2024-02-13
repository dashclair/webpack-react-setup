import React from 'react';
import ReactDOM  from "react-dom";
import { App } from "./App";
import { CatCard } from "./CatCard";


ReactDOM.render(
    <App>
        <CatCard/>
    </App>, 
    document.getElementById('root')
)