import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const bgStyle = {
    // backgroundColor: '#000000',
    // backgroundImage: 'url("{https://tailwindcss.com/img/card-left.jpg}")'
    backgroundSize: "cover",
    width: "100%",
    height: "auto"
  }





  return (


    <Fragment>
      {/* <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{JSON.stringify(user.email_verified, null, 2)}</p>
      <code>{JSON.stringify(user, null, 2)}</code> */}



      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
          <img src={user.picture} style={bgStyle} alt="profile pic"/>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {/* <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only */}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">User Details</div>
            <p className="text-gray-700 text-base">Name: {user.name}</p>
            <p className="text-gray-700 text-base">Email verified: {JSON.stringify(user.email_verified, null, 2)}</p>
          </div>
          <div className="flex items-center">
            {/* <img className="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/> */}
            <div className="text-sm">
            <p className="text-gray-900 leading-none">{user.name}</p>
            <p className="text-gray-600">{user.updated_at}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;