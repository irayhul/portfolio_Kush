import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import About from "./component/About/About.jsx";
import Projects from "./component/Projects/Projects.jsx";
import Weights from "./component/Weights/Weights.jsx";
import Contact from "./component/Contact/Contact";
import Login from "./component/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./component/Admin/AdminPanel";
import Gallery from "./component/Admin/Gallerys.jsx"
import Timeline from "./component/Admin/Timeline";
import Youtube from "./component/Admin/Youtube";
import Project from "./component/Admin/Project";
import Weight from "./component/Admin/Weight";
import Loader from "./component/Loader/Loader";
import Newslatter from "./component/Newsletter/Newsletter.jsx"
import NotFound from "./component/Not Found/NotFound.jsx"
function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  youtubes={user.youtube}
                  gallerys={user.gallery}
                  timelines={user.timeline}
                  skills={user.skills}
                />
              }
            />
            <Route path="/about" element={<About about={user.about} />} />
            <Route path="/weights" element={<Weights weights={user.weight}/>} />
            <Route path="/projects" element={<Projects projects={user.projects} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
            <Route path="/admin/timeline" element={isAuthenticated ? <Timeline /> : <Login />} />
            <Route path="/admin/weight" element={isAuthenticated ? <Weight /> : <Login />} />
            <Route path="/admin/youtube" element={isAuthenticated ? <Youtube /> : <Login />} />
            <Route path="/admin/project" element={isAuthenticated ? <Project /> : <Login />} />
           <Route path="/admin/weight" element={isAuthenticated ? <Weight /> : <Login />} />
           <Route path="/admin/gallerys" element={isAuthenticated ? <Gallery /> : <Login />} />
           <Route path="*" element={<NotFound/>} />
    </Routes>





<Newslatter/>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;


