import Image from "next/image";
import SearchIcon from "../../../public/search.svg";
import styles from "./styles.module.scss";
import clsx from "clsx";

type SearchInputProps = {
  className?: string;
};

const SearchInput = ({ className }: SearchInputProps) => {
  return (
    <div className={clsx(styles.search_input, className)}>
      <Image
        alt="search"
        src={SearchIcon}
        className={styles.icon}
        width={17}
        height={17}
      />
      <input type="text" placeholder="Search something here!" />
    </div>
  );
};

export default SearchInput;
