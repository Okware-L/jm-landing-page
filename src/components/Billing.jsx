import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
     <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[70%] h-[80%] relative z-[5] rounded-[100px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Jon Maurice Token <br className="sm:block hidden" /> Airdrops &
        Campaigns.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        To be eligible for our future airdrops you should have 
        at least provided liquidity to the Jon Maurice protocol 
        & have interacted with the application in a decentralized manner.<br/>
        <a className="mt-[20px] text-yellow-500 cursor-pointer animate-pulse" href=""> Visit our ICO campaign </a>
      </p>
      
      
    </div>
  </section>
);

export default Billing;
