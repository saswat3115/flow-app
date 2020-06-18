import React from 'react';
import Flow from '../../components/flow/flow';

const flows = [
    { id: 1, title: 'Flow 1', status: 'completed'},
    { id: 2, title: 'Flow 2', status: 'pending'},
];

const Home = () => {
    return <div className="home">
        <div className="row search-section">
            <div className="col">
                <input type="text" placeholder="Search Workflow" className="input-search" />
                <span className="btn-filter">
                    Filter
                </span>
            </div>
            <div className="col">
                <button>Create Workflow</button>
            </div>
        </div>
        <div className="flows-container">
            {flows.map((item, index) => (
                <Flow {...item} />
            ))}
        </div>
    </div>;
}

export default Home;