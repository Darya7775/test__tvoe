import React from 'react';
import './styles.scss';

interface Props {
  text: string;
  class?: string;
}

const Title: React.FC<Props> = (props: Props) => {
  return(
    <h2 className={`title ${props.class ? props.class : ''}`}>{props.text}</h2>
  );
};

export default Title;
