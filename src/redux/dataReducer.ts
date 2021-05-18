import {Api} from "../api/api";
import {Dispatch} from "redux";
import {LoadingActionsType, setStatus} from "./loadingReducer";
// Actions
export const setData = (data: Array<string>) => ({
	type: 'redux/dataReducer/SET-DATA', data
} as const)
type setDataType = ReturnType<typeof setData>
export const setValueInputText = (value: string) => ({
	type: 'redux/dataReducer/SET-VALUE-INPUT-TEXT', value
} as const)
type setValueInputTextType = ReturnType<typeof setValueInputText>
export const setFilteredData = (filteredData: Array<string>) => ({
	type: 'redux/dataReducer/SET-FILTERED-DATA', filteredData
} as const)
type setFilteredDataType = ReturnType<typeof setFilteredData>
export const setIsRegister = (checked: boolean) => ({
	type: 'redux/dataReducer/SET-IS-REGISTER', checked
} as const)
type setIsRegisterType = ReturnType<typeof setIsRegister>

export const setMessage = (message: string) => ({
	type: 'redux/dataReducer/SET-MESSAGE', message
} as const)
type setMessageType = ReturnType<typeof setMessage>


export type DataActionsType = setDataType
	| setValueInputTextType
	| setFilteredDataType
	| setIsRegisterType
	| setMessageType


// State
const initState: DataInitStateType = {
	data: [],
	valueInputText: '',
	filteredData: [],
	isRegister: false,
	message: '',

}
export type DataInitStateType = {
	data: string[]
	valueInputText: string
	filteredData: string[]
	isRegister: boolean
	message: string

}
// Reducer
export const dataReducer = (state = initState, action: DataActionsType): DataInitStateType => {
	switch (action.type) {
		case "redux/dataReducer/SET-DATA": {
			return {
				...state,
				data: action.data
			}
		}
		case "redux/dataReducer/SET-VALUE-INPUT-TEXT": {
			return {
				...state,
				valueInputText: action.value,
				message: ''
			}
		}
		case "redux/dataReducer/SET-FILTERED-DATA": {
			return {
				...state,
				filteredData: action.filteredData
			}
		}
		case "redux/dataReducer/SET-IS-REGISTER": {
			return {
				...state,
				isRegister: action.checked
			}
		}
		case "redux/dataReducer/SET-MESSAGE": {
			return {
				...state,
				message: action.message
			}
		}
		default:
			return {...state}
	}
}
// Thunk
export const getDataThunk = () => (dispatch: Dispatch<DataActionsType | LoadingActionsType>) => {
	dispatch(setStatus('loading'))
	return Api.getData()
		.then((res) => {
			dispatch(setData(res.data.data))
		})
		.catch( (e)=> {
			console.log(e)
		} )
		.finally(() => {
			dispatch(setStatus('succeeded'))
		})
}