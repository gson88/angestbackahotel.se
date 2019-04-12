import React from 'react';
import PropTypes from 'prop-types';
import CabinRecord from '../../data/CabinRecord';
import IntlMessage from '/components/views/IntlMessage/IntlMessage';
import { FooterItem, UserRatingIcons, BookCabinButton } from './index';
import './CabinSearchResultItem.scss';

const CabinSearchResultItem = ({ cabin }) => {
  return (
    <article className="CabinSearchResultItem w-full p-8 xssm:p-4 flex flex-row xssm:flex-col xssm:flex-col-reverse">
      <section className="cabin-info flex flex-col justify-between w-1/2 mr-4 xssm:mr-0 xssm:w-full">
        <header className="title mb-8 xssm:mt-4 uppercase">
          <h2 className="inline border-b border-solid">
            <IntlMessage message={cabin.cabinName} />
          </h2>
        </header>
        <section className="description h-full">
          { cabin.descriptionLangKeys.map(descriptionLangKey => (
            <p key={descriptionLangKey} className="mb-2">
              <IntlMessage message={descriptionLangKey} />
            </p>
          ))}
        </section>

        <footer className="flex flex-wrap justify-between items-center mt-8">
          <FooterItem
            titleLangKey="cabins.cabin_search_result_item.price_per_night"
            content={ <p><IntlMessage message="price" values={{ amount: cabin.pricePerNight }} /></p> } />
          <FooterItem
            titleLangKey="cabins.cabin_search_result_item.user_rating"
            content={ <UserRatingIcons userRating={cabin.userRating} /> } />
          <BookCabinButton
            isAvailable={cabin.booking.available}
            onClick={() => console.log('clicked book')}
          />
        </footer>
      </section>
      <section className="images w-1/2 flex xssm:w-full xssm:h-full">
        <div className="image h-full w-full" style={{
          backgroundImage: `url("${cabin.images[0].url}")`
        }} />
      </section>
    </article>
  );
};

CabinSearchResultItem.propTypes = {
  cabin: PropTypes.instanceOf(CabinRecord)
};

export default CabinSearchResultItem;
