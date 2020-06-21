import React, { useCallback, useState } from 'react';
import Flow from '../../components/flow/flow';
import { connect } from 'react-redux';
import { addFlow, deleteFlow, toggleStatus, validateNodesCompletion } from '../../redux/flow-reducer/actions';
import shortid from 'shortid';
import './home.css';

const switchArray = (arr1, arr2, isFilter) => {
  return isFilter ? arr1 : arr2;
}


const Home = ({ history, flows, addFlow, deleteFlow, toggleStatus }) => {

    const [searchText, setSearchText] = useState('');
    const [filterList, setFilterList] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

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
          setIsFiltered(true);
        } else {
          setFilterList([]);
          setIsFiltered(false);
        }
    }

    const onSearchByStatus = (text) => {
      if (text) {
        const status = text === 'Completed'; 
        setFilterList(flows.filter(f => f.status === status));
        setIsFiltered(true);
      } else {
        setIsFiltered(false);
        setFilterList([]);
      }
      
    }

    return <div className="home">
        <div className="row no-gutters search-section">
            <div className="col-md-6 col-sm-12">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search workflow and press enter"
                    value={searchText}
                    onChange={(e) => {
                      const txt = e.target.value;
                      setSearchText(txt);
                      if (!txt) { // check if text is clrear then trigger search clear
                        onSearch(null);
                      }
                    }}
                    onKeyDown={(e) => {
                        e.keyCode === 13 && onSearch(searchText);
                    }}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Search</span>
                  </div>
                </div>
                <span className="btn-filter">
                  filter by status: &nbsp;
                  <select onChange={(e) => onSearchByStatus(e.target.value)}>
                     <option value="">All</option>
                     <option value="Pending">Pending</option>
                     <option value="Completed">Completed</option>
                  </select>
                </span>
            </div>
            <div className="col-md-6 col-sm-12">
                <button className="btn btn-success btn-add" onClick={() => add()}>+ Create Workflow</button>
            </div>
        </div>
        <div className="flows-container">
            {switchArray(filterList, flows, isFiltered).map((item, index) => (
                <Flow
                  key={index}
                  {...item}
                  onDelete={deleteFlow}
                  onStatusUpdate={(id) => {
                    if (!item.status) {
                      if (validateNodesCompletion(item.nodes)) {
                        toggleStatus(id);
                      } else {
                        alert('Not all tasks are complete for this Flow');
                      }
                    } else {
                      toggleStatus(id);
                    }
                  }}
                  onGo={(id) => history.push(`/flow/${id}`)}/>
            ))}
            {isFiltered && filterList.length === 0
              && <div className="alert alert-warning" role="alert" style={{ marginLeft: '16px'}}>
                  No workflow found !
            </div>}
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