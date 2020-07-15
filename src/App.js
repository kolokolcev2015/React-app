import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Products from "./pages/Products";
import Login from "./pages/login";
function App() {
        let session = 1;
        return (
            <Router>
                {session ? <Products/> : <Login/>}
            </Router>
        );
    }


export default App;
