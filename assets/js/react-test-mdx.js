import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import MyComponent from "../../../samples/react-my-component.mdx";
const App = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Hello, MDX!"), /* @__PURE__ */ React.createElement(MyComponent, null), "# My MDX Component");
};
const container = document.getElementById("root-mdx");
const root = createRoot(container);
root.render(/* @__PURE__ */ React.createElement(App, null));
