export const addFlow = (payload) => ({
  type: 'ADD_FLOW',
  payload,
});

export const deleteFlow = (id) => ({
  type: 'DELETE_FLOW',
  payload: id,
});

export const toggleStatus = (id) => ({
  type: 'TOGGLE_STATUS',
  payload: id,
});