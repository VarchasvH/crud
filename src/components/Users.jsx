import axios from "axios";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, useTheme } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  });

  return (
    <>
      {loading ? (
        <svg
          className='animate-spin h-16 w-16'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      ) : (
        <Box sx={{ overflowX: "auto", width: "100%" }}>
          <Typography
            sx={{
              fontSize: {
                lg: 45,
                md: 45,
                sm: 45,
                xs: 45,
              },
              marginBottom: theme.spacing(4), // Responsive spacing
              "@media (max-width: 600px)": {
                marginBottom: theme.spacing(2), // Smaller spacing on smaller screens
              },
            }}
          >
            Our Esteemed users
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "25px" }}>User</TableCell>
                  <TableCell sx={{ fontSize: "25px" }} align='center'>
                    Username
                  </TableCell>
                  <TableCell sx={{ fontSize: "25px" }} align='center'>
                    Mail
                  </TableCell>
                  <TableCell sx={{ fontSize: "25px" }} align='center'>
                    Phone
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {user.name}
                    </TableCell>
                    <TableCell align='center'>{user.username}</TableCell>
                    <TableCell align='center'>{user.email}</TableCell>
                    <TableCell align='center'>{user.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default Users;
