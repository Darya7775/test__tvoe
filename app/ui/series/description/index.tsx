import React from 'react';
import Title from '../../components/title';
import { Serial } from '../../types';
import './styles.scss';

const Description: React.FC<Serial> = (serial: Serial) => {
  return(
    <section className='description'>
      <Title text='Описание' />
      <p className='description__text'>{serial.description}</p>
      {serial.smokeAndAlcohol
        && <p className='description__warning'>Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.</p>}
    </section>
  );
};

export default Description;
