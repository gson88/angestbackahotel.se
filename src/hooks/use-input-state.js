import { useState, useCallback } from 'react';

const useInputState = defaultInput => {
  const [ state, setState ] = useState(defaultInput);
  return [ state, useCallback(event => {
    return setState(event.target.value);
  }, [ ])];
};

export default useInputState;
