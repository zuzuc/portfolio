// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Typewriter from './Typewriter';

// function TypewriterCycle({ items }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   function handleFinishAnimation() {
//     const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
//     setCurrentIndex(nextIndex);
//   }

//   return <Typewriter text={items[currentIndex]} onFinishAnimation={handleFinishAnimation} />;
// }

// TypewriterCycle.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default TypewriterCycle;