import React from 'react';
import PropTypes from 'prop-types';
import SpinningIcon from '~/components/views/icons/SpinningIcon/SpinningIcon';
import CabinSearchResultItem from '../CabinSearchResultItem/CabinSearchResultItem';
import './CabinSearchResults.scss';

const CabinSearchResults = ({ isLoading, cabins }) => {
  return (
    <section className="CabinSearchResults mt-8 flex flex-col justify-center items-center">
      { isLoading ? (
        <div>
          <SpinningIcon icon="fa-circle-notch" className="fa-3x" />
        </div>
      ) : (
        cabins.map(cabin => (
          <CabinSearchResultItem
            key={cabin.id}
            cabin={cabin}
          />
        ))
      )}
    </section>
  );
};

CabinSearchResults.propTypes = {
  isLoading: PropTypes.bool,
  cabins: PropTypes.any
};

export default CabinSearchResults;
