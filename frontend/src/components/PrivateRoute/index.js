import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, condition, redirectTo, ...rest }) => {
	return <Route
		{...rest}
		render={props =>
			condition ?
				<Component {...props} />
				:
				<Navigate to={{
					pathname: redirectTo,
					state: {
						from: props.location
					}
				}} />
		}
	/>
}