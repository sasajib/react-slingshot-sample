import React from "react";
import Route from "./Route";


export default React.createClass({

    render(){
        return (
                <Route>
                    <div>
                        <h2>Repo</h2>
                        <a href="/">Go to Home</a>
                    </div>
                </Route>
        );
    }
});