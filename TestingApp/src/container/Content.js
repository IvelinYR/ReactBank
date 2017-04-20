import React, {Component} from 'react';
// import AccountList from '../components/AccountList'
import AccountMainSectionContainer from './AccountMainSectionContainer'

// let axios = require('axios');

export default class Content extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         accounts: []
    //     };
    // }
    //
    // componentDidMount() {
    //     axios.get('/accounts')
    //         .then(res => {
    //             this.setState({accounts: res.data});
    //         });
    // }

    render() {
        return <div>
            <AccountMainSectionContainer />
            {/*<AccountList accounts={this.state.accounts}/>*/}
        </div>
    }
}