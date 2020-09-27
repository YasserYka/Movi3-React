

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      
      return serializedState === null ? {} : JSON.parse(serializedState);
    } catch (err) { return {}; }
};

export const saveState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) { console.error(err); }
};