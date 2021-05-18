import React, {ChangeEvent, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dataApi, loadingReducer} from './selectors/selectors';
import {getDataThunk, setFilteredData, setIsRegister, setMessage, setValueInputText} from "./redux/dataReducer";
import {Preloader} from "./PreLoader/Preloader";
import { InputComponent } from './components/InputComponent';
import { ButtonComponent } from './components/ButtonComponent';
import { ResultComponent } from './components/ResultComponent';

export const App = () => {
	const {data, valueInputText, filteredData, isRegister, message} = useSelector(dataApi)
	const {status} = useSelector(loadingReducer)
	const dispatch = useDispatch();

	const validate = (value: string) => {
		if (Number(value)) {
			if (!message) {
				dispatch(setMessage("Number"))
			}
		} else {
			if (!message) {
				dispatch(setMessage("String"))
			}
		}
		return value
	}
	const onChangeInputValue = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => dispatch(setValueInputText(event.currentTarget.value)
		), [dispatch])

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => dispatch(setIsRegister(event.currentTarget.checked)
		), [dispatch])

	const onClickFilterLength = useCallback(
		() => dispatch(setFilteredData(data.filter(el => el.length > +valueInputText))
		), [dispatch, data, valueInputText])

	const onClickSubStringValue = useCallback(() => {
		isRegister
			? dispatch(setFilteredData(data.filter(el => [valueInputText].every(ell => el.includes(ell)))))
			: dispatch(setFilteredData(data.filter(el => [valueInputText.toLowerCase()].every(ell => el.toLowerCase().includes(ell.toLowerCase())))))
	}, [data, isRegister, valueInputText, dispatch])

	useEffect(() => {
		dispatch(getDataThunk())
	}, [dispatch])

	if (status === 'loading') {
		return <Preloader/>
	}
	return (
		<div>
			При вводе значений появятся нужные кнопки:
			<br/>
			<InputComponent type={'text'} value={validate(valueInputText)} handler={onChangeInputValue}/>
			{message === "Number" &&
					<ButtonComponent title={'фильтр по длине слов'} handler={onClickFilterLength}/>
			}
			{message === "String" &&
      <div>
          <ButtonComponent title={'фильтр по подстроке'} handler={onClickSubStringValue}/>
          <span>регистр:</span>
          <InputComponent type={'checkbox'} checked={isRegister} handler={onChangeHandler}/>
      </div>
			}
			{message ? message : ""}
			<ResultComponent filteredData={filteredData}/>
		</div>
	);
}
export default App;
