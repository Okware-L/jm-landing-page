import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <a href="https://www.jonmaurice.org/"><span className="text-gradient">Get</span></a>
        </p>
        <a href="https://www.jonmaurice.org/"><img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /></a>
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <a href="https://www.jonmaurice.org/"><span className="text-gradient">Started</span></a>
      </p>
    </div>
  </div>
);

export default GetStarted;