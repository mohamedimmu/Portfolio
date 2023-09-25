'use client';

interface ButtonProps {
  title: String;
  secondaryBtn?: Boolean;
}

const Button: React.FC<ButtonProps> = ({ title, secondaryBtn }) => {
  return (
    <button
      className={`
      ${secondaryBtn ? "border-2" : "border-2"}
      ${secondaryBtn ? "text-custom-black" : "text-white"}
      ${secondaryBtn ? "bg-transparent" : "bg-custom-black"}
      ${secondaryBtn ? "hover:bg-black" : "hover:bg-transparent"}
      ${secondaryBtn ? "hover:text-white" : "hover:text-custom-black"}
      w-full
      flex-grow
      whitespace-nowrap
      transition
      duration-500
      border-custom-black
      py-2 
      px-4
      font-content
      font-light
      text-base
      rounded-md
      cursor-pointer
      `}
    >
      {title}
    </button>
  );
};

export default Button;
