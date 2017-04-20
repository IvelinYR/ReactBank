import React, {Component} from 'react';
import HistoryItem from './HistoryItem'

export default class History extends Component {
    render() {
        const {transaction} = this.props;

        return (<div className="container">
                <div className="table">
                    <br/>
                    <table>
                        <thead>
                        <tr>
                            <td>Type</td>
                            <td>Date</td>
                            <td>Transaction</td>
                        </tr>
                        </thead>
                        <tbody>
                        {transaction.map((transaction, i) => {
                                return <HistoryItem key={i} transaction={transaction}/>;
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}