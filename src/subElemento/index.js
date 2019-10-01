import React from 'react';
import { BrowserRouter ,  Route, Link } from 'react-router-dom';

function index(){

		return (
			<BrowserRouter>
				
				<Route path="/sub"  exact render={teste} />
				<Route path="/sub/teste/:id" render={teste2} />
			</BrowserRouter>
		);
	
}



const teste = () => {
	return(
		<div>
			<Link to="/sub/teste/1">teste id 1</Link><br/>
			<Link to="/sub/teste/2">teste id 2</Link><br/>
			<Link to="/sub/teste/3">teste id 3</Link>
		</div>
	);
}


const teste2 = ({match}) => {
	console.log(match.params.id);
	return(
		<div>
			<Link to="/sub">volta</Link>
			<h2>Entrou com o ID: {match.params.id}</h2>
		</div>
	);
}

export default index;
