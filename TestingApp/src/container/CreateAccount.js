import React, {Component} from 'react';
import NewAccount from '../components/NewAccount';


let axios = require('axios');

export default class CreateAccount extends Component {
    constructor() {
        super();
        this.handleAddAccount = this.handleAddAccount.bind(this)
    }

    handleAddAccount(account) {
        axios.post('/accounts', {
            amount: 0,
            currency: account.currency,
            id: account.id,
            title: account.title,
            type: account.type
        })
            .then(function (response) {
            })
    }

    render() {
        return <div>
            <NewAccount onSubmitAccount={this.handleAddAccount}/>
        </div>
    }
}