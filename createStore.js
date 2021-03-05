// Library Code
function createStore(reducer) {
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  //listener functions
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

// App Code

// A Reducer function. Must be a pure function.
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.todo]);
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}
// A Reducer function. Must be a pure function.
function goals(state = [], action) {
  switch (action.type) {
    case "ADD_GOAL":
      return state.concat([action.goal]);
    case "REMOVE_GOAL":
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

//The root reducer
function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

//Create a new store and pass in root our reducer
const store = createStore(app);

//Set up a listener
store.subscribe(() => {
  console.log("The new state is: ", store.getState());
});

//With the store.dispatch we add/remove/toggle todo or goal objects
store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "Walk the dog",
    complete: false,
  },
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "Wash the car",
    complete: false,
  },
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 2,
    name: "Go to the gym",
    complete: true,
  },
});

store.dispatch({
  type: "REMOVE_TODO",
  id: 1,
});

store.dispatch({
  type: "TOGGLE_TODO",
  id: 0,
});

store.dispatch({
  type: "ADD_GOAL",
  goal: {
    id: 0,
    name: "Learn Redux",
  },
});

store.dispatch({
  type: "ADD_GOAL",
  goal: {
    id: 1,
    name: "Lose 20 pounds",
  },
});

store.dispatch({
  type: "REMOVE_GOAL",
  id: 0,
});
