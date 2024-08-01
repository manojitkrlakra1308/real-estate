import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
