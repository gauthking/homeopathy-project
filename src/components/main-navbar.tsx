import { NavbarInfo } from "../utils/constant";
import { Link } from "react-router-dom";

/**
 *
 * @param props
 * @returns
 */
const MainNavbar = () => {
  return (
    <div className="container flex justify-between">
      <div>
        <h1>
          Harmony <span>Heal</span>
        </h1>
      </div>
      <nav>
        {NavbarInfo.map((item, index) => {
          return (
            <Link to={item.href} key={index}>
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div>Contact us</div>
    </div>
  );
};

export default MainNavbar;
