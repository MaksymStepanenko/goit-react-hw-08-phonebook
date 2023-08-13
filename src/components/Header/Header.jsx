import { useDispatch } from "react-redux";
import { logoutUserThunk } from "redux/operation";

export const Header = () => {
   const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <div>
      <div>
        <a href="/">my CONTACTS</a>
      </div>

      <div>
        <p>email</p>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
};
