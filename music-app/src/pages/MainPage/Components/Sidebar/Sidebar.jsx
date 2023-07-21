import * as S from './styles';
import { Sidebar__item } from '../Sidebar__item/Sidebar__item';
import playlist01 from 'assets/img/playlist01.png';
import playlist02 from 'assets/img/playlist02.png';
import playlist03 from 'assets/img/playlist03.png';

export const Sidebar = () => {
  return (
    <S.SideBar>
      <Sidebar__item
        img={playlist01}
        description="day's playlist"
        loadingClass={''}
        link="/playlist/1"
      />
      <Sidebar__item
        img={playlist02}
        description="
100 dance hits"
        loadingClass={''}
        link="/playlist/2"
      />
      <Sidebar__item
        img={playlist03}
        description="indie charge"
        loadingClass={''}
        link='/playlist/3'
      />
    </S.SideBar>
  );
};

