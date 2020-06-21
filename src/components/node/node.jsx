import React from 'react';
import PropTypes from 'prop-types';
import './node.css';
import { useDebouncedCallback } from 'use-debounce';

const Node = ({ id, title, content, status, onStatusUpdate, onTitleChange, onContentChange }) => {

  const [debounceTitleChange] = useDebouncedCallback((val) => {
    onTitleChange(val);
  }, 500);

  const [debounceContentChange] = useDebouncedCallback((val) => {
    onContentChange(val);
  }, 500);

  return <div className="card bg-light mb-3 node">
          <div className="card-header">
            <input type="text" defaultValue={title} onChange={(e) => debounceTitleChange(e.target.value)} />
          </div>
          <div className="card-body">
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <textarea
              defaultValue={content}
              placeholder="Task content goes here ..."
              autoFocus={true}
              onChange={(e) => debounceContentChange(e.target.value)}
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
  onStatusUpdate: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
}

export default Node;