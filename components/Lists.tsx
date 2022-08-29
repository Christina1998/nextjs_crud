import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import {
  DELETE_QUESTION,
  GET_CHARACTERS,
  UPDATE_STATUS,
} from '../graphql/queries';
import { faqEdit, faqlist } from '../interface/interface';
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
import { Box, Button, Modal } from '@mui/material';
import Router, { useRouter } from 'next/router';

interface iProps {
  editHandler: (
    id: string,
    question: string,
    answer: string,
    status: boolean
  ) => void;
  edit: undefined | faqEdit;
}

function Lists({ editHandler }: iProps) {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [deleteFAQ] = useMutation(DELETE_QUESTION);
  const [updateStatus] = useMutation(UPDATE_STATUS);

  const [faq, setFaq] = useState<Array<faqlist>>([]);
  const [open, setOpen] = React.useState(false);
  console.log(editHandler);

  const handleDelete = (id: string) => {
    // alert('Deleted');
    deleteFAQ({
      variables: {
        id: id,
        // _eq1: id,
      },
    });
    setOpen(false);
    Router.reload();
  };

  const changeStatus = (id: string, defaultStatus: boolean) => {
    var status = defaultStatus ? false : true;
    updateStatus({
      variables: {
        id: id,
        status: status,
      },
    });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 10,
    color: 'black',
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Link href="/add">
          <Button variant="outlined" className="add-btn">
            Add button
          </Button>
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
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.question}</TableCell>
                <TableCell>{row.answer}</TableCell>
                <TableCell>
                  <Toggle
                    id={row.id}
                    aria-label="No label tag"
                    defaultChecked={row.status}
                    onChange={() => changeStatus(row.id, row.status)}
                  />
                </TableCell>
                <TableCell>
                  {/* <Link href={'/edit/' + row.id} key={row.id}> */}
                  {/* <a> */}
                  <Button
                    className="edit-btn"
                    variant="contained"
                    onClick={() => {
                      editHandler(row.id, row.question, row.answer, row.status);
                    }}
                  >
                    Edit
                  </Button>{' '}
                  {/* </a> */}
                  {/* </Link> */}
                  <Button
                    variant="contained"
                    className="del-btn"
                    onClick={handleOpen}
                  >
                    Delete
                  </Button>
                  {/* <button
                    onClick={() => handleDelete(row.id)}
                    className="del-btn"
                  >
                    Delete
                  </button> */}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                  >
                    <Box sx={{ ...style, width: 400 }}>
                      <h2 id="parent-modal-title">Delete confirmation</h2>
                      <p id="parent-modal-description">
                        Are you sure you want to delete?
                      </p>
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="del-btn"
                      >
                        <span onClick={handleClose}>Yes</span>
                      </button>
                      <button className="cancel-btn">
                        <span onClick={handleClose}>No</span>
                      </button>
                    </Box>
                  </Modal>
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
