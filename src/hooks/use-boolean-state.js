import { useCallback, useState } from 'react';

const useBooleanState = initialState => {
  const [ state, setState ] = useState(initialState);

  const toggleState = useCallback(() => {
    setState(currState => !currState);
  }, [ setState ]);

  return [ state, toggleState, setState ];
};

export default useBooleanState;
