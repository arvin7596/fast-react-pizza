import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const className = "text-blue-600 underline hover:text-blue-400";
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
