import React from 'react';
import PropTypes from 'prop-types';
import './node.css';

const Node = ({ id, title, content, status, onStatusUpdate }) => {
  return <div className="node">
          <input type="text" defaultValue={title} />
          <textarea defaultValue={content}>
          </textarea>
          <span onClick={() => onStatusUpdate(id)}>{status}</span>
  </div>;
}

Node.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  status: PropTypes.string.isRequired,
  onStatusUpdate: PropTypes.func,
}

export default Node;