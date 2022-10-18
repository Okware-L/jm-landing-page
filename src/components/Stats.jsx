import { stats } from "../constants";
import styles from "../style";
import Button from "./Button";
import Button2 from "./Button2";


const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-3`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}


  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h4 className={styles.heading2}>Buy crypto</h4>
      <p className={`${styles.paragraph} max-w-[470px]`}>
      Simple way to buy or sell crypto with a credit card, bank transfer and more.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href=""><Button2/></a>
    </div>
  </section>


export default CTA;

  </section>
);

export default Stats;
