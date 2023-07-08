import * as S from './styles';
import { MusicPlayer__progressBar } from '../MusicPlayer__progressBar/MusicPlayer__progressBar';
import { MusicPlayer__Interface } from '../MusicPlayer__interface/MusicPlayer__interface';

export const MusicPlayer = () => {
  return (
    <S.MusicPlayer>
      <MusicPlayer__progressBar />
      <MusicPlayer__Interface />
    </S.MusicPlayer>
  );
};

