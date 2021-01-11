import "./App.scss";
import Layout from "./components/Layout/Layout";
import { useFirebaseApp } from "reactfire";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/LogIn/LogIn";
import { useUser } from "reactfire";
import Logout from "./components/Logout/Logout";

function App() {
  const firebase = useFirebaseApp();
  const user = useUser();
  console.log(firebase);
  return (
    <div>
      <Layout>
        {user ? (
          <div>
            <Logout />
            <p>Je bent ingelogd</p>
            {user.displayName}
          </div>
        ) : (
          <div>
            <Login />
            <p>Je bent uitgelogd</p>
          </div>
        )}
        <SignUp>
          <h1>TEST</h1>
        </SignUp>
      </Layout>
    </div>
  );
}

export default App;
