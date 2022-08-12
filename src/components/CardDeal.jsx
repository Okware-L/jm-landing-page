import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The Jon Maurice <br className="sm:block hidden" /> Roadmap
        V1.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We are a crypto protocol using uniswap V2 technology 
        to create markets on ethereum based platforms and we will 
        roll over to all other layer 2's like Arbitrum & Optimism in 
        the near future. 
        See The Jonmaurice roadmap in the documentation.<br/>
        <a className="mt-[20px] text-yellow-500 cursor-pointer animate-pulse" href=""> Documentation</a>

      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] rounded-[30px] hover:scale-105 transition ease-in-out " />
    </div>
  </section>
);

export default CardDeal;
