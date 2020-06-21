import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Node from '../../components/node/node';
import {
  addNode,
  updateNodeStatus,
  deleteNode,
  suffleNodes,
  updateFlowTitle,
  updateNodeTitle,
  updateNodeContent,
 } from '../../redux/flow-reducer/actions';
import './flows.css';
import { useDebouncedCallback } from 'use-debounce';

const Flows = ({ match, history, flowTitle, nodes, addNode,
  updateNodeStatus, deleteNode, suffleNodes, updateFlowTitle, updateNodeTitle, updateNodeContent }) => {
  const [debounceTitleChange] = useDebouncedCallback((val) => {
    updateFlowTitle(match?.params.id, val);
  }, 500);

  const addNewNode = useCallback((flowId) => {
    addNode(flowId);
    console.log('fired');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
      <div className="row no-gutters flow-title">
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control"
            defaultValue={flowTitle}
            onChange={(e) => debounceTitleChange(e.target.value)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="button-container">
            <button className="btn btn-secondary" onClick={() => suffleNodes(match?.params.id)}>Suffle</button>
            <button className="btn btn-success" onClick={() => addNewNode(match?.params.id)}>Add</button>
            <button className="btn btn-danger" onClick={() => {
              const confirmed = window.confirm('Delete operation will delete the last node. Are you sure ?');
              if (confirmed) {
                deleteNode(match?.params.id);
              }
            }}>Delete</button>
            <button className="btn btn-primary" onClick={() => history.push('/home')}>Save</button>
          </div>
        </div>
      </div>
      <div>
        <p className="task-hint"><b>NOTE: </b>Click in title/content of task card to edit. Content/Titles are auto save on edit</p>
      </div>
      <div className="node-container">
        {nodes.map((item, index) => (
            <Node
              key={`${item.id}-${index}`}
              {...item}
              onStatusUpdate={(id) => updateNodeStatus(id, match?.params.id)}
              onTitleChange={(text) => updateNodeTitle(match?.params.id, item.id, text)}
              onContentChange={(text) => updateNodeContent(match?.params.id, item.id, text)}
            />
        ))}
      </div>
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
    suffleNodes,
    updateFlowTitle,
    updateNodeTitle,
    updateNodeContent
})(Flows);