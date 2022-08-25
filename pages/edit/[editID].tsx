// import { gql, useMutation } from '@apollo/client';
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import { UPDATE_QUESTION } from '../../graphql/queries';
// import { faqEdit } from '../../interface/interface';

// interface iProps {
//     edit: undefined | faqEdit;
//     deleteHandler: (id: string) => void;
//     editQuestionHandler: (
//         e: React.ChangeEvent<HTMLInputElement>,
//         field: string
//       ) => void;
//       editAnswerHandler: (
//         e: React.ChangeEvent<HTMLInputElement>,
//         field: string
//       ) => void;

//     loading: boolean | undefined | string;
//   }

// function EditList({ edit, editQuestionHandler, editAnswerHandler }:iProps) {
//   console.log('Edit', edit);
// //   console.log('EditID', edit.id);
// //   console.log('EditQuestion', edit.question);
// //   console.log('EditAnswer', edit.answer);

//   let history = useHistory();

//   const [editFAQ] = useMutation(UPDATE_QUESTION);

//   const handleSubmit = () => {
//     editFAQ({
//       variables: {
//         id: edit.id,
//         question: edit.question,
//         answer: edit.answer,
//       },
//     });
//     history.push('/');
//   };
//   // const { data, error, loading } = useParticularCharacter(id);
//   // if (error) return <div> Something went wrong</div>;
//   // if (loading) return <div> loading</div>;
//   // console.log({ error, loading, data });
//   return (
//     <div className="particular">
//       <h1 style={{ textAlign: 'center' }}>Edit Questions</h1>
//       <form className="form">
//         {/* <label>Enter Question</label> */}
//         <div className="label-question">
//           <TextField
//             id="outlined-basic"
//             label="Enter Question"
//             value={edit.question}
//             onChange={editQuestionHandler}
//             variant="outlined"
//           />
//           {/* <input value={edit.question} onChange={editQuestionHandler} /> */}
//         </div>
//         {/* <label>Enter Answer</label> */}
//         <div className="label-question">
//           {/* <input value={edit.answer} onChange={editAnswerHandler} /> */}
//           <TextField
//             id="outlined-basic"
//             label="Enter Question"
//             value={edit.answer}
//             onChange={editAnswerHandler}
//             variant="outlined"
//           />
//         </div>
//         <button onClick={handleSubmit} className="add-btn">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditList;
import React from 'react';

function index() {
  return <div>index</div>;
}

export default index;
