import classes from './Sidebar__item.module.css';

const Sidebar__item = ({ img, description }) => {
  return (
    <div className={classes.sidebar__item}>
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={img} alt={description} />
      </a>
    </div>
  );
};

export default Sidebar__item;