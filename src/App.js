import "./App.scss";
import Layout from "./components/Layout/Layout";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";
import { useUser, useDatabase } from "reactfire";
import Logout from "./components/Auth/Logout/Logout";
import BodyData from './components/BodyData/BodyData';

function App(props) {
  const {data: user} = useUser();
  const {data: userData} = useDatabase();
  return (
    <div>
      <Layout user={user}>
        { user ?
            <>
              <BodyData user={user} />
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
