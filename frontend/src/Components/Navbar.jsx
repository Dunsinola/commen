// import React from "react";
// import {NavLink} from "react-router-dom"


// const Navbar = () => {
//   return (
//     <>
//       <div className="container-fluid nav_bg">
//         <div className="row">
//           <div className="col-10 mx-auto">
//             <nav className="navbar navbar-expand-lg navbar-light">
//               <div className="container-fluid">
//                 <NavLink  exact className="navbar-brand" to="/">
//                   Company Name
//                 </NavLink>
//                 <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div
//                   className="collapse navbar-collapse"
//                   id="navbarSupportedContent"
//                 >
//                   <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                       <NavLink activeClassName="menu_active"  exact
//                         className="nav-link active"
//                         aria-current="page"
//                         to="/"
//                       >
//                         Home
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink activeClassName="menu_active"  exact className="nav-link" to="/services">
//                         Services
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink activeClassName="menu_active"  exact className="nav-link" to="/about">
//                         About
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink activeClassName="menu_active"  exact className="nav-link" to="/contact">
//                         Contact
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

// import { MdDeveloperMode } from "react-icons/md";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      
    >
      <Container>
        <Navbar.Brand href="/" target="_blank">
          {/* <MdDeveloperMode style={{ marginBottom: "2px" }} />  */}
          Dunsinola
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/About"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Services"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Contact"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {/* <Nav.Link
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link> */}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

