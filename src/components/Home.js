import React, { useContext, useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import BlackLogo from "../BlackLogo.png";
import { Stack, Container, Navbar, Nav } from "react-bootstrap";
import UserContext from "../contexts/UserContext";

function Home() {

  const [expanded, setExpanded] = useState(false);
  const [user, setUser] = useState({
    username: "",
    userEmail: "",
    userCity: "",
    userState: "",
    userReferral: "",
    userImage: "",
    userId: "",
    Fairs: []
  })

  const { getCurrentUser } = useContext(UserContext);

  const navigate = useNavigate()
  const params = useParams();

  const auth = localStorage.getItem('myFairToken')

  useEffect(() => {
    async function fetch() {
      await getCurrentUser()
        .then((user) => setUser(user))
    }
    fetch()
  }, [params.userId]);

  const logout = () => {
    localStorage.removeItem('myFairToken');
    navigate('/signin')
  };

  const authLink = () => {

    if (!auth) {
      return (
        <Nav>
          <Link
            to="/signup"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Sign In
          </Link>
          <Link
            to="/fairlist"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Fair List
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            About Us
          </Link>
        </Nav>
      )

    } else {

      return (
        <>
          <Navbar.Text>
            Hello,
          </Navbar.Text>
          <Link
            to="/profile"
            className="nav-link"
            onClick={() => setExpanded(false)}>
            {user.username}
          </Link>
          <Nav>
            <Link
              to="/signin"
              className="nav-link"
              onClick={logout}
            >
              Sign Out
            </Link>
            <Link
              to="/addfair"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Add Fair
            </Link>
            <Link
              to="/fairlist"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Fair List
            </Link>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Link>
          </Nav>
        </>
      )
    }
  }

  return (
    <>
      <Navbar collapseOnSelect expanded={expanded} expand="lg" bg="warning">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="navbarBrand"
              src={BlackLogo}
              height={65}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {authLink()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </>
  );
}


export default Home;