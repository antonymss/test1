import React from 'react';

type PropsType = {
	title: string
	handler: () => void
}

export const ButtonComponent: React.FC<PropsType> = React.memo (function ({title, handler}) {
	return (
		<div>
			<button onClick={handler}>{title}</button>
		</div>
	);
});
