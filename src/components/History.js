import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { HistoryContainer, HistoryHeading, IncomeHistory, HistoryTitle, HistoryNumber, ExpencesHistory } from "../GlobalCSS"
const History = () => {
    const { expensesReducer } = useSelector(state => state);
    const { histories } = expensesReducer;
    const dispatch = useDispatch();
    const deleteHistory = (status, id, amount) => {
        if (status === 'inc') {
            dispatch({ type: 'DELETE_INC', payload: { id, amount } })
        } else if (status === 'exp') {
            dispatch({ type: 'DELETE_EXP', payload: { id, amount } })
        }
    }
    // return ({ expensesReducer.histories.length > 0 ? 'Cool' : 'Sorry' })
    return (
        < HistoryContainer >
            <HistoryHeading>
                Transaction History
             </HistoryHeading>
            {histories.length > 0 ? histories.map(history => (
                <>
                    {history.status === 'In' ? <IncomeHistory className="cool" onClick={() => deleteHistory("inc", history.id, history.amount)}>
                        <HistoryTitle>
                            {history.title}
                        </HistoryTitle>
                        <HistoryNumber>
                            ${history.amount}
                        </HistoryNumber>
                    </IncomeHistory> : <ExpencesHistory className="cool" onClick={() => deleteHistory("exp", history.id, history.amount)}>
                            <HistoryTitle>
                                {history.title}
                            </HistoryTitle>
                            <HistoryNumber>
                                ${history.amount}
                            </HistoryNumber>
                        </ExpencesHistory>}

                </>
            )) : 'No history record!'

            }

        </HistoryContainer >
    )
}
export default History;