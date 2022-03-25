//våra actions säger vad vi skall uppdatera
//ADD_PIGGELIN
const addPiggelin = (data) => {
    return {
        type: 'ADD_PIGGELIN',
        payload: data
    }
}

//REMOVE_PIGGELIN
const buyPiggelin = (data) => {
    return {
        type: 'BUY_PIGGELIN',
        payload: data
    }
}

export { addPiggelin, buyPiggelin };