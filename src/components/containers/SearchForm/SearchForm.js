import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from '/components/views/form/index';
import IntlMessage from '/components/views/IntlMessage/IntlMessage';
import { formatDate, getTomorrowsDate } from '/utils/date-utils/date-utils';
import useInputState from '/hooks/use-input-state';
import Form from '/components/views/form/Form/Form';

const SearchForm = props => {
  const todayDateString = useMemo(() => formatDate(new Date(), 'Y-MM-DD'), []);
  const tomorrowDateString = useMemo(() => formatDate(getTomorrowsDate(), 'Y-MM-DD'), []);

  const [ checkInState, setCheckinState ] = useInputState(todayDateString);
  const [ checkOutState, setCheckoutState ] = useInputState(tomorrowDateString);

  const onSearchButtonClick = useCallback(() => {
    props.onSearch({
      checkIn: checkInState,
      checkOut: checkOutState
    });
  }, [ checkInState, checkOutState ]);

  const inputClassNames = 'w-1/3 mr-4 xssm:mr-0 xssm:w-full xssm:mb-4';

  return (
    <Form onSubmit={onSearchButtonClick}>
      <article className="SearchForm flex justify-center sm:flex-col xs:flex-col">
        <Input
          type="date"
          className={inputClassNames}
          id="checkin"
          labelLangKey="web.booking.check_in.label"
          value={checkInState}
          onChange={setCheckinState}
          min={todayDateString}
        />
        <Input
          type="date"
          className={inputClassNames}
          id="checkout"
          labelLangKey="web.booking.check_out.label"
          value={checkOutState}
          onChange={setCheckoutState}
          min={checkInState}
        />
        <div className="flex items-end w-1/3 xssm:w-full">
          <Button
            type="submit"
            className="w-full">
            <IntlMessage message="web.booking.search_for_rooms.button" />
          </Button>
        </div>
      </article>
    </Form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func
};

export default SearchForm;
