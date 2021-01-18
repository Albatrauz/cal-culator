import styles from './Logout.module.scss';
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

const Logout = ({ user }) => {
  // Import firebase
  const firebase = useFirebaseApp();

  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <button className={styles.button} type="button" onClick={handleClick}>
        Log Out
      </button>
    </>
  );
};

export default Logout;
