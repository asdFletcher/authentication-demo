import React, { useContext } from "react";
import "bulma/css/bulma.css";
import { useAuth0 } from "./contexts/auth0-context";
import Header from "./components/Header";
import Axios from "axios";

function App() {
  const {
    isLoading,
    user,
    loginWithRedirect,
    logout,
    getTokenSilently,
  } = useAuth0();

  const handleTest = async () => {
    const token = await getTokenSilently();
    console.log("token: ", token);
  };

  const handleTest2 = async () => {
    let res = await Axios.get("http://localhost:5000/hello");
    console.log(res.data);
  };
  const GetJWTForMgmtAPI = async () => {
    const token = await getTokenSilently({
      audience: "https://auth0-test-auth.us.auth0.com/",
    });
    console.log("token: ", token);
  };

  return (
    <>
      <Header />

      <div className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            {!isLoading && !user && (
              <>
                <h1>Click Below!</h1>
                <button
                  onClick={loginWithRedirect}
                  className="button is-danger"
                >
                  Login
                </button>
                <button
                  onClick={handleTest2}
                  className="button is-small is-dark"
                >
                  Test3
                </button>
              </>
            )}
            {!isLoading && user && (
              <>
                <h1>You are logged in!</h1>
                <p>Hello {user.name}</p>

                {user.picture && <img src={user.picture} alt="My Avatar" />}
                <hr />

                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="button is-small is-dark"
                >
                  Logout
                </button>
                <button
                  onClick={handleTest}
                  className="button is-small is-dark"
                >
                  Test
                </button>
                <button
                  onClick={GetJWTForMgmtAPI}
                  className="button is-small is-dark"
                >
                  GetJWTForMgmtAPI
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
