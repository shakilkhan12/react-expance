const modelState = {
    status: false
}

const modelReducer = (state = modelState, action) => {
    
    switch(action.type){
        case 'MODEL_ACTION':
            return {
                status: !state.status
            }
        default: 
        return state;
    }

}
export default modelReducer;