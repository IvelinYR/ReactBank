export function loadAccounts() {
    return {
        type: 'LOAD_ACCOUNTS',
        payload: {
            request: {
                url: '/v1/accounts'
            }
        }
    }
}

export function addAccount() {
    return {
        type: 'ADD_ACCOUNTS',
        payload: {
            request: {
                url: '/accounts'
            }
        }
    }
}

