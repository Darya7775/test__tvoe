import React from 'react';
import Link from 'next/link';
import './styles.scss';

interface Props {
  href?: string;
  text?: string;
  a11y?: string;
  color?: boolean;
  class?: string;
}

const Button: React.FC<Props> = (props: Props) => {
  return(
    <>
      {props.href
        ? <Link
            href={props.href}
            className={`button ${props.class ? props.class : ''} ${props.color ? 'button--color' : ''}`}
            {...(props.a11y ? {'aria-label': `${props.a11y}`} : {})}>
            {props.text}
          </Link>
        : <button
            type='button'
            className={`button ${props.class ? props.class : ''} ${props.color ? 'button--color' : ''}`}
            {...(props.a11y ? {'aria-label': `${props.a11y}`} : {})}>
            {props.text}
          </button>}
    </>
  );
};

export default Button;
