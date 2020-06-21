import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Node from '../../components/node/node';
import { addNode, updateNodeStatus, deleteNode, suffleNodes } from '../../redux/flow-reducer/actions';

const Flows = ({ match, history, flowTitle, nodes, addNode, updateNodeStatus, deleteNode, suffleNodes }) => {
  const addNewNode = useCallback((flowId) => {
    addNode(flowId);
    console.log('fired');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
      <input type="text" defaultValue={flowTitle} />

      {nodes.map((item, index) => (
          <Node
            key={`${item.id}-${index}`}
            {...item}
            onStatusUpdate={(id) => updateNodeStatus(id, match?.params.id)}
          />
      ))}
      <button className="btn" onClick={() => suffleNodes(match?.params.id)}>Suffle</button>
      <button className="btn" onClick={() => addNewNode(match?.params.id)}>Add</button>
      <button className="btn" onClick={() => deleteNode(match?.params.id)}>Delete</button>
      <button className="btn" onClick={() => history.push('/home')}>Save</button>
  </div>
};

const mapStateToProps = (state, ownProps) => {
  const selectedFlow = state.flows.find(f => f.id === ownProps?.match?.params?.id);
  return {
    nodes: selectedFlow ? selectedFlow.nodes: [],
    flowTitle: selectedFlow?.title,
  };
};

export default connect(mapStateToProps, {
    addNode,
    updateNodeStatus,
    deleteNode,
    suffleNodes
})(Flows);