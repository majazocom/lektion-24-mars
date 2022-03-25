const initialState = {
    piggelin: 12,
    sandwich: 1,
    employees: [{
            id: 23341,
            name: 'Kalle Kuling',
            what: 'Staff'
        },
        {
            id: 23342,
            name: 'Pelle Svanslös',
            what: 'Cleaner'
        }
    ]
}

//här har vi vår reducer som hanterar snacket mellan actions och store
//reducers är till för att uppdatera våra states

const icecreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIGGELIN':
            return {
                ...state,
                piggelin: state.piggelin + action.payload
            }
        case 'BUY_PIGGELIN':
            return {
                ...state,
                piggelin: state.piggelin - action.payload
            }
        default:
            return state;
    }
}

export default icecreamReducer;