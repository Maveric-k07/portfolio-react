import React, { Component, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "../styles/nav.css"

// export default class Navbar extends Component {
//   // scrollToTop = () => {
//   //   scroll.scrollToTop();
//   // };

//   _renderCounter = () => {
//     const [navbar, setNavBar] = useState(false);
    
//   }


//   render() {
//     return (
//       <nav className="nav active" id="navbar">
//         <div className="nav-content">
//           {
//             <img
//               src={logo}
//               className="nav-logo"
//               alt="Logo"
//               onClick={this.scrollToTop}
//             />
//           }
//           <ul className="nav-items">
//             {/* <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="title"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Home
//               </Link>
//             </li> */}
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="skills"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 What I do
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="tech"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Tech
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="projects"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Projects
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="aboutme"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 About
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

export default function Navbar(){

  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 560){
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }

  window.addEventListener('scroll',changeBackground);

  return(
    <header className={navBar ? 'nav active' : 'nav'}>
        <nav className="nav__container__actions">
          <span class="navbar-brand" href="">
            Akhileshwar
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon"></span>
          </button>
          <div >
            <ul className="navList">
              <li>
                <Link activeClass="active" smooth="easeInOutBack" spy to="skills" offset={-65} duration={500}>
                  What I do 
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth="easeInOutBack" spy to="tech" offset={-65} duration={500}>
                  Tech
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth="easeInOutBack" spy to="projects" offset={-65} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth="easeInOutBack" spy to="aboutme" offset={-65} duration={500}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  )
}
