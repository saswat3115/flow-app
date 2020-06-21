import { getInitialFlow, syncFlowToDB } from '../../database/db';
import shuffle from 'lodash/shuffle';

const initialState = getInitialFlow();

const reducer = (state = initialState, action) => {
    let newState = [];
    switch (action.type) {
      case 'ADD_FLOW': 
        newState = [
            ...state,
            action.payload
        ];
        break;
      case 'DELETE_FLOW':
        newState = [
          ...state.filter(f => f.id !== action.payload)
        ];
        break;
      case 'TOGGLE_STATUS': {
        let flow = state.find((f) => f.id === action.payload);
        if (flow) {
          flow.status = !flow.status;
        }
        newState = [...state];
      } 
        break;
      case 'ADD_NEW_NODE': {
        let flow = state.find(f => f.id === action.flowId);
        if (flow) {
          let newNodeId = flow.nodes.length + 1;
          let nodes = [...flow.nodes, {
            id: newNodeId,
            title: `Task ${newNodeId}`,
            content: '',
            status: 'pending'
          }];
          flow.nodes = nodes;
        }
        newState = [...state];
      }
        break;
      case 'UPDATE_NODE_STATUS': 
        newState = [
          ...updateNodeStatus(state, action.flowId, action.payload)
        ];
        break;
      case 'DELETE_NODE':
        newState = [
          ...deleteNode(state, action.flowId),
        ];
        break;
      case 'SUFFLE_NODES':
        newState = [
          ...suffleNodes(state, action.flowId),
        ];
        break;
      case 'UPDATE_FLOW_TITLE':
        newState = [
          ...updateFlowTitlwState(state, action.flowId, action.payload),
        ];
        break;
      case 'UPDATE_NODE_TITLE':
        newState = [
          ...updateNodeTitleState(state, action.flowId, action.nodeId, action.payload),
        ];
        break;
      case 'UPDATE_NODE_CONTENT':
        newState = [
          ...updateNodeContentState(state, action.flowId, action.nodeId, action.payload),
        ];
        break;
      default:
        return state;
    }

    syncFlowToDB(newState);
    return newState;
}

const updateNodeStatus =  (state, flowId, nodeId) => {
  let flow = state.find(f => f.id === flowId);
  if (flow) {
    let tempNodes = [...flow.nodes];
    let node = tempNodes.find((n) => n.id === nodeId);
    if (node) {
      switch (node.status) {
        case 'pending':
          node.status = 'progress';
          break;
        case 'progress':
          node.status = 'completed';
          break;
        case 'completed':
          node.status = 'pending';
          break;
        default:
          break;
      }
      flow.nodes = [...tempNodes];
      return [
        ...state,
      ]
    }
  }
  return state;
}

const deleteNode = (state, flowId) => {
  let flow = state.find(f => f.id === flowId);
  if (flow && flow.nodes.length > 1) {
    let nodes = [...flow.nodes];
    nodes.pop();
    flow.nodes = nodes;
    return [
      ...state
    ];
  } return state;
}

const suffleNodes = (state, flowId) => {
  let flow = state.find(f => f.id === flowId);
  if (flow) {
    let nodes = [...flow.nodes];
    flow.nodes = [...shuffle(nodes)];
    return state;
  }
  return state;
}

const updateNodeTitleState = (state, flowId, nodeId, title) => {
  let flow = state.find(f => f.id === flowId);
  if (flow) {
    let nodes = [...flow.nodes];
    let node = nodes.find(n => n.id === nodeId);
    if (node) {
      node.title = title;
      flow.nodes = [...nodes];
      return [
        ...state
      ];
    }
  } return state;
}

const updateFlowTitlwState = (state, flowId, title) => {
  let flow = state.find(f => f.id === flowId);
  if (flow) {
    flow.title = title;
  } return state;
}

const updateNodeContentState = (state, flowId, nodeId, content) => {
  let flow = state.find(f => f.id === flowId);
  if (flow) {
    let nodes = [...flow.nodes];
    let node = nodes.find(n => n.id === nodeId);
    if (node) {
      node.content = content;
      flow.nodes = [...nodes];
      return [
        ...state
      ];
    }
  } return state;
}

export default reducer;