import React from 'react';



export default function Goods (props) {
	return(
		<>
			<div className={'package'}>
				<div className={'vis-title packageH'}>
					<h1>{props.title}</h1>
				</div>
				<div className={'prevu'}>
					<img className={'packageImage'} src={props.source} alt={'image'} />
				</div>
				<div className={'price packageH'}>
					<h1>{props.price}</h1>
				</div>
			</div>
		</>
		)
}