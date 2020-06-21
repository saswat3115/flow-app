import React, { useCallback, useState } from 'react';
import Flow from '../../components/flow/flow';
import { connect } from 'react-redux';
import { addFlow, deleteFlow, toggleStatus } from '../../redux/flow-reducer/actions';
import shortid from 'shortid';
import './home.css';

const switchArray = (arr1, arr2) => {
  if (arr1.length > 0) 
    return arr1;
  return arr2;
}


const Home = ({ history, flows, addFlow, deleteFlow, toggleStatus }) => {

    const [searchText, setSearchText] = useState('');
    const [filterList, setFilterList] = useState([]);

    const add = useCallback(() => {
      const newId = shortid.generate();
      addFlow({
          id: newId,
          title: `Untitled-${newId}`,
          status: false,
          nodes: [{
            id: 1,
            title: 'Task 1',
            content: '',
            status: 'pending'
          }]
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSearch = (text) => {
        if (text) {
          setFilterList(flows.filter(f => f.title.toLowerCase().indexOf(text.toLowerCase()) !== -1));
        } else {
          setFilterList([]);
        }
    }

    return <div className="home">
        <div className="row search-section">
            <div className="col-md-6 col-sm-12">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Workflow and press Enter"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        e.keyCode === 13 && onSearch(searchText);
                    }}
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">Search</span>
                  </div>
                </div>
                <span className="btn-filter">
                  filter by: &nbsp;
                  <select>
                     <option>All</option>
                     <option>Pending</option>
                     <option>Completed</option>
                  </select>
                </span>
            </div>
            <div className="col-md-6 col-sm-12">
                <button className="btn btn-success float-right" onClick={() => add()}>+ Create Workflow</button>
            </div>
        </div>
        <div className="flows-container">
            {switchArray(filterList, flows).map((item, index) => (
                <Flow
                  key={index}
                  {...item}
                  onDelete={deleteFlow}
                  onStatusUpdate={toggleStatus}
                  onGo={(id) => history.push(`/flow/${id}`)}/>
            ))}
        </div>  
    </div>;
}

const mapStateToProps = (state) => ({
  flows: state.flows
});

export default connect(mapStateToProps, {
    addFlow,
    deleteFlow,
    toggleStatus
})(Home);