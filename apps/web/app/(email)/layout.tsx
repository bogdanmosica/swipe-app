import React from 'react';

interface EmailLayoutProps {
  children: React.ReactNode;
}

export default function EmailLayout({ children }: EmailLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
