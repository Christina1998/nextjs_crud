import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { UPDATE_QUESTION } from '../../graphql/queries';
import { faqEdit } from '../../interface/interface';
import { Button, FormGroup, Input } from '@mui/material';
import { Label } from 'reactstrap';
import Router from 'next/router';

interface iProps {
  edit: undefined | faqEdit;
  editChangeHandler: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: string
  ) => void;
  editQuestionHandler: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  editAnswerHandler: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;

  // loading: boolean | undefined | string;
}

function index({
  edit,
  editChangeHandler,
  editQuestionHandler,
  editAnswerHandler,
}: iProps) {
  console.log('Edittttt', edit);
  // //   console.log('EditID', edit.id);
  // //   console.log('EditQuestion', edit.question);
  // //   console.log('EditAnswer', edit.answer);
  const [editFAQ] = useMutation(UPDATE_QUESTION);
  console.log(typeof editChangeHandler);

  const handleSubmit = () => {
    editFAQ({
      variables: {
        id: edit?.id,
        question: edit?.question,
        answer: edit?.answer,
      },
    });
    Router.reload();
    // history.push('/');
  };

  // const { data, error, loading } = useParticularCharacter(id);
  // if (error) return <div> Something went wrong</div>;
  // if (loading) return <div> loading</div>;
  // console.log({ error, loading, data });
  return (
    <div className="particular">
      <h1 style={{ textAlign: 'center' }}>Edit Questions</h1>
      <form className="form">
        {/* <label>Enter Question</label> */}
        <div className="label-question" style={{ marginBottom: '10' }}>
          <TextField
            id="outlined-basic"
            label="Enter Question"
            value={edit?.question}
            style={{ marginBottom: 30, width: 450 }}
            onChange={(e) => editChangeHandler(e, 'question')}
            variant="outlined"
          />

          {/* <input
            value={edit?.question}
            onChange={(e) => editChangeHandler(e, 'question')}
          /> */}
        </div>
        {/* <label>Enter Answer</label> */}
        <div className="label-question">
          {/* <input value={edit.answer} onChange={editAnswerHandler} /> */}
          <TextField
            id="outlined-basic"
            label="Enter Answer"
            value={edit?.answer}
            style={{ marginBottom: 30, width: 450 }}
            onChange={(e) => editChangeHandler(e, 'answer')}
            variant="outlined"
          />
        </div>
        <Button variant="contained" onClick={handleSubmit} className="add-btn">
          Update
        </Button>
      </form>
    </div>
  );
}

export default index;
