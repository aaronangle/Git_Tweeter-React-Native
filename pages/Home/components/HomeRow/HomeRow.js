import React, { memo } from 'react';
import { EventRow } from '../../../../components/Elements/EventRow';
import { Link } from '../../../../react-router';

const HomeRow = ({ item }) => {
  return (
    <Link to={'/profile/' + item.actor.login}>
      <EventRow event={item} />
    </Link>
  );
};

export default memo(HomeRow);
