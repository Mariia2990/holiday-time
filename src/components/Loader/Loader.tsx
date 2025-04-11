import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";
import clsx from "clsx";

interface LoaderProps {
  width?: string;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ absolute }) => {
  return (
    <div className={clsx(css.container, { [css.LoaderAbsolute]: absolute })}>
      <ThreeCircles color="#202846" height={150} width={150} />
    </div>
  );
};

export default Loader;
