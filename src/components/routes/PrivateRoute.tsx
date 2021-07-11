import { FC, useContext, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import authContext from '../../context/authentication/authContext';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...props
}) => {
  const { authenticated, loading, userAuthenticated } = useContext(authContext);

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !loading ? (
          <Redirect to={'/'} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
