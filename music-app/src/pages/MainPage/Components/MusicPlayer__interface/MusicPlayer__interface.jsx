import * as S from './styles';
import { MusicPlayer__Controls } from '../MusicPlayer__controls/MusicPlayer__controls';
import { MusicPlayer__track } from '../MusicPlayer__track/MusicPlayer__track';
import { MusicPlayer__LikeDislike } from '../MusicPlayer__LikeDislike/MusicPlayer__LikeDislike';
import { MusicPlayer__volume } from '../MusicPlayer__volume/MusicPlayer__volume';

export const MusicPlayer__Interface = () => {
  return (
    <S.PlayerInterface>
      <S.LeftBlock>
        <MusicPlayer__Controls />
        <MusicPlayer__track />
        <MusicPlayer__LikeDislike />
      </S.LeftBlock>
      <MusicPlayer__volume />
    </S.PlayerInterface>
  );
};

