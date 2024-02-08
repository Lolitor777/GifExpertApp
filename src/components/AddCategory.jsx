import { useState } from "react";
import { motion } from "framer-motion";


export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <motion.input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        animate={{y: 0}}
        initial={{y: 500}}
        transition={{duration: 1}}
      />
    </form>
  );
};
