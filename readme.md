# State Store

Our app can handle adding/removing todo/goal items as well as toggling an item (as complete or incomplete)!

## How ut works

Whenever dispatch is called, we invoke our app function. The app function will then invoke the todos reducer as well as the goals reducer. Those will return their specific portions of the state. And then, the app function will return a state object with a todos property (the value of which is what the todos reducer returned) and a goals property (the value of which is what the goals reducer returned).

We use JavaScript constants instead of strings to call our actions.
Our `.dispatch()` calls special functions called action creators, instead of passing in unique objects directly to them.

We extract the information from the input fields, reset the input field, and then dispatch an addTodoAction/addGoalAction Action Creator with the text that the user typed into the input/goals field.

## DOM-manipulation

- accessing elements with `document.getElementById()`
- adding listeners with `.addEventListener()`
- accessing the `.value property on an element`
- creating a new element with `.createElement()`
- adding new content with `.appendChild()`
