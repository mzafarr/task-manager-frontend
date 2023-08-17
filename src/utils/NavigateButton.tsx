import React from "react";
import { Link } from "react-router-dom";

interface NBProps {
  route: string;
  text: string;
}

const NavigateButton: React.FC<NBProps> = ({ route, text }) => {
  return (
    <Link to={route} className="text-2xl cursor-pointer text-blue-500 hover:text-blue-600">
      {text}
    </Link>
  );
};

export default NavigateButton;
