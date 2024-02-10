import { useState } from "react";
import styles from './Button.module.css';

const SubmitButton = () => {

const onClick = () => {
    console.log('Handle Submit!');
};

  return (
    <button className={styles.button} onClick={onClick}>
        Submit
    </button>
  );
};

export default SubmitButton;