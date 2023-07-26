import * as S from './styles';
import { MusicPlayer__progressBar } from '../MusicPlayer__progressBar/MusicPlayer__progressBar';
import { MusicPlayer__Interface } from '../MusicPlayer__interface/MusicPlayer__interface';
import { useSelector } from "react-redux";

export const MusicPlayer = () => {
  const isPlayerVisible = useSelector((state) => state.UI.isPlayerVisible)

  return (
    <S.MusicPlayer $isPlayerVisible={isPlayerVisible}>
      <MusicPlayer__progressBar />
      <MusicPlayer__Interface />
    </S.MusicPlayer>
  );
};

