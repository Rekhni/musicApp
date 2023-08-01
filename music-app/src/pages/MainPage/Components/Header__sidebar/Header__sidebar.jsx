import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setToken } from 'store/UISlice';

export const Header__Sidebar = () => {
  const dispatch = useDispatch();
  const name = Cookies.get('user');
  console.log(name);
  const handlerOnClick = () => {
    Cookies.remove('user');
    dispatch(setToken(Boolean(Cookies.get('user'))));
  }
  return (
    <S.Container>
      <p>{name}</p>
      <S.Logout onClick={handlerOnClick}>
          <use xlinkHref={`${sprite}#icon-logout`} />
        </S.Logout>
    </S.Container>
  );
};