import { motion } from "framer-motion";

export const GifItem = ({ title, url, id }) => {
  return (
    
      <motion.div
        className="card"
        transition={{ duration: 1 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        initial={{ y: 800, opacity: 0 }}
      >
        <img src={url} alt={title} />
        <p>{title}</p>
      </motion.div>
  );
};
