import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setToken } from 'store/UISlice';
import * as S from './styles';

export const MainNav__Link = ({ linkName, link, logout }) => {
  const dispatch = useDispatch();
  const handlerOnClick = () => {
    Cookies.remove('token');
    dispatch(setToken(Boolean(Cookies.get('token'))));
  };
  return (
    <S.NavLink onClick={logout && handlerOnClick}>
      <Link to={link} className='menu__link'>
         {linkName}
      </Link>
    </S.NavLink>
  );
};

