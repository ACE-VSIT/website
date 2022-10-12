import React from 'react';
import { Navigate } from 'react-router-dom';
import { authContextType, useAuth } from '../contexts/AuthContext';

export type ProtectedRouteProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  isAuthenticated: authContextType
  authenticationPath: string
  outlet: JSX.Element
}

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  const { user } = useAuth();

  if (user.admin && user.email && user.name && user.uid) {
    return outlet;
  }
  return <Navigate to={{ pathname: authenticationPath }} />;
}
