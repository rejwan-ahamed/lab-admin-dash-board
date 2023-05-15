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
import Trams from "./Pages/Trams";

function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <StudentLogin></StudentLogin>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/dashboard",
      element: <Home></Home>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/login",
      element: <Login></Login>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/leader",
      element: <LeaderDashBoard></LeaderDashBoard>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/register",
      element: <Register></Register>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/student_login",
      element: <StudentLogin></StudentLogin>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/add_question",
      element: <AddQuestion></AddQuestion>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/student",
      element: <StudentDashboard></StudentDashboard>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/ans/:id",
      element: <AnswerQuestion></AnswerQuestion>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/more",
      element: <More></More>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/view/:id",
      element: <ViewAns></ViewAns>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/LDBoard",
      element: <LDashboard></LDashboard>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/leaderAns/:id",
      element: <LeaderAddAns></LeaderAddAns>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/Lans/:id",
      element: <LeaderViewAns></LeaderViewAns>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/update/:id",
      element: <UpdateQuestion></UpdateQuestion>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/forgetRoll",
      element: <ForgetPasswordRoll></ForgetPasswordRoll>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/forgetEmail",
      element: <EmailSend></EmailSend>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/reset",
      element: <ChangePassword></ChangePassword>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/AdminAllANS/:id",
      element: <AdminViewAnsList></AdminViewAnsList>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/adminViewANS/:id",
      element: <AdminViewAns></AdminViewAns>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/leaderViewAns/:id",
      element: <LeaderViweQuestionAns></LeaderViweQuestionAns>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/allANS/:id",
      element: <AllAnsList></AllAnsList>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/updateANS/:id",
      element: <UpdateAns></UpdateAns>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/LeaderUpdateANS/:id",
      element: <LeaderUpdateAns></LeaderUpdateAns>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/404",
      element: <NotValid></NotValid>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "/trams",
      element: <Trams></Trams>,
      errorElement: <NotValid></NotValid>,
    },
    {
      path: "*",
      element: <NotValid></NotValid>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
