import store from "@/store/index";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { shallowEqual } from "react-redux";

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;
