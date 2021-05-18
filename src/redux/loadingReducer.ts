// Actions
export const setStatus = (status: RequestStatusType) => ({
	type: '/app/SET-STATUS', status} as const)
type setAppStatusType = ReturnType<typeof setStatus>
const setRequestError = (errorText: string | null) => ({
	type: '/app/SET-REQUEST-ERROR', errorText} as const)
type setRequestErrorType = ReturnType<typeof setRequestError>

export type LoadingActionsType = setAppStatusType | setRequestErrorType

// State
const initState: LoadingInitStateType = {
	status: 'idle',
	requestError: null
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type LoadingInitStateType = {
	status: RequestStatusType
	requestError: string | null
}

// Reducer
export const loadingReducer = (state = initState, action: LoadingActionsType): LoadingInitStateType => {
	switch (action.type) {
		case '/app/SET-STATUS':
			return {
				...state,
				status: action.status
			}
		case '/app/SET-REQUEST-ERROR':
			return {
				...state,
				requestError: action.errorText
			}
		default:
			return {...state}
	}
}
