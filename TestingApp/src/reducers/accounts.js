// const initialState = [
//     {
//         id: 1,
//         title: 'FROM REDUCERS',
//         type: "VISA",
//         amount: 555,
//         currency: "GBP"
//     },
//     {
//         id: 2,
//         title: 'FROM REDUCERS',
//         type: "Master",
//         amount: 200,
//         currency: "BGN"
//     },
//     {
//         id: 3,
//         title: 'FROM REDUCERS',
//         type: "Maestro",
//         amount: 300,
//         currency: "USD"
//     },
//     {
//         id: 4,
//         title: 'FROM REDUCERS',
//         type: "Maestro",
//         amount: 300,
//         currency: "EUR"
//     },
// ];

export default function accounts(state = [], action) {

    console.log('Action:', action.type);
    switch (action.type) {
        case 'ADD_ACCOUNTS':
            const newAccount = {
                typeAccount: action.typeAccount,
                amount: action.amount,
                currency: action.currency
            };
            console.log(newAccount)
            console.log("IN CORRECT CASE");
            return [...state, newAccount];
        default:
            // console.log("IN DEFAULT", action)

            return state
    }
}
