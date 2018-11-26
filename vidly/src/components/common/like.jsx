import React, {Component} from 'react';

//Input: like: boolean Output: onClick

class Like extends Component {
    state = {}
    render() {
        let classes = "fa fa-heart";
        if (!this.props.liked) 
            classes += "-o";
        return (<i
            style={{
            cursor: "pointer"
        }}
            className={classes}
            onClick={this.props.onClick}
            aria-hidden="true"/>);
    }
}

export default Like;