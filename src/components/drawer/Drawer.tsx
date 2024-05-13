import { useRef, useEffect } from "react";
import "./Drawer.css";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  const bodyRef = useRef(document.querySelector("body"));
  const closeOnEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      console.log("esc");
      onClose();
    }
  };
  //close drawer on esc
  useEffect(() => {
    document.addEventListener("keydown", closeOnEsc, false);
    return () => document.removeEventListener("keydown", closeOnEsc, false);
  }, []);

  //dont allow body to scroll when drawer open
  useEffect(() => {
    const toggleBodyScroll = () => {
      if (isOpen) {
        bodyRef.current!.style.overflow = "hidden";
      } else {
        bodyRef.current!.style.overflow = "";
      }
    };
    toggleBodyScroll();
  }, [isOpen]);

  return (
    <div className={`container`}>
      <div className={`content ${isOpen ? "opened" : "closed"}`}>
        <div>
          header <button onClick={onClose}>Close Drawer</button>
        </div>
        {children}
      </div>
      <div
        className={`backdrop ${isOpen ? "opened" : "display-none"}`}
        onClick={() => {
          console.log("close");
          onClose();
        }}
      />
    </div>
  );
};

export default Drawer;
