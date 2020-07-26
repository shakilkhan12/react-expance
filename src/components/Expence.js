import React from "react"
import { useSelector } from "react-redux"
import { MdControlPoint, MdRemoveCircle, MdAssignmentTurnedIn, MdPlaylistAdd, MdEnhancedEncryption, MdCancel } from "react-icons/md"
import { ExpenceTracker, TotalExpence, Heading, ExpenceNumber, Income, TotalExp, SpanTag, Empty, ExpTag, TotalTag } from "../GlobalCSS"
const Expence = () => {
    const { expensesReducer } = useSelector(state => state);
    // console.log('Exp: ========: ', expensesReducer)
    return (
        <ExpenceTracker>
            <TotalExpence>
                <Heading>Total Expence</Heading>
                <ExpenceNumber>${expensesReducer.totalExpenses} <Empty><TotalTag><MdAssignmentTurnedIn /></TotalTag></Empty></ExpenceNumber>
            </TotalExpence>
            <Income>
                <Heading>Total Income</Heading>
                <ExpenceNumber>${expensesReducer.Income} <Empty><SpanTag><MdEnhancedEncryption /></SpanTag></Empty></ExpenceNumber>
            </Income>
            <TotalExp>
                <Heading>Total Expenses</Heading>
                <ExpenceNumber>${expensesReducer.Expenses} <Empty><ExpTag><MdCancel /></ExpTag></Empty></ExpenceNumber>
            </TotalExp>
        </ExpenceTracker>
    )
}
export default Expence;