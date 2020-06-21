import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Node from '../../components/node/node';
import { addNode, updateNodeStatus, deleteNode } from '../../redux/flow-reducer/actions';

const Flows = ({ match, nodes, addNode, updateNodeStatus, deleteNode }) => {
  const addNewNode = useCallback((flowId, nodeLength) => {
    const newId = nodeLength + 1
    addNode(flowId, {
      id: nodes.length + 1,
      title: `Task ${newId}`,
      content: '',
      status: 'pending'
    });
    console.log('fired');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
      {nodes.map((item, index) => (
          <Node
            key={index}
            {...item}
            onStatusUpdate={(id) => updateNodeStatus(id, match?.params.id)}
          />
      ))}
      <button className="btn">Suffle</button>
      <button className="btn" onClick={() => addNewNode(match?.params.id, nodes.length)}>Add</button>
      <button className="btn" onClick={() => deleteNode(match?.params.id)}>Delete</button>
      <button className="btn">Save</button>
  </div>
};

const mapStateToProps = (state, ownProps) => ({
  nodes: state.flows.find(f => f.id === ownProps?.match?.params?.id)?.nodes,
});

export default connect(mapStateToProps, {
    addNode,
    updateNodeStatus,
    deleteNode
})(Flows);