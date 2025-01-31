import "./contact.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildrenP: 0.1,
    }
  }
}

export const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>hello street New York</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 123 456 789</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}>
          <svg width="800px" height="800px" viewBox="0 0 48 48">
            <path
              strokeWidth={0.1}
              fill="none"
              d="M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5Z" />
            <path d="M30.5339,14.0558a48.0066,48.0066,0,0,1-5.8646,11.1554c-.1557-2.9249-.5656-5.3887-.4781-7.9044a17.4677,17.4677,0,0,0-1.8486,5.8964,47.41,47.41,0,0,1-1.4342-9.8167,43.9781,43.9781,0,0,1-4.7809,7.9362c.6709,3.4063,1.6592,6.5839,4.43,8.4781a5.4554,5.4554,0,0,1-3.6335-1.243l6.12,10.6454c-3.9281-2.2311-7.63-5.7635-11.2191-9.9442" />
            <path d="M30.5339,14.0558c.9112,3.342,1.0821,6.46-.7968,8.9562" />
            <path d="M30.9615,15.9192c2.5021,4.4422,3.0322,14.414-2.595,15.0609,1.32.4307,2.8744.3031,5.2909-1.8805.0735,2.6518-1.8037,4.1163-3.6335,5.61" />
            <path d="M41.9274,6.0991a8.179,8.179,0,0,1-3.5848,2.2515c-1.572.324-5.1125,1.524-4.2709,3.06.5236.9554,5.4956,8.383,4.9084,17.7529-.19,3.0274,2.3507,8.9362,3.52,9.2193" />
            <path d="M34.1442,5.5c.396-.1642-2.2965,2.9612-3.5147,1.8307A10.6252,10.6252,0,0,0,27.5289,5.5" />
            <path d="M5.5,31.3338c2.1088-1.309,3.5594-2.6533,6.3247-2.0748" />
            <path d="M11.8247,29.259A24.86,24.86,0,0,1,10.04,22.98a10.8791,10.8791,0,0,0-.112,6.1926C6.9593,17.76,10.8734,11.335,17.1155,6.5976" />
            <path d="M33.4113,30.79l1.2022-1.308c.5253,4.6625,4.84,6.7235,7.71,11.84" />
            <path d="M36.7234,5.5a19.951,19.951,0,0,1-1.8867,2.8187A14.2253,14.2253,0,0,1,41.457,6.46" />
            <path d="M30.2691,31.1029a10.458,10.458,0,0,1-5.1217,3.7656,13.2154,13.2154,0,0,1-6.2863-2.9415" />
            <path d="M16.9706,5.5l.1449,1.0976" />
            <path d="M28.8654,32.6579c.2415.3469,4.8375,2.3528,5.96,3.1836,1.15.8514,2.2117,5.9543,3.4951,6.6585" />
            <path d="M5.5,38.3378c1.611,3.0668,5.0228,1.878,7.7841,4.1622" />
            <path d="M22.1883,42.5c-.9837-.8438-5.7334-7.3147-8.7091-8.2274C10.9251,33.4892,8.6955,35.2,5.5,35.5413" />
            <path d="M23.3787,30.6266a22.628,22.628,0,0,0,2.4749.1767" />
            <path d="M17.4346,22.2518c1.1267-.9118,2.2534-1.2431,3.646.0663" />
            <ellipse cx="19.3239" cy="23.909" rx="0.7182" ry="0.6629" />
            <ellipse cx="29.7188" cy="24.5625" rx="0.7182" ry="0.6629" />
            <path d="M27.7318,23.4671c1.6676-1.5889,3.1107-1.33,4.2869,1.127" />
            <path d="M25.5938,26.0625l.0937,1.1563" />
            <path d="M24.6875,9.2812A34.0461,34.0461,0,0,0,23.4375,16c-.7429-1.75-1.6976-3.5-1-5.25" />
            <path d="M37.8945,19.9228c-.71,3.6543-2.1915,8.7484-2.8945,8.421,1.7062-4.7311,1.06-9.1681.8682-13.6619" />
            <path d="M16.1275,21.3227c-.7837-4.1352-.3463-5.8227-.3463-5.8227" />
            <path d="M18.6562,8.0938c-10.4979,8.9183-5.3139,18.4893-3.875,22.5312" />
            <path d="M16.9243,28.5578a15.8482,15.8482,0,0,1-4.4327-5.09" /></svg>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message"></textarea>
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  )
}
