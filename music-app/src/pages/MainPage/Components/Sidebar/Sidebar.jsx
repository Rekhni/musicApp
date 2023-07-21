import * as S from './styles';
import { Sidebar__item } from '../Sidebar__item/Sidebar__item';
import playlist01 from 'assets/img/playlist01.png';
import playlist02 from 'assets/img/playlist02.png';
import playlist03 from 'assets/img/playlist03.png';
import { useEffect, useState } from 'react';

export const Sidebar = () => {
  // Вешает класс loading на три секунды, а затем убирает его
  const [loadingClass, setLoadingClass] = useState('loading');
  useEffect(() => {
    setTimeout(setLoadingClass, 3000, '');
  });

  return (
    <S.SideBar>
      <Sidebar__item
        img={playlist01}
        description="day's playlist"
        loadingClass={loadingClass}
      />
      <Sidebar__item
        img={playlist02}
        description="
100 dance hits"
        loadingClass={loadingClass}
      />
      <Sidebar__item
        img={playlist03}
        description="indie charge"
        loadingClass={loadingClass}
      />
    </S.SideBar>
  );
};

