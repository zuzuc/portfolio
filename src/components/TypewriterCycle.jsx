import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TypeWriter from './TypeWriter';

function TypewriterCycle({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleFinishAnimation() {
    const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
  }

  return <TypeWriter text={items[currentIndex]} onFinishAnimation={handleFinishAnimation} />;
}

TypewriterCycle.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypewriterCycle;