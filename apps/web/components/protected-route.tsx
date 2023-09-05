'use client';
import { useEffect } from 'react';
import useMainStoreContext from '../hooks/use-main-store-context';
import { useRouter } from 'next/navigation';

type ProtectedRouteProps = {
  redirectPath: string;
  children: React.ReactNode;
};

const ProtectedRoute = ({ redirectPath, children }: ProtectedRouteProps) => {
  const router = useRouter();
  const { isUserAuthenticated, isCheckingUserAuth } = useMainStoreContext();

  useEffect(() => {
    if (!isCheckingUserAuth && !isUserAuthenticated) {
      router.push(`/login?from=${redirectPath || ''}`);
    }
  }, [router, isUserAuthenticated, redirectPath, isCheckingUserAuth]);

  return isUserAuthenticated ? children : null;
};

export default ProtectedRoute;
