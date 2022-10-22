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
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import Users from "./Pagination/Pagination";

const OurFallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary
}) => {
  return (
    <div>
      <h1 className="Error">An error occurred: {error.message}</h1>
      <button className="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};

function Navigation() {
  return (
    <section className="nav ">
      <NavLink className="navlink" to="/">
        HOME
      </NavLink>

      <NavLink className="navlink" to="/about">
        BOOKS
      </NavLink>

      <NavLink className="navlink" to="/contact">
        CONTACT
      </NavLink>

      <NavLink className="navlink" to="/users">
        USERS
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
      <p>This is a website for Book Readers.</p>
      <p> It provides you with list of recommended books to read.</p>
      <p>You can always search the books online to read them.</p>
      <p>Proceed to the BOOKS page to check for The Lists.</p>
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
      <h1>Books List</h1>
      <p>There are a lot of books to recommend but here are some:</p>
      <div className="Lists">
        <ul>
          <li>It Ends With Us by Collen Hoover.</li>
          <li>I'm Not Your Perfect Mexican Daughter by Erica.L</li>
          <li>Every Last Word.</li>
          <li>November 9.</li>
          <li>The 5-second Rule.</li>
          <li>Punk 57.</li>
          <li>The Hating Game.</li>
          <li>The Midnight Library.</li>
          <li>Ugly Love.</li>
          <li>The Love Hypothesis.</li>
          <li>The Subtle Art..</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className=" container">
      <Navigation />
      <h1 className="error">Our Contact Page</h1>
      <p>Phone Number : 08123456789</p>
      <p>Email Address: Reactrouterandarrors@gmail.com</p>
      <p>Our Twitter Handle : @Booksrecommendation</p>
      <p>Our Instagram Handle : @Booksrecommendation</p>
      <p>Our Facebook Handle : @Booksrecommendation</p>
    </section>
  );
}

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
    <ErrorBoundary FallbackComponent={OurFallbackComponent}>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
