import { motion } from "framer-motion";
import clsx from "clsx";

type TitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-title-bg rounded-xl text-sky-100 text-center", // Center-align the text
        className
      )}
    >
      <h1 className="text-4xl font-bold">{title}</h1> {/* Title as it is */}
      {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
    </motion.div>
  );
};

export default Title;
