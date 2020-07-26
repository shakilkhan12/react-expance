import React from "react"
import { ModelContainer, ModelContent, Group, LgButton, MainHeading, Input } from "../GlobalCSS"
import { useSelector, useDispatch } from "react-redux"
const Model = () => {
    const [state, setState] = React.useState({
        title: '',
        amount: 0
    });
    const { modelReducer, expensesReducer } = useSelector(state => state);
    // console.log(expensesReducer.)
    const dispatch = useDispatch();
    console.log('Expenses: ', expensesReducer, expensesReducer.Expenses, expensesReducer.Income)
    const updateModel = (e) => {
        let mod = e.target.getAttribute('id');
        if (mod === 'modd') {
            dispatch({ type: 'MODEL_ACTION' })
        }
    }
    const inputs = e => {
        let value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    const addExpence = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_INCOME', payload: { amount: state.amount, title: state.title } })
        dispatch({ type: 'MODEL_ACTION' })
    }
    return (
        <>
            {modelReducer.status ? <ModelContainer onClick={updateModel} id="modd">
                <ModelContent>
                    <form onSubmit={addExpence}>
                        <Group>
                            <MainHeading>
                                Add New Expense
                     </MainHeading>
                        </Group>
                        <Group>
                            <Input type="text" name="title" placeholder="Title" onChange={inputs} required />
                        </Group>
                        <Group>
                            <Input type="number" name="amount" placeholder="Amount..." onChange={inputs} required />
                        </Group>
                        <Group>
                            <LgButton>Add Expense</LgButton>
                        </Group>
                    </form>
                </ModelContent>
            </ModelContainer> : ''}

        </>
    )
}

export default Model;