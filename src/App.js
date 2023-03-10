import { Toaster } from "react-hot-toast";
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
import NotValid from "./Pages/NotValid";
import ViewAns from "./Pages/ViewAns";
import LDashboard from "./Pages/LeaderPages/LDashboard";
import LeaderAddAns from "./Pages/LeaderPages/LeaderAddAns";
import LeaderViewAns from "./Pages/LeaderPages/LeaderViewAns";
import UpdateQuestion from "./Pages/UpdateQuestion";
import ForgetPasswordRoll from "./Pages/ForgetPasswordRoll";
import EmailSend from "./Pages/EmailSend";
import ChangePassword from "./Pages/ChangePassword";
import AllAnsList from "./Pages/AllAnsList";
import LeaderViweQuestionAns from "./Pages/LeaderViweQuestionAns";
import UpdateAns from "./Pages/UpdateAns";
import LeaderUpdateAns from "./Pages/LeaderUpdateAns";
import AdminViewAnsList from "./Pages/AdminViewAnsList";
import AdminViewAns from "./Pages/AdminViewAns";

function App() {
  const routs = createBrowserRouter([
    { path: "/", element: <StudentLogin></StudentLogin>},
    { path: "/dashboard", element: <Home></Home> },
    { path: "/login", element: <Login></Login> },
    { path: "/leader", element: <LeaderDashBoard></LeaderDashBoard> },
    { path: "/register", element: <Register></Register> },
    { path: "/student_login", element: <StudentLogin></StudentLogin> },
    { path: "/add_question", element: <AddQuestion></AddQuestion> },
    { path: "/student", element: <StudentDashboard></StudentDashboard> },
    { path: "/ans/:id", element: <AnswerQuestion></AnswerQuestion> },
    { path: "/more", element: <More></More> },
    { path: "/view/:id", element: <ViewAns></ViewAns> },
    { path: "/LDBoard", element: <LDashboard></LDashboard> },
    { path: "/leaderAns/:id", element: <LeaderAddAns></LeaderAddAns> },
    { path: "/Lans/:id", element: <LeaderViewAns></LeaderViewAns> },
    { path: "/update/:id", element: <UpdateQuestion></UpdateQuestion> },
    { path: "/forgetRoll", element: <ForgetPasswordRoll></ForgetPasswordRoll> },
    { path: "/forgetEmail", element: <EmailSend></EmailSend> },
    { path: "/reset", element: <ChangePassword></ChangePassword> },
    { path: "/AdminAllANS/:id", element: <AdminViewAnsList></AdminViewAnsList> },
    { path: "/adminViewANS/:id", element: <AdminViewAns></AdminViewAns> },
    { path: "/leaderViewAns/:id", element: <LeaderViweQuestionAns></LeaderViweQuestionAns> },
    { path: "/allANS/:id", element: <AllAnsList></AllAnsList> },
    { path: "/updateANS/:id", element: <UpdateAns></UpdateAns> },
    { path: "/LeaderUpdateANS/:id", element: <LeaderUpdateAns></LeaderUpdateAns> },
    { path: "/404", element: <NotValid></NotValid> },
    {
      path:'*', element:<NotValid></NotValid>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
