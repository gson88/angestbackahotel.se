import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import { IAppState } from '~/reducers/app-reducer';
import CabinRecord from '~/components/containers/CabinsContainer/data/CabinRecord';
import IntlMessage from '~/components/views/IntlMessage/IntlMessage';
import StaticBackground from '~/components/views/StaticBackground/StaticBackground';
import SectionContainer from '~/components/views/SectionContainer/SectionContainer';
import SearchCabinsFormContainer from '~/components/containers/SearchForm/SearchForm';
import CabinSearchResults from './components/CabinSearchResults/CabinSearchResults';
import { searchCabins } from '~/components/containers/CabinsContainer/actions';

interface ICabinsContainer {
  cabins: List<CabinRecord>,
  isSearching: boolean,
  searchCabins: typeof searchCabins
}

const CabinsContainer: React.FC<ICabinsContainer> = props => {
  return (
    <section className="CabinsContainer">
      <StaticBackground
        src="/images/stugan/stug6.jpg"
        height="400px">
        <h1>
          <IntlMessage message="cabins.book_a_cabin.header" />
        </h1>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchCabins }, dispatch);
};

const mapStateToProps = ({ cabins }: IAppState) => {
  const { isSearching, cabins: cabinList } = cabins;
  return { isSearching, cabins: cabinList };
};

export default connect(mapStateToProps, mapDispatchToProps)(CabinsContainer);
