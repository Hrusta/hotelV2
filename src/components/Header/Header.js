import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const facilitiesFunction = () => {
    // Add your code for the facilities function here
    console.log("Facilities function called");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="page-header">
      <div className="horizontal-container">
        <img className="icon" alt="" src="./5-1@2x.png" />
        <div className="horizontal-container1">
          {isSmallScreen ? (
            <div className="dropdown" onClick={toggleDropdown}>
              <div className="container">
                <img className="placeholder-icon" alt="" src="./dot-menu.svg" />

                <img
                  className={`chevrondown-icon ${isDropdownOpen ? "open" : ""}`}
                  alt=""
                  src="./chevrondown.svg"
                />
              </div>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">Home</div>
                  <div className="dropdown-item">Rooms</div>
                  <div className="dropdown-item" onClick={facilitiesFunction}>
                    Facilities
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="button">
                <img
                  className="placeholder-icon"
                  alt=""
                  src="./placeholder.svg"
                />
                <div className="text">Home</div>
                <img
                  className="placeholder-icon"
                  alt=""
                  src="./placeholder.svg"
                />
              </div>
              <div className="button">
                <img
                  className="placeholder-icon"
                  alt=""
                  src="./placeholder.svg"
                />
                <div className="text">Rooms</div>
                <img
                  className="placeholder-icon"
                  alt=""
                  src="./placeholder.svg"
                />
              </div>
              <div className="button" onClick={facilitiesFunction}>
                <img
                  className="placeholder-icon"
                  alt=""
                  src="./placeholder.svg"
                />
                <div className="text">Facilities</div>
                <img
                  className="placeholder-icon"
                  alt=""
                  src="./placeholder.svg"
                />
              </div>
            </>
          )}
          <div className="button2">
            <div className="button4">
              <img
                className="placeholder-icon"
                alt=""
                src="./placeholder2.svg"
              />
              <div className="text">Contact</div>
              <img
                className="placeholder-icon"
                alt=""
                src="./placeholder2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
