import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

interface ProfileProps {
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FC<ProfileProps> = ({ setIsSignedIn }) => {
  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["access_token"]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    setIsSignedIn(false);
    navigate("/");
  };
  const handleOutsideClick = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="relative inline-block text-left"  ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 px-4 text-gray-400 hover:text-gray-500 focus:outline-none"
          onClick={toggleDropdown}
        >
          <img
            src="../images/profileIcon.png"
            height={40}
            width={40}
          />
        </button>
      </div>
      {isOpen && (
        <div className="absolute w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center"
              role="menuitem"
            >
              Profile
            </Link>
            <button
              role="menuitem"
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
