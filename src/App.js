import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LeaderDashBoard from "./Pages/LeaderDashBoard";
import Login from "./Pages/Login";

function App() {
  const routs = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/login", element: <Login></Login> },
    { path: "/leader", element: <LeaderDashBoard></LeaderDashBoard> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
