# Redux (Vanilla)

- Application state (data) stored in a single place called Store.

>Store = DB for frontend.

- Parts of Redux
    1. Store - which stores all data
    2. Reducer - function which will add, update and delete data
    3. Actions - which will define which task we want to perform

> Reducer: *HOW* to do, Action: *WHAT* to do

- We can only change store data using the Reducer function.

```txt
ToDo Application

store: tasks

action - ADD_TASK

reducer - perform how to add task in the store
```

- Steps to implement Redux:
    1. Designing the store - How stored object looks like
    2. List actions - that can perform in the application.
    3. Create Reducer - function to define How to perform that action
    4. Create redux store

- Once store design and actions are done, Reducer function is created. A reducer is a pure function that takes two arguments. The first one is the **initial or current state** and the second one is the **action object**. For creating a redux store, we have a function in the Redux library called createStore and we have to just pass our reducer as a parameter.

- Dispatch action from store:
For dispatching any action, we have to use `store.dispatch` method and then we pass our action as `action: { type: "actionName", payload: { data: "forAction - if any"}`

- Subscribe and unsubscribe:
`store.subscribe` method is also used to get notified when store is updated. To stop such behaviour, we can use `unsubscribe()`. Read the docs or refer to initial commit for more.

## Redux Site: <https://redux.js.org/>
