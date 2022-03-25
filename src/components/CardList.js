import React from 'react';
import Card from './Card';
// import { robots } from './robots';

const CardList = ({robots}) => {
	return (
		<div>
			{
				robots.map((users, i) => {
					return ( 
						<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email} 
						/>
					);
			    })
			}
	    </div>
	);
}

export default CardList;