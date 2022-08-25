import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { DELETE_QUESTION, GET_CHARACTERS } from '../graphql/queries';
import { faqlist } from '../interface/interface';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import Link from 'next/link';

function Lists() {
  console.log('HEREEEEEE');
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [deleteFAQ] = useMutation(DELETE_QUESTION);
  const [faq, setFaq] = useState<Array<faqlist>>([]);
  // if (loading) return 'Loading';

  // if (error) return 'error';

  console.log(faq);

  console.log('DATAAAAAAAAAAA', data?.sys_faq);

  const handleDelete = (id: string) => {
    // alert('Deleted');
    deleteFAQ({
      variables: {
        id: id,
        // _eq1: id,
      },
    });
  };
  return (
    <div>
      <div>
        <Link href="/add">
          <button className="add-btn">Add button</button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Questions</TableCell>
              <TableCell>Answers</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.sys_faq.map((row: any) => (
              <TableRow
                key={row.answer}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.question}</TableCell>
                <TableCell>{row.answer}</TableCell>
                <TableCell>
                  <Toggle
                    id={row.id}
                    aria-label="No label tag"
                    defaultChecked={row.status}
                    // onChange={() => changeStatus(row.id, row.status)}
                  />
                </TableCell>
                <TableCell>
                  <Link href={`/edit/${row.id}`}>
                    <button
                      className="edit-btn"
                      //   onClick={() => {
                      //     editHandler(row.id, row.question, row.answer);
                      //   }}
                    >
                      Edit
                    </button>{' '}
                  </Link>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="del-btn"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Lists;
