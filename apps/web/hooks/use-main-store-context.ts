import React, { useContext, useState } from 'react';
import { MainStoreContext, MainStoreContextType } from '../contexts/main-store';

export default function useMainStoreContext() {
  const mainStoreContext = useContext(MainStoreContext);
  if (!mainStoreContext) {
    throw new Error('MainStoreContext is needed');
  }
  //return useState<MainStoreContextType>(mainStoreContext);
  return mainStoreContext;
}
