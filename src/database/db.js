import shortid from 'shortid';

const retriveFlowsFromLocalstorage = () => {
    const existing = localStorage.getItem('flow');
    return existing ? JSON.parse(existing) : [];
}

export const syncFlowToDB = (data) => {
  localStorage.setItem('flow', JSON.stringify(data));
}

export const getInitialFlow = () => {
  const existing = localStorage.getItem('flow');
  if (!existing) {
    const initialData = [{ id: shortid.generate(), title: 'Workflow 1', status: false, nodes: [
        {id: 1, title: 'Task 1', content: 'A sample task description. You can modify it by typing here', status: 'pending' }
    ] }];
      localStorage.setItem('flow', JSON.stringify(initialData));
  }
  return JSON.parse(localStorage.getItem('flow'));
}

export const addFlow = (flow) => {
    let existing = retriveFlowsFromLocalstorage();
    existing.push(flow);
    syncFlowToDB(existing);
    return flow;
}

export const deleteFlow = (id) => {
    let existing = retriveFlowsFromLocalstorage();
    syncFlowToDB(existing.filter(f => f.id !== id));
    return id;
}

export const updateFlowStatus = (id) => {
    let existing = retriveFlowsFromLocalstorage();
    let culprit = existing.find(f => f.id === id);
    culprit.status = !!culprit.status;
    syncFlowToDB(existing);
    return culprit;
}