import React from 'react';
import PropTypes from 'prop-types';

export default function JokeComponent({ joke, btnText }) {
  return (
    <>
      <h3>Joke Generator</h3>
      <h4>{joke.setup}</h4>
      <h6>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h6>
    </>
  );
}

JokeComponent.defaultProps = {
  joke: {
    setup: '',
  },
};

JokeComponent.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
  btnText: PropTypes.string.isRequired,
};
