# Redux Toolkit

- Redux-toolkit is a very popular and powerful library for simplifying the redux code and it is officially recommended by Redux.
- Redux-toolkit has a lot of methods `configureStore`, `createAction`, `createReducer` and `createSlice`.
- `configureStore` method is used to create a redux store and it will automatically configure redux-devTools with it. So we don’t need to use `devtoolsEnhancer` function.
- We can use `createAction` method to create an action object with payload property and `createReducer` to create the reducer function without writing switch-case or if-else.
- Alternatively, we have used `createSlice` function, which is used to create actions and reducers in one function. This is very useful for making our code clean and maintainable.
- We can combine multiple reducers like an object.

```js
const store = configureStore({
    reducer: {
        tasks: taskReducer,
        samples: sampleReducer,
    },
});
```

## Redux Toolkit site: <https://redux-toolkit.js.org/>
