import React from 'react';
import PropTypes from 'prop-types';
import './flow.css';

const Flow = ({ id, title, status, onDelete, onStatusUpdate, onGo }) => {
    const flowStatus = status ? 'completed': 'progress';
    return <div className="flow" onClick={() => onGo(id)}>
        <div className="title">{title}</div>
        <div className="flow-content">
            <div className="status">{flowStatus}</div>
            <div className={`round ${flowStatus} float-right`} onClick={(e) => {
                e.stopPropagation();
                onStatusUpdate && onStatusUpdate(id);
                }}
            />
        </div>
        <div className="round delete-icon" onClick={(e) => {
             e.stopPropagation();
             onDelete && onDelete(id);
        }} />
    </div>;
}

Flow.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onDelete: PropTypes.func,
    onStatusUpdate: PropTypes.func,
    onGo: PropTypes.func,
};

export default Flow;