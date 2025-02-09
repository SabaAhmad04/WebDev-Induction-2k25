// import './App.css';
import { useState } from "react";
import Achievements from "./components/Achievements";
import Awards from "./components/Awards";
import BlogPost from "./components/BlogPost";
import Collaborations from "./components/Collaborations";
import Confrence from "./components/Confrence";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import ResearchPaper from "./components/ResearchPaper";
import TeachingExprience from "./components/TeachingExprience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Project from "./pages/Project";
import {Routes,Route} from "react-router-dom";


function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className="App">
             <NavBar></NavBar>
             
             <Routes>
                       <Route path="/" element={<Home></Home>}></Route>
                       <Route path="/about" element={<About></About>}></Route>
                       <Route path="/contact" element={<Contact></Contact>}></Route>
                       <Route path="/project" element={<Project></Project>}></Route>
                       <Route path="/researchpaper" element={<ResearchPaper></ResearchPaper>}></Route>
                       <Route path="/confrence" element={<Confrence></Confrence>}></Route>
                       <Route path="/achievements" element={<Achievements></Achievements>}></Route>
                       <Route path="/blogpost" element={<BlogPost></BlogPost>}></Route>
                       <Route path="/teachingexprience" element={<TeachingExprience></TeachingExprience>}></Route>
                       <Route path="/awards" element={<Awards></Awards>}></Route>
                       <Route path="/collaborations" element={<Collaborations></Collaborations>}></Route>
                       <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></LoginPage>}></Route>
                       <Route path="/dashboard" element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                                          <Dashboard></Dashboard>
                        </PrivateRoute>
                       }></Route>
             </Routes>
    </div>
  );
}

export default App;
