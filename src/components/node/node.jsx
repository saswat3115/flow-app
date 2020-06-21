import React from 'react';
import PropTypes from 'prop-types';
import './node.css';

const Node = ({ id, title, content, status, onStatusUpdate }) => {
  return <div className="card bg-light mb-3">
          <div className="card-header">
            <input type="text" defaultValue={title} />
          </div>
          <div className="card-body">
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <textarea
              defaultValue={content}
              placeholder="Task content goes here ..."
            >
             </textarea>
          </div>
          
          <span className={`round ${status} status`} onClick={() => onStatusUpdate(id)}></span>
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