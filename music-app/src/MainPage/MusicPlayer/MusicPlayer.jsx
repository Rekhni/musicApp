import classes from './MusicPlayer.module.css';
import MusicPlayer__ProgressBar from '../MusicPlayer__progressBar/MusicPlayer__progressBar';
import MusicPlayer__Interface from '../MusicPlayer__interface/MusicPlayer__interface';
const MusicPlayer = () => {
  return (
    <div className={classes.musicPlayer}>
      <MusicPlayer__ProgressBar />
      <MusicPlayer__Interface />
    </div>
  );
};

export default MusicPlayer;