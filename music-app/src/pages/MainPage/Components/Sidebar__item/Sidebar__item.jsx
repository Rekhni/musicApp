import * as S from './styles';

export const Sidebar__item = ({ img, description, loadingClass }) => {
  return (
    <S.Sidebar__item className={loadingClass}>
      <a href="#">
        <img src={img} alt={description} />
      </a>
    </S.Sidebar__item>
  );
};

