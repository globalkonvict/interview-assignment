import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardFrom from './CardFrom';
import CardColumn from './CardColumn';
import { searchCard } from '../../redux/actions/cards';

import './content.scss';

function Content() {
  const dispatch = useDispatch();
  const [cardsData, setCardsData] = useState({});
  const { cards = [], searchedCards = [] } = useSelector(state => state.cards);
  const sortByType = array => {
    if (Array.isArray(array)) {
      return array?.reduce((acc, card) => {
        acc[card.type] = acc[card.type] || [];
        acc[card.type].push(card);
        return acc;
      }, {});
    }
    return false;
  };
  const searchCards = e => {
    dispatch(searchCard(e.target.value));
  };

  useEffect(() => {
    if (searchedCards.length > 0) {
      setCardsData(sortByType(searchedCards));
    } else {
      setCardsData(sortByType(cards));
    }
  }, [cards, searchedCards]);

  return (
    <>
      <div className='container'>
        <div className='columns is-mobile'>
          <div className='column is-10 is-offset-1'>
            <input type='text' className='input is-large search-input' placeholder='Search' onChange={searchCards} />
          </div>
        </div>
      </div>
      <section className='section'>
        <div className='columns is-multiline'>
          <div className='column is-one-fifths'>
            <CardFrom />
          </div>
          <div className='column is-four-fifths'>
            <div className='columns is-multiline'>
              <div className='column is-6'>
                <CardColumn title='To Do' cardData={cardsData?.todo ?? []} />
              </div>
              <div className='column is-6'>
                <CardColumn title='Development' cardData={cardsData?.dev ?? []} />
              </div>
              <div className='column is-6'>
                <CardColumn title='Testing' cardData={cardsData?.test ?? []} />
              </div>
              <div className='column is-6'>
                <CardColumn title='Done' cardData={cardsData?.done ?? []} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
