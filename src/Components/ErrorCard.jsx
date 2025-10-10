import React from "react";

const ErrorCard = ({ type = "app" }) => {
  let imgSrc = "";
  let message = "";

  switch(type){
    case "app":
      imgSrc = "/App-Error.png";
      message = "Oops! App not found.";
      break;
    case "page":
      imgSrc = "/error-404.png";
      message = "404 - Page Not Found";
      break;
    default:
      imgSrc = "/error-404.png";
      message = "Something went wrong";
  }

  return (
    <div className="flex flex-col items-center justify-center h-96 text-center px-4">
      <img src={imgSrc} alt={message} className="w-48 h-48 mb-4 object-contain" />
      <h2 className="text-2xl font-bold">{message}</h2>
    </div>
  );
};

export default ErrorCard;
