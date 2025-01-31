import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const PERIOD = 2_000; // 2 seconds

function Typewriter({ onFinishAnimation, text }) {
  const onFinishAnimationRef = useRef(onFinishAnimation);
  const [isDeleting, setDeleting] = useState(false);
  const [typedContent, setTypedContent] = useState('');

  // Make sure we always have the most up to date finish animation handler
  useEffect(
    function () {
      onFinishAnimationRef.current = onFinishAnimation;
    },
    [onFinishAnimation],
  );

  // Step through each letter for writing and deleting the text
  useEffect(
    function () {
      const offsetAmount = isDeleting ? -1 : 1;
      const nextTypedContent = text.substring(0, typedContent.length + offsetAmount);

      // Finished deleting; wait then call finished handler
      if (isDeleting && nextTypedContent === '') {
        setTypedContent('');
        setTimeout(function () {
          setDeleting(false);
          onFinishAnimationRef.current();
        }, 500);
        return;
      }

      // Written out all the text; wait then start deleting it
      if (!isDeleting && nextTypedContent === text) {
        setTypedContent(nextTypedContent);
        setTimeout(function () {
          setDeleting(true);
        }, PERIOD);
        return;
      }

      const rawDelta = 200 - Math.random() * 100;
      const delta = isDeleting ? rawDelta / 2 : rawDelta;

      setTimeout(() => {
        setTypedContent(nextTypedContent);
      }, delta);
    },
    [isDeleting, text, typedContent],
  );

  return <div className="typewriter" role="status" aria-live="polite">{typedContent}</div>;
}

Typewriter.propTypes = {
  onFinishAnimation: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Typewriter;
