/* eslint-disable no-console */
import { decCounter, incCounter } from '../../store/slices/test.slice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

/**Application main page component
*/
export function TestComponent(): JSX.Element {
  const dispatch = useAppDispatch();
  console.log('TestComponent rendered');

  const testValue = useSelector((state: RootState) => {
    console.log('TestComponent useSelector invoke');

    return state.test.counterValue;
  });

  return (
    <div className="container">
      <h2>Current value {testValue}</h2>
      <button onClick={() => dispatch(incCounter(null))}>+</button>
      <button onClick={() => dispatch(decCounter(null))}>-</button>
    </div>
  );
}
