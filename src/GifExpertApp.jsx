import { useState } from "react";
import { motion} from "framer-motion";
import { AddCategory, GifGrid, ButtonClean } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one piece']);


  const onAddCategory = (newCategory) => {
    const validateCategory = newCategory.toLowerCase();

    if (categories.includes(validateCategory)) {
      return;
    } else {
      setCategories([validateCategory, ...categories]);
    }
  };

  const resetGallery = () => {
    setCategories([]);
  }

  return (
    <>
    <div className="header">
    <motion.h1
      transition={{duration: 1}}
      animate={{x:0}}
      initial={{x: 500}}>
      GifExpertApp</motion.h1>

      <ButtonClean resetGallery={resetGallery}/>      
    </div>
      

      <AddCategory onNewCategory={(e) => onAddCategory(e)} />
      
      {categories.map((item) => (
        <GifGrid key={item} item={item} />
      ))}
    </>
  );
};
