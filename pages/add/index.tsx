import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { ADD_NEW_QUESTION } from '../../graphql/queries';
import Router, { useRouter } from 'next/router';

const GET_CHARACTERS = gql`
  query FAQ {
    sys_faq {
      id
      question
      answer
      status
    }
  }
`;

function AddForm() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [addFAQ] = useMutation(ADD_NEW_QUESTION);
  const router = useRouter();

  console.log(question);

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    addFAQ({
      variables: {
        question: question,
        answer: answer,
      },
    });
  };

  const Comp = () => {
    //...
    useEffect(() => {
      const { pathname } = Router;
      if (pathname === '/add') {
        Router.replace('/');
      }
    });
    //...
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setConfirm(true);
  //   // console.log(name);
  // };

  // if (confirm) {
  //   return (
  //     <Navigate
  //       to={{
  //         pathname: '/',
  //       }}
  //     />
  //   );
  // }

  return (
    <div className="card">
      <h1 style={{ textAlign: 'center' }}>Add Questions</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addFAQ({
            variables: {
              question: question,
              answer: answer,
            },
          });
        }}
      >
        <label className="label-question">
          {/* Enter question: */}
          {/* <input
            id="question"
            onChange={(e) => setQuestion(e.target.value)}
            name="Question"
          ></input> */}
          <TextField
            id="outlined-basic"
            label="Enter Question"
            style={{ marginBottom: 30, width: 450 }}
            onChange={(e) => setQuestion(e.target.value)}
            variant="outlined"
          />
        </label>
        <label className="label-question">
          {/* Enter answer: */}
          {/* <input
            id="answer"
            onChange={(e) => setAnswer(e.target.value)}
          ></input> */}
          <TextField
            id="outlined-basic"
            label="Enter Answer"
            style={{ marginBottom: 30, width: 450 }}
            onChange={(e) => setAnswer(e.target.value)}
            variant="outlined"
          />
        </label>
        <button type="submit" className="add-btn" onClick={() => router.back()}>
          {' '}
          <span onClick={() => router.reload()}>Add</span>
        </button>
      </form>
    </div>
  );
}

export default AddForm;
