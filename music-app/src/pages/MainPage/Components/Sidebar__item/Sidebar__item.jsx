import { Link } from 'react-router-dom';
import * as S from './styles';

export const Sidebar__item = ({ img, description, loadingClass, link }) => {
  return (
    <S.Sidebar__item className={loadingClass}>
      <Link>
         <img src={img} alt={description} />
      </Link>
    </S.Sidebar__item>
  );
};

