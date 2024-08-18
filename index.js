import { createStore } from "https://cdn.skypack.dev/redux";

const initialState = 0;

/// create reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
}

/// create store
const store = createStore(reducer);
console.log(store);

// create action

function actionDeposit(payload) {
  return {
    type: "DEPOSIT",
    payload,
  };
}

function actionWithdraw(payload) {
  return {
    type: "WITHDRAW",
    payload,
  };
}

/// Dom event
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");

deposit.addEventListener("click", () => {
  store.dispatch(actionDeposit(10));
});

withdraw.addEventListener("click", () => {
  store.dispatch(actionWithdraw(10));
});

store.subscribe(() => {
  render();
});

function render() {
  const output = document.querySelector("#output");
  output.innerHTML = "$" + store.getState();
}

render();
