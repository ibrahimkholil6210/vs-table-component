import React, { HTMLAttributes } from "react";
import './Button.css'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="bg-blue-500 px-5 py-2 text-white font-bold">{props.label}</button>;
};

export default Button;