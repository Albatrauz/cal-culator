import './App.scss';
import Layout from './components/Layout/Layout'
import {useFirebaseApp} from 'reactfire';
import SignUp from './components/SignUp/SignUp';
import Login from './components/LogIn/LogIn';

function App() {
  const firebase = useFirebaseApp()
  console.log(firebase);
  return (
      <div>
        <Layout>
          <SignUp>
            <h1>TEST</h1>
          </SignUp>

          <Login />
        </Layout>
      </div>
  );
}

export default App;
