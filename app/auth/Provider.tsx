'use client';
import React from "react";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
const AuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
