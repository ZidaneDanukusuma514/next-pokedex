import * as React from "react";
import Link from "next/link";
import styles from "./_Header.module.scss";
import { useRouter } from "next/router";
export interface IHeaderProps {
  title?: string;
}

export default function Header({ title = "title here" }: IHeaderProps) {
  const router = useRouter();
  const [Dropdown, setDropdown] = React.useState(false);
  return (
    <header className={styles.Header}>
      <div className={styles.InnerHeader}>
        <div className={styles.title}>
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <h2>{title}</h2>
          </Link>
        </div>

        <ul className={styles.Nav}>
          <li>
            <Link
              className={router.pathname == "/" ? styles.activeLink : ""}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
        <button className="" onClick={() => setDropdown(!Dropdown)}>
          Dropdown
        </button>
        {!Dropdown ? null : (
          <ul className={styles.NavDrop}>
            <li>
              <Link
                className={router.pathname == "/" ? styles.activeLink : ""}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
