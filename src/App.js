import "./App.scss";
import Layout from "./components/Layout/Layout";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/LogIn/LogIn";
import { useUser, useDatabase } from "reactfire";
import Logout from "./components/Logout/Logout";

function App(props) {
  const {data: user} = useUser();
  const {data: userData} = useDatabase();
  console.log(user);
  return (
    <div>
      <Layout>
        { user ?
            <>
              <Logout user={user} />
            </>
          :
            <>
              <Login />
              <SignUp />
            </>
        }
      </Layout>
    </div>
  );
}

export default App;
