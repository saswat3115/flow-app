import shortid from 'shortid';

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