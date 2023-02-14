import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  const routs = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/login", element: <Login></Login> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
