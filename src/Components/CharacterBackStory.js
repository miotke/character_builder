import React, { Component } from 'react';

class CharacterBackStory extends Component {

    render() {
        return (
            <div>
                <h3>Back Story</h3>
                <p>{this.props.backstory}</p>
            </div>
        )
    }
}

export default CharacterBackStory;
