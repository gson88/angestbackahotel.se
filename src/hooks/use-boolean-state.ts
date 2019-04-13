import { useCallback, useState } from 'react';

const useBooleanState = (initialState: boolean): [ boolean, Function, Function ] => {
  const [ state, setState ] = useState(initialState);

  const toggleState = useCallback(() => {
    setState(currState => !currState);
  }, [ setState ]);

  return [ state, toggleState, setState ];
};

export default useBooleanState;
