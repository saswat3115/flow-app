import React from 'react';

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
            {/* TODO: List of Flows */}
        </div>
    </div>;
}

export default Home;