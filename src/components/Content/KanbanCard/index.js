import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as EditIcon } from '../../../asset/edit.svg';
import { editingCard } from '../../../redux/actions/cards';

const KanbanCard = ({ card }) => {
  const { title, description } = card;
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(editingCard(card));
  };
  return (
    <div className='card-content card-content-mod'>
      <div className='kanbancard box'>
        <p className='is-size-6'>{title}</p>
        <p className='is-size-7'>{description}</p>
        <EditIcon className='icon position-icon' onClick={handleOnClick} />
      </div>
    </div>
  );
};

export default KanbanCard;
