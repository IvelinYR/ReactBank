import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';


import App from './App';
import Content from './container/Content';
import CreateAccount from './container/CreateAccount';
import Transaction from './container/Transaction';
import allReducers from './reducers'
import './index.css';

let axios = require('axios');

axios.defaults.baseURL = '/';

let store = createStore(allReducers, {},applyMiddleware(axiosMiddleware(axios)));

const accountList = [
    {id: 1, title: 'ACCOUNT-1', type: "VISA", amount: 100, currency: "GBP"},
    {id: 2, title: 'ACCOUNT-2', type: "Master", amount: 200, currency: "BGN"},
    {id: 3, title: 'ACCOUNT-3', type: "Maestro", amount: 300, currency: "USD"},
    {id: 4, title: 'ACCOUNT-4', type: "Maestro", amount: 300, currency: "EUR"},
];

const transactionList = [
    {type: "Withdrawal", date: "04/12/2017 12:49:20", operation: 250.00, id: 1},
    {type: "Deposit", date: "04/22/2017 06:49:20", operation: 1000.00, id: 1},
    {type: "Deposit", date: "04/12/2017 12:49:20", operation: 100.00, id: 2},
    {type: "Deposit", date: "04/12/2017 12:49:20", operation: 100.00, id: 3},
    {type: "Deposit", date: "04/12/2017 12:49:20", operation: 100.00, id: 4},
];

let MockAdapter = require('axios-mock-adapter');
let mock = new MockAdapter(axios);

mock.onGet('/accounts').reply(200,
    accountList
);

mock.onPost('/history').reply(function (config) {
    let obj = config.data;
    let newTransaction = JSON.parse(obj);
    let idNumber = Number(newTransaction.id);
    let result = transactionList.filter(function (obj) {
        return obj.id === idNumber;
    });
    return [201, result]
});

mock.onPost('/transaction/').reply(function (config) {
    let obj = config.data;
    let newAccount = JSON.parse(obj);
    let result = newAccount.id - 1;
    return [201, accountList[result]]
});

mock.onPost('/transaction/deposit').reply(function (config) {
    let obj = config.data;
    let newAccount = JSON.parse(obj);
    let accountId = newAccount.id - 1;
    let amount = accountList[accountId].amount;
    let accountDeposit = newAccount.input;
    let result = Number(amount) + Number(accountDeposit);
    accountList[accountId].amount = result;
    return [201, accountList[accountId]];
});

mock.onPost('/transaction/withdrawals').reply(function (config) {
    let obj = config.data;
    let newAccount = JSON.parse(obj);
    let accountId = newAccount.id - 1;
    let amount = accountList[accountId].amount;
    let accountDeposit = newAccount.input;
    let result = Number(amount) - Number(accountDeposit);
    accountList[accountId].amount = result;
    return [201, accountList[accountId]];
});


mock.onPost('/accounts').reply(function (config) {
    let obj = config.data;
    let newAccount = JSON.parse(obj)
    newAccount.id = accountList.length + 1;
    newAccount.title = "ACCOUNT-" + (accountList.length + 1);
    accountList.push(newAccount);
    return [201]
});

mock.onPost('/history/transaction').reply(function (config) {
    let obj = config.data;
    let newTransaction = JSON.parse(obj);
    transactionList.push(newTransaction);
    return [201]

});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Content}/>
                <Route path="account" component={CreateAccount}/>
                <Route path="/transaction/:id" component={Transaction}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);