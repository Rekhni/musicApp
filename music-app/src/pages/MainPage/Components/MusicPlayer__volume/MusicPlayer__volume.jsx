import { useState } from 'react';
import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const MusicPlayer__volume = ({ audioAPI }) => {
  const [volumeValue, setVolumeValue] = useState('1');
  const handlerOnChangeVolume = (e) => {
    setVolumeValue(e.target.value);
  };
  if (audioAPI) audioAPI.volume = parseFloat(volumeValue);

  return (
    <S.VolumeBlock>
      <div>
        <S.IconSvg>
          <use xlinkHref={`${sprite}#icon-volume`}></use>
        </S.IconSvg>
      </div>
      <div>
        <input 
          onInput={(e) => handlerOnChangeVolume(e)}
          type="range"
          id="volume"
          min="0"
          max="1"
          value={volumeValue}
          step="0.01"
        />
      </div>
    </S.VolumeBlock>
  );
};
