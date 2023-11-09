import { createRoot } from "react-dom/client";

import "./style.css"
import "./game"
import { App } from "./App";

const root = createRoot(document.getElementById('app'));
root.render(App());
