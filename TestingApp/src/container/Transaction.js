import React, {Component} from 'react';
import TransactionForm from '../components/TransactionForm'
import History from '../components/History'

let axios = require('axios');
export default class Transaction extends Component {

    constructor() {
        super();
        this.state = {
            account: [],
            transaction: [],
            value: ''
        };
        this.handleAddDeposit = this.handleAddDeposit.bind(this);
        this.handleAddWithdrawals = this.handleAddWithdrawals.bind(this);
        this.handleAddTransaction = this.handleAddTransaction.bind(this);
        this.handleAddTransactionWithdrawals = this.handleAddTransactionWithdrawals.bind(this);
    }


    handleAddDeposit(e) {
        let inputValue = e.value;
        axios.post('/transaction/deposit', {input: inputValue, id: this.props.params.id})
            .then(res => {
                axios.post('/history', {id: this.props.params.id})
                    .then(res => {
                        this.setState({transaction: res.data});
                    });
                this.setState({account: res.data});
            });
    }

    handleAddWithdrawals(e) {
        let inputValue = e.value;
        axios.post('/transaction/withdrawals', {input: inputValue, id: this.props.params.id})
            .then(res => {
                axios.post('/history', {id: this.props.params.id})
                    .then(res => {
                        this.setState({transaction: res.data});
                    });
                this.setState({account: res.data});
            });

    }


    handleAddTransaction(e) {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        if (hour < 10) {
            hour = '0' + hour
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }

        today = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + minutes + ':' + seconds;
        let inputValue = e.value;
        axios.post('/history/transaction', {
            type: "Deposit",
            date: today,
            operation: inputValue,
            id: Number(this.props.params.id)
        })
            .then(function (response) {
            })
    }

    handleAddTransactionWithdrawals(e) {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        if (hour < 10) {
            hour = '0' + hour
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        let inputValue = e.value;
        today = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + minutes + ':' + seconds;

        axios.post('/history/transaction', {
            type: "Withdrawal",
            date: today,
            operation: inputValue,
            id: Number(this.props.params.id)
        })
            .then(function (response) {
            })
    }

    componentWillMount() {
        axios.post('/history', {id: this.props.params.id})
            .then(res => {
                this.setState({transaction: res.data});
            });
    }

    componentDidMount() {
        axios.post('/transaction/', {id: this.props.params.id})
            .then(res => {
                this.setState({account: res.data});
            });
    }

    render() {
        return (
            <div>
                <TransactionForm transaction={this.state.transaction}
                                 account={this.state.account}
                                 value={this.state.value}
                                 onSubmitDeposit={this.handleAddDeposit}
                                 onSubmitWithdrawals={this.handleAddWithdrawals}
                                 onSubumitInput={this.handleChange}
                                 onSubmitTransaction={this.handleAddTransaction}
                                 onSubmitTransactionWithdrawals={this.handleAddTransactionWithdrawals}/>
                <History transaction={this.state.transaction}/>
            </div>
        )
    }
}