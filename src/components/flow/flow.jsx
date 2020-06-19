import React from 'react';
import PropTypes from 'prop-types';
import './flow.css';

const Flow = ({ id, title, status, onDelete, onStatusUpdate, onGo }) => {
    return <div className="flow" onClick={() => onGo(id)}>
        <div>{title}</div>
        <div>
            {status ? 'completed': 'pending'}
            <span className="round" onClick={(e) => {
                e.stopPropagation();
                onStatusUpdate && onStatusUpdate(id);
            }}>*</span>
        </div>
        <span className="round delete-icon" onClick={(e) => {
             e.stopPropagation();
             onDelete && onDelete(id);
        }}>x</span>
    </div>;
}

Flow.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onDelete: PropTypes.func,
    onStatusUpdate: PropTypes.func,
    onGo: PropTypes.func,
};

export default Flow;