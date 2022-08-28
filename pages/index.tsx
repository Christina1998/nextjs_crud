import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Lists from '../components/Lists';
import styles from '../styles/Home.module.css';
import { faqEdit, faqlist } from '../interface/interface';
import { useState } from 'react';
import Edit from '../pages/edit/[editID]';

const Home: NextPage = () => {
  const [edit, setEdit] = useState<faqEdit>();
  console.log('EDITTTTTTTTTTTTTTTTTTTTTTTTTTT', edit);

  const editHandler = (
    id: string,
    question: string,
    answer: string,
    status: boolean
  ) => {
    setEdit({ id, question, answer, status });
  };

  const editChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: string
  ) => {
    edit && setEdit({ ...edit, [field]: e.target.value });
  };

  const editQuestionHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    edit && setEdit({ ...edit, question: e.target.value });
  };

  const editAnswerHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    edit && setEdit({ ...edit, answer: e.target.value });
  };

  return (
    <div className={styles.container}>
      {edit && (
        <Edit
          edit={edit}
          editChangeHandler={editChangeHandler}
          editQuestionHandler={editQuestionHandler}
          editAnswerHandler={editAnswerHandler}
        />
      )}
      <Lists editHandler={editHandler} edit={edit} />
    </div>
  );
};

export default Home;
