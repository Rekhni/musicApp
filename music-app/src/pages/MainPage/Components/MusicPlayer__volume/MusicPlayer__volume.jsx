import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const MusicPlayer__volume = () => {
  return (
    <S.VolumeBlock>
      <div>
        <S.IconSvg>
          <use xlinkHref={`${sprite}#icon-volume`}></use>
        </S.IconSvg>
      </div>
      <div>
        <input type="range" name="range"/>
      </div>
    </S.VolumeBlock>
  );
};
