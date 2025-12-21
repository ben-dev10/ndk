"use client";
import { useState } from "react";

export function useOpen() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return {
    open,
    setOpen,
    handleClick,
  };
}
