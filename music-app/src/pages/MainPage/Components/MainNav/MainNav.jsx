import * as S from './styles';
import { MainNav__Link } from '../MainNav__link/MainNav__link';
import sprite from 'assets/img/icon/sprite.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'store/UISlice';



export const MainNav = () => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector((state) => state.UI.isMenuVisible);

  const handleClickBurger = () => dispatch(toggleMenu());
  return (
    <S.MainNav>
      <S.BurgerSvg onClick={handleClickBurger}>
        <use xlinkHref={`${sprite}#icon-burger`} />
      </S.BurgerSvg>
      <S.NavListContainer>
        <S.NavList $isVisible={isMenuVisible}>
          <MainNav__Link linkName={'Главное'} link="/" />
          <MainNav__Link linkName={'Мой плейлист'} link="/favorites" />
          <MainNav__Link linkName={'Выйти'} link="/login" logout={true} />
        </S.NavList>
      </S.NavListContainer>
    </S.MainNav>
  );
};
