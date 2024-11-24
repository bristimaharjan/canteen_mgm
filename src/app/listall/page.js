"use client";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../util/api';
import { IconButton } from '@mui/material';
import { Delete, Edit, RemoveRedEye } from '@mui/icons-material';
export default function BasicTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers(); // Fetch data
      setUsers(response); // Update state
      console.log(response); // Log the fetched response directly
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  const handledelete = async (id) => {
    const response = await deleteUser(id);
    if(response){
      fetchUsers();
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>

            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <Edit></Edit>
                </IconButton>
                <IconButton onClick={()=> handledelete(row.id)}>
                  <Delete></Delete>
                </IconButton>
                <IconButton>
                  <RemoveRedEye></RemoveRedEye>
                </IconButton>
                <IconButton>
                
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};