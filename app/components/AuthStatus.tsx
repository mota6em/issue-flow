"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") {
    return <div className="skeleton h-5 w-10 p-0"></div>;
  }
  if (status === "unauthenticated") {
    return (
      <div className="fixed top-1 right-32 z-50 dropdown dropdown-end p-2">
        <Link href="/api/auth/signin" className="hover:underline hover:text-green-500">
          Login
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="fixed top-1 right-32 z-50 dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img src={session?.user?.image} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box border  border-gray-500   mt-2 space-y-2 z-50 w-52 p-2 shadow"
        >
          <div className="flex flex-col bg-base-200 space-y-1.5 p-2 rounded-sm">
            <span className="px-2 text-md">{session?.user?.name}</span>
            <span className="px-3 text-sm text-gray-500">
              {session?.user?.email}
            </span>
          </div>
          <li>
            <Link
              href="/api/auth/signout"
              className="rounded border border-gray-700 hover:bg-red-500 hover:text-white transition ease-in-out duration-150"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AuthStatus;
