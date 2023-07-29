import { useState } from 'react';
import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const MusicPlayer__Controls = ({ audioAPI }) => {
  const [playerState, setPlayerState] = useState({
    isPaused: true,
    isLoop: false,
  });

  if (audioAPI) audioAPI.loop = playerState.isLoop;
  const handlerOnPlay = () => {
    audioAPI.play();
    setPlayerState({ ...playerState, isPaused: false });
  };

  const handlerOnPause = () => {
    audioAPI.pause();
    setPlayerState({ ...playerState, isPaused: true });
  };

  const handlerOnLoop = () => {
    setPlayerState({ ...playerState, isLoop: !playerState.isLoop });
  };

  return (
    <S.PlayerControls>
      <S.Previous>
        <S.PreviousSvg alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`}></use>
        </S.PreviousSvg>
      </S.Previous>
      
      {playerState.isPaused ? (
        <S.Play onClick={() => handlerOnPlay()}>
          <S.PlaySvg alt="play">
            <use xlinkHref={`${sprite}#icon-play`}></use>
          </S.PlaySvg>
        </S.Play>
      ) : (
        <S.Pause onClick={() => handlerOnPause()}>
          <S.PlaySvg alt="play">
            <use xlinkHref={`${sprite}#icon-pause`}></use>
          </S.PlaySvg>
        </S.Pause>
      )}

      <S.Next>
        <S.NextSvg alt="next">
          <use xlinkHref={`${sprite}#icon-next`}></use>
        </S.NextSvg>
      </S.Next>
      <S.Repeat $isActive={playerState.isLoop} onClick={() => handlerOnLoop()}>
        <S.RepeatSvg alt="repeat">
          <use xlinkHref={`${sprite}#icon-repeat`}></use>
        </S.RepeatSvg>
      </S.Repeat>
      <S.Shuffle>
        <S.ShuffleSvg alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`}></use>
        </S.ShuffleSvg>
      </S.Shuffle>
    </S.PlayerControls>
  );
};

