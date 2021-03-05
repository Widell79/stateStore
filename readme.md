# State Store

Our app can handle adding/removing todo/goal items as well as toggling an item (as complete or incomplete)!

## How ut works

Whenever dispatch is called, we invoke our app function. The app function will then invoke the todos reducer as well as the goals reducer. Those will return their specific portions of the state. And then, the app function will return a state object with a todos property (the value of which is what the todos reducer returned) and a goals property (the value of which is what the goals reducer returned).
