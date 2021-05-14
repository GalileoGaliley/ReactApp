import React from 'react';



export default function Goods (props) {
	return(
		<>
				<div className={'package'}>
						<h2>{props.title}</h2>
						<img className={'packageImage'} src={props.source} alt={'image'} />
						<h3>{props.price}</h3>
				</div>
		</>
		)
}