import { TypedUseSelectorHook } from 'react-redux';
import { State } from '../types/state';
import { useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
