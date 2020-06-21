const intitalData = {
    email: '',
};

const reducer = (state = intitalData, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                email: action.paylaod.email
            };
        default:
            return state;
    }
}

export const authenticate = (paylaod) => ({
    type: 'AUTH_SUCCESS',
    paylaod,
});

export default reducer;