import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { StateSchema } from "store/reducers";

export const useTypedSelector: TypedUseSelectorHook<StateSchema> =  useSelector