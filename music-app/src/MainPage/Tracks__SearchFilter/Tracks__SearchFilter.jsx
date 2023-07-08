import classes from './Tracks__SearchFilter.module.css';
import Tracks__FilterButton from '../Tracks__FilterButton/Tracks__FilterButton';
import { useState } from 'react';

const Tracks__SearchFilter = () => {
  const [activeButton, setActiveButton] = useState(0);
  const makeBtnActive = (id) => {
    setActiveButton(id);
  };
  return (
    <div className={classes.searchFilter}>
      <h2 className={classes.heading}>Искать по:</h2>
      <Tracks__FilterButton
        makeBtnActive={makeBtnActive}
        id="1"
        isActive={activeButton === '1' && true}
        title="исполнителю"
      />
      <Tracks__FilterButton
        makeBtnActive={makeBtnActive}
        id="2"
        isActive={activeButton === '2' && true}
        title="году выпуска"
      />
      <Tracks__FilterButton
        makeBtnActive={makeBtnActive}
        id="3"
        isActive={activeButton === '3' && true}
        title="жанру"
      />
    </div>
  );
};

export default Tracks__SearchFilter;
