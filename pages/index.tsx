import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Lists from '../components/Lists';
import styles from '../styles/Home.module.css';
import { faqlist } from '../interface/interface';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Lists />
    </div>
  );
};

export default Home;
