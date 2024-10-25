import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-text-bg rounded-xl text-sky-100 ",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
