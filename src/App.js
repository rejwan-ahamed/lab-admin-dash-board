import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddQuestion from "./Pages/AddQuestion";
import AnswerQuestion from "./Pages/AnswerQuestion";
import Home from "./Pages/Home";
import LeaderDashBoard from "./Pages/LeaderDashBoard";
import Login from "./Pages/Login";
import More from "./Pages/More";
import Register from "./Pages/Register";
import StudentDashboard from "./Pages/StudentDashboard";
import StudentLogin from "./Pages/StudentLogin";

function App() {
  const routs = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/login", element: <Login></Login> },
    { path: "/leader", element: <LeaderDashBoard></LeaderDashBoard> },
    { path: "/register", element: <Register></Register> },
    { path: "/student_login", element: <StudentLogin></StudentLogin> },
    { path: "/add_question", element: <AddQuestion></AddQuestion> },
    { path: "/student", element: <StudentDashboard></StudentDashboard> },
    { path: "/ans", element: <AnswerQuestion></AnswerQuestion> },
    { path: "/more", element: <More></More> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
