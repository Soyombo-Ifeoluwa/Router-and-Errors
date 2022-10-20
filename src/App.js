import React from "react";
import "./styles.css";
import { useEffect } from "react";
import {
  Route,
  useLocation,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import {ErrorBoundary} from 'react-error-boundary';

// function ErrorFallback({ error }) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre style={{ color: "red" }}>{error.message}</pre>
//     </div>
//   );
// }

function Error({ subject }) {
  return (
    <section>
      <Navigation />
      <div>Hello {subject.toUpperCase()}</div>
    </section>
  );
}

function Navigation() {
  return (
    <section className="nav ">
      <NavLink className="navlink" to="/">
        HOME
      </NavLink>

      <NavLink className="navlink" to="/about/*">
        ABOUT
      </NavLink>

      <NavLink className="navlink" to="/contact">
        CONTACT
      </NavLink>

      <NavLink className="navlink" to="*">
        History
      </NavLink>

      <NavLink style={{ color: "red" }} className="navlink" to="/ERROR">
        ERROR
      </NavLink>
    </section>
  );
}
const Home = () => {
  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({
      id: "H4O2M3E"
    });
    console.log(searchParams.get("id"));
  }, [searchParams, setSearchParams]);
  return (
    <section className="container">
      <Navigation />
      <h1>Home</h1>
      <p>This is a React Router Setup with Nested Routes,404 Page.</p>
    </section>
  );
};

function About() {
  // using useLocation
  const location = useLocation();
  console.log(location);
  return (
    <section className="container">
      <Navigation />
      <h1>About</h1>
      <p>This is the About Page.</p>
      <p>This website was built on ...............</p>
    </section>
  );
}

function Contact() {
  return (
    <section className=" container">
      <Navigation />
      <h1 className="error">Our Contact Page</h1>
      {/* <div>Hello {subject.toUpperCase()}</div> */}
    </section>
  );
}

const handleNavigate = (event) => {
  event.preventDefault();
  navigate("/");
};

function PageNotFound() {
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const location = useLocation();
  console.log(location);
  return (
    <>
      <section className="section">
        <Navigation />
        <h1 style={{ color: "red" }} className="error">
          404 Error
        </h1>
        <h1>Page Not Found</h1>
      </section>
      <div>
        <button className="nav-btn" onClick={handleNavigate}>
          Go Back To HOME Page
        </button>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/ERROR" element={<Error />} />
      </Routes>
    </div>
  );
}
