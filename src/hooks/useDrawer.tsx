import { useState } from "react";

export const useDrawer = () => {
  const [openDrawerId, setOpenDrawerId] = useState<null | string>(null);

  const handleToggle = (itemId: string) => {
    setOpenDrawerId(openDrawerId === itemId ? null : itemId);
  };

  const handleClose = () => {
    setOpenDrawerId(null);
  };

  return { handleToggle, handleClose, openDrawerId };
};
