import React, {Fragment} from 'react';
import {MainPage} from "./pages/main";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", serif;
    }

    body, #root {
        min-height: 100vh;
    }
`;

function App() {
    return (
        <Fragment>
            <GlobalStyle/>
            <MainPage/>
        </Fragment>
    );
}

export default App;
