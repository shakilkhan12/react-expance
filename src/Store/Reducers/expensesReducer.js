// import { v4 } from "uuid"

const inState = {
    totalExpenses: 0.00,
    Expenses: 0.00,
    Income: 0.00,
    histories: []
}

const expensesReducer = (state = inState, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            if (action.payload.amount < 0) {
                return {
                    ...state,
                    totalExpenses: state.totalExpenses + parseInt(action.payload.amount),
                    Expenses: state.Expenses + parseInt(action.payload.amount),
                    histories: [...state.histories, { id: Math.random().toString(36).substring(7), title: action.payload.title, status: 'Ex', amount: action.payload.amount }]
                }
            } else if (action.payload.amount > 0) {
                return {
                    ...state,
                    totalExpenses: state.totalExpenses + parseInt(action.payload.amount),
                    Income: state.Income + parseInt(action.payload.amount),
                    histories: [...state.histories, { id: Math.random().toString(36).substring(7), title: action.payload.title, status: 'In', amount: action.payload.amount }]
                }
            }
        case 'DELETE_INC':
            console.log(action.payload)
            return {
                ...state,
                totalExpenses: state.totalExpenses - parseInt(action.payload.amount),
                Income: state.Income - parseInt(action.payload.amount),
                histories: state.histories.filter(history => history.id !== action.payload.id)
            }
        case 'DELETE_EXP':
            console.log(action.payload)
            return {
                ...state,
                totalExpenses: state.totalExpenses - parseInt(action.payload.amount),
                Expenses: state.Expenses - parseInt(action.payload.amount),
                histories: state.histories.filter(history => history.id !== action.payload.id)
            }
        default:
            return state;
    }
}
export default expensesReducer