const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((previousResult, currentValue) => previousResult + currentValue, 5));

const actions = [
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "decrement", payload: 1 },
];

const initialState = {
    value: 0
}

const actionsReducer = (state = initialState, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else {
        return state;
    }
}

const finalResult = actions.reduce(actionsReducer, initialState);

console.log(finalResult);
