import { getInitialFlow } from '../../database/db';
import shuffle from 'lodash/shuffle';
import { syncFlowToDB } from '../../database/db';

const initialState = getInitialFlow();

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FLOW': {
        const newState = [
            ...state,
            action.payload
          ];
        syncFlowToDB(newState);
        return newState;
      }
      case 'DELETE_FLOW': {
        const newState = [
          ...state.filter(f => f.id !== action.payload)
        ];
        syncFlowToDB(newState);
        return newState;
      }
      case 'TOGGLE_STATUS':
        let flow = state.find((f) => f.id === action.payload);
        if (flow) {
          flow.status = !flow.status;
        }
        syncFlowToDB([...state]);
        return [
          ...state
        ];
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
          return [...state];
        }
        return state;
      }
      case 'UPDATE_NODE_STATUS': 
        return [
          ...updateNodeStatus(state, action.flowId, action.payload)
        ];
      case 'DELETE_NODE':
        return [
          ...deleteNode(state, action.flowId),
        ];
      case 'SUFFLE_NODES':
        return [
          ...suffleNodes(state, action.flowId),
        ]
      default:
        return state;
    }
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

export default reducer;