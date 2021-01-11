import styles from './Logout.scss';
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

const Logout = (props) => {
  // Import firebase
  const firebase = useFirebaseApp();

  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <h1>Hello {props.user.displayName}</h1>
      <button className={styles.btnPrimary} type="button" onClick={handleClick}>
        Log Out
      </button>
    </>
  );
};

export default Logout;
