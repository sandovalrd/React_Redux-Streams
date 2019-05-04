import React from 'react';
// Existen estos tres tipos => MemoryRouter, HashRouter y BrowserRouter
import { Router, Route, Switch } from 'react-router-dom'; // npm install --save react-router-dom
import streamCreate from './streams/StreamCreate';
import streamEdit from './streams/StreamEdit';
import streamDelete from './streams/StreamDelete';
import streamShow from './streams/StreamShow';
import streamList from './streams/StreamList';
import history from '../history';
import Header from './Header';
// https://console.developers.google.com/ clase 208

const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={streamList} />
                        <Route path='/streams/new' exact component={streamCreate} />
                        <Route path='/streams/delete/:id' exact component={streamDelete} />
                        <Route path='/streams/edit/:id' exact component={streamEdit} />
                        <Route path='/streams/:id' exact component={streamShow} />
                    </Switch>
                </div>
            </Router>
        </div>)
}


export default App;