import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ItemPage from './components/ItemPage';
import NotFoundPage from './components/NotFoundPage';
import SearchPage from './components/SearchPage';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">            
                <Router>
                    <Switch>
                        <Route key="home" path="/" component={SearchPage} exact/>
                        <Route key="item-page" path="/items/:id" component={ItemPage} exact />
                        <Route key="search-page" path="/items" component={SearchPage} />
                        <Route key="not-found-page" component={NotFoundPage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
