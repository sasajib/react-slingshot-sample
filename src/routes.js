import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'ampersand-router';
import PublicPage from './codes/pages/PublicPage';
import RepoPage from './codes/pages/RepoPage';


export default Router.extend({
    routes: {
        "" : "public",
        "repo": "repo"
    },
    public(){
            ReactDOM.render(<PublicPage />, document.getElementById("app"));
    },
    repo(){
        ReactDOM.render(<RepoPage />, document.getElementById("app"));
    }
});
