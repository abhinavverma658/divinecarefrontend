import { useCallback, useState } from 'react';
const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const show = useCallback(() => setIsOpen(true), []);
  const hide = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  return {
    isOpen,
    toggle,
    show,
    hide
  };
};
export default useToggle;