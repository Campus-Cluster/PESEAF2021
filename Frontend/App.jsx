
import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import NavigationBar from "./src/components/navbar/NavigationBar";

function App() {

    return (
        <div className="container">
            <h1>Hello World</h1>
            {/* <Router>
                <NavigationBar/>
                <Switch>
                    <Route exact path="/"><Homepage/></Route>
                    <Route path="/subject"><Subject/></Route>
                </Switch>
            </Router> */}
        </div>
    );
}

export default App;