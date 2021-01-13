import {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import styles from './BodyData.module.scss'
import {useFirebaseApp} from 'reactfire';

const BodyData = (props) => {

  const firebase = useFirebaseApp();

  const [bodydata, setBodydata] = useState({
    length: '',
    weight: '',
    bmi: ''
  });

  const getBMI = useCallback((length, weight) => {
    const convertLength = length / 100;
    const final = weight / (convertLength * convertLength)
    return final.toFixed(1);
  }, []);

  const pushBodyData = useCallback((bmi, length, weight) => {
    firebase.database().ref('users/' + props.user.uid).set({
      bodydata: {
        bmi: bmi,
        length: length,
        weight: weight,
      }
    })
    .then(function() {
      console.log('Synchronization succeeded');
    })
    .catch(function(error) {
      console.log('Synchronization failed');
    });
  }, [props.user.uid, firebase]);

  useEffect(() => {
    const {length, weight} = bodydata;
    if (length && weight) {
      let bmi = getBMI(length, weight);
      setBodydata((prevState) => ({
      ...prevState,
      bmi: bmi
      }));
      pushBodyData(bmi, length, weight);
    }
  }, [bodydata.length, bodydata.weight, getBMI, pushBodyData]);

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setBodydata(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className={styles.bodydataWrapper}>
      <div>Lengte</div>
      <input type="text" name="length" onBlur={inputHandler} />
      <div>Gewicht</div>
      <input type="text" name="weight" onBlur={inputHandler} />
      <p>Your BMI is {bodydata.bmi}</p>
    </div>
  );
}

BodyData.propTypes = {
  length: PropTypes.number,
  weight: PropTypes.number,
}

export default BodyData;
