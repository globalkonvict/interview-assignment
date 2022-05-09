import React from 'react';
import KanbanCard from '../KanbanCard';

const CardColumn = ({ title, cardData }) => {
  return (
    <div className='list-card card'>
      <header className='card-header'>
        <p className='card-header-title'>{title ?? ''}</p>
      </header>
      {cardData.map(card => (
        <KanbanCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardColumn;
