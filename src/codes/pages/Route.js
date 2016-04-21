import React from 'react';
import localLinks from 'local-links';
import app from 'ampersand-app';

export default React.createClass({

    routeWatcher(event){
        const pathName = localLinks.getLocalPathname(event);
        if(pathName){
            event.preventDefault();
            app.router.history.navigate(pathName);
        }
    },

    render(){
        return(
                <div {...this.props} onClick={this.routeWatcher}>
                    {this.props.children}
                </div>
        );
    }
});