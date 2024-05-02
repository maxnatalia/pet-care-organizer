import { useState } from "react";

export const useOpenDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClose = () => {
    console.log("close");
    setIsOpen(false);
  };

  return { handleToggle, handleClose, isOpen };
};
