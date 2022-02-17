import {useEffect , useRef} from 'react'

function usePrevState(state) { 
  const ref = useRef();
    // don't re-render 2
    useEffect(() => {
      ref.current = state
    }) 
    return ref.current;
};

export default usePrevState;  
