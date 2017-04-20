import React, {Component} from 'react'
import AccountListItem from './AccountListItem'
import {Link} from 'react-router'
import './AccountsList.css'

export default class Accounts extends Component {

    componentDidMount() {
        this.props.loadAccounts()
    }

    render() {

        const {accounts} = this.props;

        return (
            <div className="table">
                <br/>
                <Link to="/account" className="active">NewAccount</Link>
                <table>
                    <thead>
                    <tr>
                        <td>Account Number</td>
                        <td>Account Type</td>
                        <td>Balance</td>
                    </tr>
                    </thead>
                    <tbody>
                    {accounts.map((account, i) => {
                            account = {...account};
                            return <AccountListItem key={i} account={account}/>;
                        }
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
};