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

export const addNode = (flowId, payload) => ({
  type: 'ADD_NEW_NODE',
  flowId,
  payload,
});

export const updateNodeStatus = (id, flowId) => ({
  type: 'UPDATE_NODE_STATUS',
  flowId,
  payload: id
});

export const deleteNode = (flowId) => ({
  type: 'DELETE_NODE',
  flowId,
});