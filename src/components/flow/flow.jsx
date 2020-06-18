import React from 'react';
import PropTypes from 'prop-types';

const Flow = ({ id, title, status, onDelete, onStatusUpdate }) => {
    return <div className="flow">
        <div>{title}</div>
        <div>
            {status}
            <span className="round" onClick={() => onStatusUpdate && onStatusUpdate(id)}></span>
        </div>
        <span className="round delete-icon" onClick={() => onDelete && onDelete(id)}></span>
    </div>;
}

Flow.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onStatusUpdate: PropTypes.func,
};

export default Flow;