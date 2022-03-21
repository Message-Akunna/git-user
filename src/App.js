import React, { Fragment } from "react";
import { Placeholder } from "react-bootstrap";
// 
import { Routes, Route } from "react-router-dom";
// component
import Main from "./components/main";
import Result from "./components/result";
import WelcomeState from "./components/placeholder/WelcomeState";
import WrongRouteState from "./components/placeholder/WrongRouteState";

function App() {
    return (
        <Fragment>
            <Main>
                <Routes>
                    <Route exact path="/" element={<WelcomeState/>} />
                    <Route exact path="/:name/:tab" element={<Result/>} />
                    <Route path="*" element={<WrongRouteState />} />
                </Routes>
            </Main>
        </Fragment>
  );
}

export default App;
