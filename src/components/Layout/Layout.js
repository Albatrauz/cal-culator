import style from './Layout.scss';
import Header from '../UI/Header/Header';

const Layout = (props) => (
  <>
    <Header user={props.user}/>
    <main>
      {props.children}
    </main>
  </>
);

export default Layout;
