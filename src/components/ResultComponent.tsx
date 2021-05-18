import React from 'react';

type PropsType = {
	filteredData: string[]
}

export const ResultComponent: React.FC<PropsType> = React.memo (({filteredData}) => {
	return (
		<div>
			<div>Результат: {filteredData.length !== 0 ? filteredData.map((el, index) => <span
				key={index}> {index}.{el}; </span>) : 'Нет совпадений'}
			</div>
		</div>
	);
});
