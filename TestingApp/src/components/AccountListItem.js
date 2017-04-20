import React from 'react';
import {Link} from 'react-router';

export default (props) => {
    const {id, title, type, amount, currency} = props.account;

    return (
        <tr>
            <th><Link to={"/transaction/" + id} className='iban'>{title}</Link></th>
            <th className="type">{type}</th>
            <th className="amount">{currency + ' ' + amount}</th>
        </tr>
    );
};
