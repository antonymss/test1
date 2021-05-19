import {RootStoreType} from "../redux/store";

export const dataApi = (state: RootStoreType) => state.dataReducer
export const loadingReducer = (state: RootStoreType) => state.loadingReducer
