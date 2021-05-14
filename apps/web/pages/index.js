// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ name }) {
  return (
    <div className={styles.container}>
      <h1>Hey!!! {name}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { name: "Dan!" },
  };
}
