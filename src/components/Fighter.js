import React, { Component } from 'react';
import axios from 'axios';

class Fighter extends Component {

    
        state = {
            fighters: []
        };

        componentDidMount() {
            axios.get('http://ufc-data-api.ufc.com/api/v3/us/fighters')
            .then(res => {
                console.log(res);
                this.setState({ fighters: res.data });
            })
        }

        render() { 
        return ( <div>
        <ul>{this.state.fighters.map(fighter => <li key={fighter}>{fighter.first_name} {fighter.last_name}</li>)}</ul>
      </div> );
    }
}
 
export default Fighter;