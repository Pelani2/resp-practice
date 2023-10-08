import React from "react";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
    type?: ButtonType;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children}) => {
    return (
        <button type={type || "submit"}>
            {children}
        </button>
    );
};

export default Button;