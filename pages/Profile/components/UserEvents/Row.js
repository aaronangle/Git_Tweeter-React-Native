import { memo } from 'react';
import { EventRow } from '../../../../components/Elements/EventRow';

const Row = ({ item }) => {
  return <EventRow event={item} />;
};
export default memo(Row);
