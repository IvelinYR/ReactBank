import React, {Component} from 'react';
import './TransactionForm.css';

export default class TransactionForm extends Component {
    constructor() {
        super();
        this.state = {
            account: [],
            transaction: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddDeposit = this.handleAddDeposit.bind(this);
        this.handleAddWithdrawals = this.handleAddWithdrawals.bind(this);
    }

    handleAddDeposit() {
        this.props.onSubmitDeposit({
            value: this.state.value
        });
        this.props.onSubmitTransaction({
            value: this.state.value
        });
        this.setState({value: ''});
    }

    handleAddWithdrawals() {
        this.props.onSubmitTransactionWithdrawals({
            value: this.state.value
        });
        this.props.onSubmitWithdrawals({
            value: this.state.value
        });
        this.setState({value: ''})
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {account} = this.props;
        let amount = account.amount;

        return (
            <div>
                <h1>{account.title}</h1>
                <h2>{account.currency} {amount}</h2>
                <input id="transaction" type="text" value={this.state.value} onChange={this.handleChange}/><br/>
                <button className="deposits" onClick={this.handleAddDeposit}>Deposit</button>
                <button className="withdrawals" onClick={this.handleAddWithdrawals}>Withdrawals</button>
            </div>
        )
    }
}
