const myStore = Redux.createStore(reducer);

myStore.subscribe(() => ReactDOM.render(<App {...myStore.getState()}/>, document.getElementById('root')));

myStore.dispatch({ type: null });