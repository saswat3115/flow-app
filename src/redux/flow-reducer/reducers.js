import shortid from 'shortid';

const initialState = localStorage.getItem('flows') ? JSON.parse(localStorage.getItem('flows')): [
    { id: shortid.generate(), title: 'Workflow 1', status: false }
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FLOW':
        return [
            ...state,
            action.payload
        ];
      case 'DELETE_FLOW':
        return [
            ...state.filter(f => f.id !== action.payload)
        ];
      case 'TOGGLE_STATUS':
        let flow = state.find((f) => f.id === action.payload);
        if (flow) {
          flow.status = !flow.status;
        }
        return [
          ...state
        ];
      default:
        return state;
    }
}

export default reducer;