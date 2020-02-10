// this hosues the login button

import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const blueBG = {
    backgroundColor: '#44A7E2'
  }

  const blackBG = {
    backgroundColor: '#000000'
  }

  return (
    <>
    {/* ~~~~~this is the old nav bar~~~~ */}
    {/* <div>
      {!isAuthenticated && (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        <Link to="/group">Group</Link>
      </span>
    )}
    </div> */}


  <div className="w-full">
  <header className="">
    <nav className="flex justify-between w-full text-white p-4" style={blueBG}>
      <a href="/"><span className="font-semibold text-xl tracking-tight">The Book Club</span></a>
        <div className="md:items-center md:w-auto flex">
          <div className="md:flex hidden">
          {isAuthenticated && (
            <>
              <Link to="/" className="block md:text-white mr-4">Home</Link>
              <Link to="/profile" className="block md:text-white mr-4">Profile</Link>
              <Link to="/group" className="block md:text-white mr-4">Group</Link>
            </>
          )}

          </div>
          <div className="flex text-sm" v-else>
          {!isAuthenticated && (
            <button className="p-2 ml-2 bg-white text-blue-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" 
            onClick={() => loginWithRedirect({})}>Login</button>
          )}

          {isAuthenticated && 
            <button className="p-2 ml-2 bg-white text-blue-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100"
            onClick={() => logout()}>Log out</button>
          }
            {/* <a className="p-2 ml-2 bg-blue-500 text-gray-100 font-semibold leading-none border border-blue-600 rounded hover:border-transparent hover:bg-blue-600" href="/auth/signup">Sign up</a> */}
          </div>
        </div>
    </nav>
  </header>
  <main className="flex justify-center items-center">
    <h1 className="text-3xl text-center"></h1>
  </main>
  <div className="bottomNav fixed bottom-0 w-full">
    <nav style={{border: "1px solid black"}} className="md:hidden bottom-0 w-full bg-gray-700 text-xs">
      <ul className="flex justify-around items-center text-white text-center opacity-75 text-lg font-bold">

        {isAuthenticated && (
          <>
            <li className="p-4 hover:bg-gray-500">
              <span>
                <Link to="/" className="block md:text-white mr-4">Home</Link>
              </span>
              <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
              </svg>
            </li>

            <li className="p-4 hover:bg-gray-500">
              <span>
                <Link to="/profile" className="block md:text-white mr-4">Profile</Link>
              </span>
              <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
              </svg>
            </li>

            <li className="p-4 hover:bg-gray-500">
              <span>
                <Link to="/group" className="block md:text-white mr-4">Group</Link>
              </span>
              <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
              </svg>
            </li>


          </>
          )}

      </ul>
    </nav>
  </div>
  </div>
</>









  );
};

export default NavBar;