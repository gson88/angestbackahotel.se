import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '~/components/views/icons/Icon/Icon';

const getUserRatingIcons = userRating => {
  return [1, 2, 3, 4, 5].map(i => {
    const isFull = userRating >= i;
    const isHalf = userRating === (i - 0.5);

    return <Icon
      key={`star_icon_${i}`}
      solid={isFull || isHalf}
      icon={classnames({
        'fa-star': !isHalf,
        'fa-star-half-alt': isHalf
      })
      }
    />;
  });
};

const UserRatingIcons = ({ userRating }) => {
  return (
    <section className="UserRatingIcons">
      { getUserRatingIcons(userRating) }
    </section>
  );
};

UserRatingIcons.propTypes = {
  userRating: PropTypes.number
};

export default UserRatingIcons;
