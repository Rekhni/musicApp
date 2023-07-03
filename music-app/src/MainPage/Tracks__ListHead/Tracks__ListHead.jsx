import classes from './Tracks__ListHead.module.css';
import sprite from 'img/icon/sprite.svg';
// eslint-disable-next-line no-unused-vars
const Tracks__ListHead = ({ heading = 'Треки' }) => {
  return (
    <div className={classes.listHead}>
      <div>Трек</div>
      <div>Исполнитель</div>
      <div>Альбом</div>
      <div></div>
      <div className={classes.timeCol}>
        <svg className={classes.watchSvg}>
          <use xlinkHref={`${sprite}#icon-watch`} />
        </svg>
      </div>
    </div>
  );
};

export default Tracks__ListHead;