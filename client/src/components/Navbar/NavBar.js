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
              <Link to="/group" className="block md:text-white mr-4">Groups</Link>
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
                <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z" fill-rule="evenodd" />
              </svg>
            </li>

            <li className="p-4 hover:bg-gray-500">
              <span>
                <Link to="/profile" className="block md:text-white mr-4">Profile</Link>
              </span>
              <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                <path d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z" fill-rule="evenodd" />
              </svg>
            </li>

            <li className="p-4 hover:bg-gray-500">
              <span>
                <Link to="/group" className="block md:text-white mr-4">Groups</Link>
              </span>
              <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                <path d="M6.634,13.591H2.146c-0.247,0-0.449,0.201-0.449,0.448v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449v-2.692C7.083,13.792,6.881,13.591,6.634,13.591 M6.185,16.283h-3.59v-1.795h3.59V16.283zM6.634,8.205H2.146c-0.247,0-0.449,0.202-0.449,0.449v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V8.653C7.083,8.407,6.881,8.205,6.634,8.205 M6.185,10.897h-3.59V9.103h3.59V10.897z M6.634,2.819H2.146c-0.247,0-0.449,0.202-0.449,0.449V5.96c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V3.268C7.083,3.021,6.881,2.819,6.634,2.819 M6.185,5.512h-3.59V3.717h3.59V5.512z M15.933,5.683c-0.175-0.168-0.361-0.33-0.555-0.479l1.677-1.613c0.297-0.281,0.088-0.772-0.31-0.772H9.336c-0.249,0-0.448,0.202-0.448,0.449v7.107c0,0.395,0.471,0.598,0.758,0.326l1.797-1.728c0.054,0.045,0.107,0.094,0.161,0.146c0.802,0.767,1.243,1.786,1.243,2.867c0,1.071-0.435,2.078-1.227,2.837c-0.7,0.671-1.354,1.086-2.345,1.169c-0.482,0.041-0.577,0.733-0.092,0.875c0.687,0.209,1.12,0.314,1.839,0.314c0.932,0,1.838-0.173,2.673-0.505c0.835-0.33,1.603-0.819,2.262-1.449c1.322-1.266,2.346-2.953,2.346-4.751C18.303,8.665,17.272,6.964,15.933,5.683 M15.336,14.578c-1.124,1.077-2.619,1.681-4.217,1.705c0.408-0.221,0.788-0.491,1.122-0.812c0.97-0.929,1.504-2.168,1.504-3.485c0-1.328-0.539-2.578-1.521-3.516c-0.178-0.17-0.357-0.321-0.548-0.456c-0.125-0.089-0.379-0.146-0.569,0.041L9.769,9.327v-5.61h5.861l-1.264,1.216c-0.099,0.094-0.148,0.229-0.137,0.366c0.014,0.134,0.088,0.258,0.202,0.332c0.313,0.204,0.61,0.44,0.882,0.7c1.158,1.111,2.092,2.581,2.092,4.145C17.405,12.026,16.48,13.482,15.336,14.578" fill-rule="evenodd" />
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