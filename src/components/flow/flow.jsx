import React from 'react';
import PropTypes from 'prop-types';
import './flow.css';

const Flow = ({ id, title, status, onDelete, onStatusUpdate }) => {
    return <div className="flow">
        <div>{title}</div>
        <div>
            {status ? 'completed': 'pending'}
            <span className="round" onClick={() => onStatusUpdate && onStatusUpdate(id)}>*</span>
        </div>
        <span className="round delete-icon" onClick={() => onDelete && onDelete(id)}>x</span>
    </div>;
}

Flow.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onDelete: PropTypes.func,
    onStatusUpdate: PropTypes.func,
};

export default Flow;