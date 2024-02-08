import { motion } from "framer-motion";
import { MdCleaningServices } from "react-icons/md"


export const ButtonClean = ({ resetGallery }) => {

  return (
    <>
      <motion.button
        className="btn-clean"
        transition={{ duration: 1 }}
        onClick={resetGallery}
        whileHover={{ scale: 1.2, transition: { duration: 0 } }}
        whileTap={{ scale: 1, transition: { duration: 0 } }}
        animate={{
          x: 0,
          y: 0,
          rotate: [300, 400, 500, 600, 0],
        }}
        initial={{ scale: 1, x: -500, y: 500 }}
      >
        <MdCleaningServices className="btn-clean-icon" />
      </motion.button>
    </>
  );
};
