import React, { ChangeEvent } from 'react';

type PropsType = {
	type: string
	value?: string
	checked?: boolean
	handler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputComponent: React.FC<PropsType> = React.memo (( { type, value, checked, handler}) => {
	return (
		<div>
			<input type={type} value={value} checked={checked} onChange={handler}/>
		</div>
	);
});
