import { useCookies } from "react-cookie";
import NavigateButton from "../utils/NavigateButton";
import Profile from "./Profile";
// import Wrapper from "../utils/Wrapper";

interface NavbarProps {
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setIsSignedIn }) => {
  const [cookies, _] = useCookies(["access_token"]);

  return (
    <nav className="border-b flex items-center bg-slate-100 justify-center text-lg sm:text-xl py-2 w-full">
      {/* <Wrapper> */}
      <div className="flex ml-4 sm:ml-10 sm:gap-5 items-center space-x-4 font-semibold">
        <NavigateButton text={"Home"} route={"/"} />
        {!cookies.access_token ? (
          <>
            <NavigateButton text={"Sign In"} route={"/signIn"} />
            <NavigateButton text={"Sign Up"} route={"/signUp"} />
          </>
        ) : (
          <>
            <NavigateButton text={"My Tasks"} route={"/myTasks"} />
            <Profile setIsSignedIn={setIsSignedIn} />
          </>
        )}
      </div>
      {/* </Wrapper> */}
    </nav>
  );
};

export default Navbar;
