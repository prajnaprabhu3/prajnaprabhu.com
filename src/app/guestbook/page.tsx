"use client";

const GuestBook = async () => {
  return (
    <div className="flex flex-col gap-14 mx-auto w-1/2 bg-green-200 -mt-72">
      <h2 className="text-2xl mx-auto">
        sign my guestbook: <h1></h1>
      </h2>

      <div className="flex justify-between">
        <p>hi, thanks for visiting my site</p>

        {/* <button
          onClick={() => signIn()}
          className="bg-myColor text-white px-4 font-bold text-sm rounded"
        >
          Sign
        </button>  */}
        {/* {session && session.user ? ( */}
        {/* <button
          // onClick={() => signOut()}
          className="bg-myColor text-white px-4 font-bold text-sm rounded"
        >
          Sign out
        </button> */}
        {/* ) : ( */}
        <button
          // onClick={() => signIn()}
          className="bg-myColor text-white px-4 font-bold text-sm rounded"
        >
          Sign
        </button>
        {/* )} */}
      </div>

      {/* {session && session.user ? ( */}
      <div className="flex gap-2">
        <p className="text-myColor">Prajna:</p>
        <p>hi, just a trial message</p>
      </div>
      {/* ) : ( */}
      {/* "" */}
      {/* )} */}
    </div>
  );
};

export default GuestBook;

// https://next-auth.js.org/configuration/pages
// https://mattermost.com/blog/add-google-and-github-login-to-next-js-app-with-nextauth/
// https://blog.openreplay.com/authentication-and-db-access-with-next-prisma-and-mongodb/
// https://www.codifytools.com/blog/auth-prisma-mongo-nextjs
// https://refine.dev/blog/nextauth-google-github-authentication-nextjs/#for-googleprovider-make-sure-you-have-a-google-account

// https://blog.bitsrc.io/adding-nextauth-to-nextjs-13-and-authenticating-with-github-40539ca6a81c
// https://mattermost.com/blog/add-google-and-github-login-to-next-js-app-with-nextauth/
