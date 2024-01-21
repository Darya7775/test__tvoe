import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.scss';

const Header: React.FC = () => {
  return(
    <header className='header'>
      <Link href='/' className='header__logo'>
        <Image src='/logo.svg' alt='TVОЁ' width={32} height={50} priority={true} />
      </Link>
      <nav className='header__nav'>
        <Link href='#' className='header__nav-link header__nav-link--search' aria-label='поиск по сайту' />
        <Link href='/' className='header__nav-link header__nav-link--home' aria-label='начальная страница' />
        <Link href='#' className='header__nav-link header__nav-link--video' aria-label='фильмы' />
        <Link href='#' className='header__nav-link header__nav-link--screen' aria-label='кинотеатр' />
        <Link href='#' className='header__nav-link header__nav-link--heart' aria-label='избранное' />
        <Link href='#' className='header__nav-link header__nav-link--human' aria-label='профиль' />
      </nav>
      <button className='header__button' type='button' aria-label='закрыть меню'></button>
    </header>
  );
};

export default Header;
