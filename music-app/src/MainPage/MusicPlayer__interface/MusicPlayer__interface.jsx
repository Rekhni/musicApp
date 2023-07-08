import classes from './MusicPlayer__interface.module.css';
import MusicPlayer__controls from '../MusicPlayer__controls/MusicPlayer__controls';
import MusicPlayer__track from '../MusicPlayer__track/MusicPlayer__track';
import MusicPlayer__LikeDislike from '../MusicPlayer__LikeDislike/MusicPlayer__LikeDislike';
import MusicPlayer__volume from '../MusicPlayer__volume/MusicPlayer__volume';

const PlayerInterface = () => {
  return (
    <div className={classes.playerInterface}>
      <div className={classes.leftBlock}>
        <MusicPlayer__controls />
        <MusicPlayer__track />
        <MusicPlayer__LikeDislike />
      </div>
      <MusicPlayer__volume />
    </div>
  );
};

export default PlayerInterface;
