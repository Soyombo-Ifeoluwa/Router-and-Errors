import { useState } from "react";
import { NavLink } from "react-router-dom";
import Fetch from "./useFetch.js";

function Users() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = Fetch(
    `https://randomuser.me/api/1.4/?page=${page}results=50&?seed=abc`
  );

  console.log({ loading, error, data });

  const PER_PAGE = 5;
  const total = data?.results?.length;
  const pages = 20;
  const skip = page * PER_PAGE - PER_PAGE;
  console.log(skip, total);

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <section>
      <div className="page">
        <h1 className="title">List of Users</h1>

        {data?.results.map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(" ", "")}>{`${
              index + 1
            }.${name}`}</li>
          );
        })}
        <p className="pagination">
          Pages: {page} of {pages}
        </p>
        {
          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            next
          </button>
        }
        {/* another magic here */}
        {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        ))}
        {
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </button>
        }
      </div>
      <div className="Home-btn">
        <NavLink to="/" className="navlink1">
          Home
        </NavLink>
      </div>
    </section>
  );
}

export default Users;
