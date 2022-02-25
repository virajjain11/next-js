import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{" "}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
    <div className="grid place-content-center min-h-screen">
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        <h1 className="text-4xl font-semibold sm:gap-4  sm:col-span-2 sm:grid sm:grid-cols-2 md:col-span-3 md:grid-cols-3">
          <span className="bg-yellow-200 rounded-lg p-2 md:col-span-2 self-center">
            Learning Grid Layout!!
          </span>
        </h1>
        <p className=" self-center sm:row-start-2 sm:col-start-2 md:col-start-1 md:col-span-2 md:px-2 md:text-lg">
          this is something I am writing to fill
        </p>
        <div className="h-14 bg-cyan-600 sm:h-auto sm:square"></div>
        <div className="h-14 bg-cyan-600 sm:h-auto sm:square"></div>
        <div className="h-14 bg-cyan-900 sm:h-auto sm:square "></div>
        <div className="h-14 bg-cyan-600 sm:h-auto sm:square md: col-start-2"></div>
        <div className="h-14 bg-cyan-900 sm:h-auto sm:square "></div>
        <div className="h-14 bg-cyan-600 sm:h-auto sm:square"></div>
        <div className="h-14 bg-cyan-600 sm:h-auto sm:square"></div>
        <div className="h-14 bg-cyan-900 sm:h-auto sm:square"></div>
        <p className=" self-center md:text-lg px-2 md:col-span-2">
          this is something I am writing to fill
        </p>
      </div>
    </div>
  );
};

export default Home;
