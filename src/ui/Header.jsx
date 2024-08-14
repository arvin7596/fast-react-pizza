import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <SearchOrder />
      <Link to="/">Back to root</Link>
    </div>
  );
}

export default Header;
