import logo from "../assets/logo.png";
import "../styles/Jumbotron.css";

import { motion } from "framer-motion";

const Jumbotron = () => {
  return (
    <div className="container jumbotron">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
        }}
        className="lead"
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          maiores error odit ea, itaque ab.
        </p>
        <a href="#" className="button">
          Menu
        </a>
      </motion.div>
      <motion.h1
        initial={{ top: "-35%" }}
        animate={{ top: "25%" }}
        transition={{
          type: "spring",
          duration: 1,
          stiffness: 50,
          delay: 0.3,
        }}
        className="brand"
      >
        Infinite
      </motion.h1>
      <motion.img
        initial={{ top: "25%" }}
        animate={{ top: "65%" }}
        transition={{
          type: "spring",
          duration: 1,
          stiffness: 50,
          delay: 0.3,
        }}
        src={logo}
        alt="Infinite logo agency"
        className="logo"
      />
    </div>
  );
};

export default Jumbotron;
