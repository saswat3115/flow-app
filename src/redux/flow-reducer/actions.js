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

export const addNode = (flowId) => ({
  type: 'ADD_NEW_NODE',
  flowId,
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

export const suffleNodes = (flowId) => ({
  type: 'SUFFLE_NODES',
  flowId,
});

export const updateFlowTitle = (flowId, title) => ({
  type: 'UPDATE_FLOW_TITLE',
  flowId,
  payload: title,
});

export const updateNodeTitle = (flowId, nodeId, title) => ({
  type: 'UPDATE_NODE_TITLE',
  flowId,
  nodeId,
  payload: title
});

export const updateNodeContent = (flowId, nodeId, content) => ({
  type: 'UPDATE_NODE_CONTENT',
  flowId,
  nodeId,
  payload: content,
});

export const validateNodesCompletion = (nodes) => {
  let allNodes = nodes || [];
  let validCount = 0;
  allNodes.forEach((item) => {
    if (item.status === 'completed') {
      validCount = validCount + 1;
    }
  });
  return validCount === allNodes.length;
}