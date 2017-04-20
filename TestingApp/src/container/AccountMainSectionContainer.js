import { connect } from 'react-redux';

import { loadAccounts, addAccount } from '../action/account';

import AccountList from '../components/AccountList';

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    };
};

const mapDispatchToProps = () => {
    return {
        onSubmitAccount: addAccount,
        loadAccounts: loadAccounts
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
