import axios from "axios";
//Ругалось на Cors
//обходил с помощью ссылки на прокси
//https://cors-anywhere.herokuapp.com
//если будет 403 ошибка в Network, то надо перейти по ссылке вышел и получить доступ

export const Api = {
	getData: () => {
		return  axios.get('https://cors-anywhere.herokuapp.com/http://www.mrsoft.by/data.json')
	}
}