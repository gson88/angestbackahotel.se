import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from '/components/views/form/index';
import IntlMessage from '/components/views/IntlMessage/IntlMessage';
import { formatDate, getTomorrowsDate } from '/utils/date-utils/date-utils';

class SearchForm extends Component {
  constructor (props) {
    super(props);
    this.minDate = formatDate(new Date(), 'Y-MM-DD');
    const tomorrowString = formatDate(getTomorrowsDate(), 'Y-MM-DD');

    this.state = {
      checkin: this.minDate,
      checkout: tomorrowString
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSearchButtonClick = () => {
    this.props.onSearch(this.state);
  };

  render () {
    const inputClassNames = 'w-1/3 mr-4 xssm:mr-0 xssm:w-full xssm:mb-4';

    return (
      <article className="SearchForm flex justify-center sm:flex-col xs:flex-col">
        <Input
          type="date"
          className={inputClassNames}
          id="checkin"
          labelLangKey="web.booking.check_in.label"
          value={this.state.checkin}
          onChange={this.onInputChange}
          min={this.minDate}
        />
        <Input
          type="date"
          className={inputClassNames}
          id="checkout"
          labelLangKey="web.booking.check_out.label"
          value={this.state.checkout}
          onChange={this.onInputChange}
          min={this.state.checkin}
        />
        <div className="flex items-end w-1/3 xssm:w-full">
          <Button
            type="button"
            className="w-full"
            onClick={this.onSearchButtonClick}>
            <IntlMessage message="web.booking.search_for_rooms.button" />
          </Button>
        </div>
      </article>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func
};

export default SearchForm;
