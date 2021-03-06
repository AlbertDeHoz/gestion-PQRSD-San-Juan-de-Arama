import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const isAuth = () => {
    if(localStorage.getItem('auth-token') !== null) {
        return true
    }
    return false;
};

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => 
            isAuth() ? (
                <Component {...props} />
            ): (
                <Redirect 
                    to={{
                        pathname: '/',
                        //state: { message: 'Usuario no Autorizado' }
                    }}
                />
            )}
        />
    );
}

export default PrivateRoute;