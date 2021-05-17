import React, { Component } from 'react';

class CharacterRace extends Component { 

    render() { 
        return(
            <div>
                <h3>Select Race</h3>

                <form>
                    <div className="form-check">
                    <input type="radio" value="human" id="human" onChange={this.handleOptionChange} name="characterRace" />
                    <label>Human</label>

                    <input type="radio" value="orc" id="orc" onChange={this.handleOptionChange} name="characterRace" />
                    <label>Orc</label>

                    <input type="radio" value="troll" id="troll" onChange={this.handleOptionChange} name="characterRace" />
                    <label>Troll</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default CharacterRace;
