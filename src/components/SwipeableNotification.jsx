import React from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipableNotification = ({ message, onDismiss }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onDismiss(),
    onSwipedRight: () => onDismiss(),
  });

  return (
    <div {...handlers} className="swipable-notification text-center">
      {message}
    </div>
  );
};

export default SwipableNotification;
