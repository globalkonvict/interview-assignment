import { useState, useEffect } from 'react';
import { v4 as getNewID } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { createCard, editCard } from '../../../redux/actions/cards';

const CardForm = () => {
  const initialFromState = {
    title: '',
    description: '',
    type: '',
  };
  const [formData, setFormData] = useState(initialFromState);
  const dispatch = useDispatch();
  const { status, card } = useSelector(state => state.cards.editing);
  const onSubmit = e => {
    e.preventDefault();
    const id = getNewID();
    const { title, description, type } = formData;
    if (status) {
      dispatch(editCard({ id: card.id, title, description, type }));
    } else {
      dispatch(createCard({ id, title, description, type }));
    }
    setFormData(initialFromState);
  };

  useEffect(() => {
    const { id, ...cardState } = card;
    if (status || Object.keys(card).length !== 0) {
      setFormData(cardState);
    }
  }, [card, status]);
  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>{status ? 'EDIT CARD' : 'ADD CARD'}</p>
      </header>
      <div className='card-content'>
        <div className='content'>
          <form onSubmit={onSubmit} onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}>
            <label className='label'>Title</label>
            <input
              type='text'
              className='input'
              name='title'
              placeholder='Title'
              value={formData.title}
              onChange={e => {
                return false;
              }}
            />
            <label className='label'>Description</label>
            <textarea
              className='textarea'
              placeholder='Description'
              name='description'
              value={formData.description}
              onChange={e => {
                return false;
              }}
            />
            <label className='label'>Type</label>
            <div className='select'>
              <select readOnly name='type' value={formData.type}>
                <option value='todo'>To Do</option>
                <option value='dev'>Development</option>
                <option value='test'>Testing</option>
                <option value='done'>Done</option>
                <option value='' disabled hidden>
                  Select An Option
                </option>
              </select>
            </div>
            {!status ? <input type='submit' className='button is-link' /> : <input type='submit' className='button is-danger' value='Update' />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
