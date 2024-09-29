import './App.css'
import {RouterProvider} from "react-router-dom";
import root from "./router/root.tsx";

function App() {

  return (
      <RouterProvider router={root} />
  )
}

export default App
