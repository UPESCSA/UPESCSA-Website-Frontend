import Proptypes from "prop-types";
import styles from "./Stats.module.css";
import { useEffect } from 'react'


// CSS STYLES
const { statsContainer, statsNumber, statsText } = styles;

const Stats = ({ number, statText }) => {
  useEffect(() => {
    const numberAnimation = (el) => {
      const incrementor = number/100;
      const endValue = number
      anime({
        targets: el,
        textContent: endValue,
        round: incrementor ? 1/incrementor : 1/5,
        easing: 'easeInOutQuad',
        duration: 4000,
      });
    };

    const element = document.querySelector('.statsNumber');

    if (element){
      numberAnimation(element);
    }
  }, []);


  return (
    <div className={statsContainer}>
      <div className={statsNumber}>{number}+</div>
      <div className={statsText}>{statText}</div>
    </div>
  );
};

Stats.propTypes = {
  number: Proptypes.number.isRequired,
  statText: Proptypes.node.isRequired,
};

export default Stats;
