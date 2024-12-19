import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type {State} from '../store/types';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
