import React from 'react';
import PropTypes from 'prop-types';
import Button from '~components/views/form/Button/Button';
import IntlMessage from '~components/views/IntlMessage/IntlMessage';
import Icon from '~components/views/icons/Icon/Icon';

const BookCabinButton = ({ onClick, isAvailable }) => {
  if (!isAvailable) {
    return (
      <div className="flex items-center xssmmd:w-full xssmmd:mt-4">
        <Icon icon="fa-2x fa-times" className="text-red mr-2" />
        <IntlMessage message="cabins.cabin_search_result_item.not_available.text" />
      </div>
    );
  }

  return (
    <Button
      type="button"
      className="h-full px-8 xssmmd:w-full xssmmd:h-auto xssmmd:mt-4"
      onClick={onClick}>
      <IntlMessage message="cabins.cabin_search_result_item.book_cabin.button" />
    </Button>
  );
};

BookCabinButton.propTypes = {
  onClick: PropTypes.func,
  isAvailable: PropTypes.bool
};

export default BookCabinButton;
