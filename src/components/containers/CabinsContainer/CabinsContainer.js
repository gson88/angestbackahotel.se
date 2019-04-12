import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import IntlMessage from '/components/views/IntlMessage/IntlMessage';
import StaticBackground from '/components/views/StaticBackground/StaticBackground';
import SectionContainer from '/components/views/SectionContainer/SectionContainer';
import SearchCabinsFormContainer from '/components/containers/SearchForm/SearchForm';
import CabinSearchResults from './components/CabinSearchResults/CabinSearchResults';
import { searchCabins } from './actions';

const CabinsContainer = props => {
  return (
    <section className="CabinsContainer">
      <StaticBackground
        src="/images/stugan/stug6.jpg"
        height="400px">
        <IntlMessage wrapper={<h1 />} message="cabins.book_a_cabin.header" />
      </StaticBackground>
      <SectionContainer>
        <SearchCabinsFormContainer onSearch={props.searchCabins} />
        <CabinSearchResults
          cabins={props.cabins}
          isLoading={props.isSearching}
        />
      </SectionContainer>
    </section>
  );
};

CabinsContainer.propTypes = {
  isSearching: PropTypes.bool,
  cabins: PropTypes.any,
  searchCabins: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    searchCabins
  }, dispatch);
};

const mapStateToProps = ({ cabins }) => {
  const { isSearching, cabins: cabinList } = cabins;
  return {
    isSearching,
    cabins: cabinList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CabinsContainer);
