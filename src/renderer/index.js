import React from "react";
import { createRoot } from "react-dom/client";
import App from "../../.webpack/renderer/app";  // ✅ Ensure this path is correct

const root = createRoot(document.getElementById("root"));
root.render(<App />);
