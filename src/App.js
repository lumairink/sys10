import React, { useState } from "react";

import "./App.css";
import Toolbar from "./components/Topbar";
import Categories from "./components/Categories";
import categories from "./mock/categories";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart";

function App() {
  const [filter, setFilter] = useState('');
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Toolbar onSearch={setFilter} />
        </header>
        <div className="container">
          <div className="grid">
            <main>
              <Categories filter={filter} />
            </main>
            <aside>
              <Cart />
            </aside>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
