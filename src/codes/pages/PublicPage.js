import React from "react";
import Route from "./Route";

export default React.createClass({

    render(){
        return (
                <Route className="container">
                    <div>
                        <h2>Home</h2>
                        <a href="repo">Go to Repo</a>
                    </div>
                </Route>
        );
    }
});