import React, { ReactText } from 'react';
import style from './index.module.scss';


interface ButtonProps {
    className?: string,
    children: ReactText,
    onClick?: () => void
}

const Button:React.FC<ButtonProps> = (props:ButtonProps):JSX.Element => {
   return (
        <button onClick={props.onClick} className={[props.className, style.btn].join(' ')}>{props.children}</button>
    )
}

export default Button;