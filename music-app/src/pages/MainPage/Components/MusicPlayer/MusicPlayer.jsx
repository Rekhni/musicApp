import * as S from './styles';
import { MusicPlayer__progressBar } from '../MusicPlayer__progressBar/MusicPlayer__progressBar';
import { MusicPlayer__Interface } from '../MusicPlayer__interface/MusicPlayer__interface';
import { useSelector } from "react-redux";
import { useRef, useState } from 'react';

export const MusicPlayer = () => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const audioAPIRef = useRef(null);
  const audioAPI = audioAPIRef.current;
  const isPlayerVisible = useSelector((state) => state.UI.isPlayerVisible)

  return (
    <S.MusicPlayer $isPlayerVisible={isPlayerVisible}>
      <MusicPlayer__progressBar audioAPI={audioAPI} />
      <MusicPlayer__Interface audioAPI={audioAPI} currentTrack={currentTrack} />
      <audio ref={audioAPIRef} src={currentTrack.track_file} />
    </S.MusicPlayer>
  );
};

