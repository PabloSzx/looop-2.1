// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";

export default function Home({ name }) {
  return (
    <div className={styles.container}>
      <h1>Hey!!! {name}</h1>
    </div>
  );
}

// Remove below and it will work fine!

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { name: "Dan!" },
  };
};
