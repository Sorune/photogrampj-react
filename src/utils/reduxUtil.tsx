import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type { RootState, AppDispatch} from "../store/store.tsx";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
