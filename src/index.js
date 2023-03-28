import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App";
import store from "./17_redux/03_redux_toolkit/store/store";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
