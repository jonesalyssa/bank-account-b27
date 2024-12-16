import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";

import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";

// // TODO: Import the Redux store and provide it to this component using <Provider>.

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

function App() {
  return (
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
  );
}

export default function RootApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
