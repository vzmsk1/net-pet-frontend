import type { FunctionComponent } from "react";
import { Header } from "./header/header.component";
import type { ILayoutProps } from "./layout.props";
import styles from "./layout.module.css";
import cn from "classnames";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header title="movie pet" />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
