import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="border-b border-stone-300 bg-yellow-500 p-4 font-semibold uppercase">
      <h1 className="text text-lg tracking-widest">Fast react pizza co.</h1>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
