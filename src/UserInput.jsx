import React, { Component } from 'react';

class UserInput extends React.Component {
    state = {  
        value : this.state.value
    }
    render() { 
        return (  
            <form >
            <label >
              <input type="text" value={this.state.value} />
            </label>
            </form>
        );
    }
}
 
export default UserInput;