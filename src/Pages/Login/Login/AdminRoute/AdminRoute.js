import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../../Shared/Loading/Loading';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
