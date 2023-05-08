import { HTMLAttributes } from "react";
import './Button.css';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
