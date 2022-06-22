import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { userDB } from "./usersDB";
import { Button, Grid, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BlockIcon from "@mui/icons-material/Block";

const columns = [
     { id: "0", nom: "Nom" },
     { id: "1", nom: "Prénom" },
     { id: "2", nom: "Adresse email" },
     { id: "3", nom: "Type" },
     { id: "4", nom: "Actions" },
];

export default function Users() {
     const [page, setPage] = React.useState(0);
     const [rowsPerPage, setRowsPerPage] = React.useState(10);

     const handleChangePage = (event, newPage) => {
          setPage(newPage);
     };

     const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
     };

     return (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
               <TableContainer className="table_user">
                    <Table stickyHeader aria-label="sticky table">
                         <TableHead>
                              <TableRow>
                                   {columns.map((column) => (
                                        <TableCell
                                             key={column.id}
                                             align={column.align}
                                             style={{
                                                  minWidth: column.minWidth,
                                             }}
                                        >
                                             {column.nom}
                                        </TableCell>
                                   ))}
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {userDB
                                   .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage,
                                   )
                                   .map((row, key) => {
                                        return (
                                             <TableRow
                                                  hover
                                                  role="checkbox"
                                                  tabIndex={-1}
                                                  key={key}
                                             >
                                                  <TableCell align="left">
                                                       {row.nom}
                                                  </TableCell>
                                                  <TableCell align="left">
                                                       {row.prenom}
                                                  </TableCell>
                                                  <TableCell align="left">
                                                       {row.email}
                                                  </TableCell>
                                                  <TableCell align="left">
                                                       {row.type}
                                                  </TableCell>
                                                  <TableCell align="left">
                                                       <div>
                                                            <Grid
                                                                 container
                                                                 direction="row"
                                                                 justifyContent="space-around"
                                                                 alignItems="center"
                                                                 spacing={2}
                                                            >
                                                                 <Grid item>
                                                                      <IconButton
                                                                           aria-label="supprimer"
                                                                           color="primary"
                                                                      >
                                                                           <DeleteOutlineIcon />
                                                                      </IconButton>
                                                                 </Grid>
                                                                 <Grid item>
                                                                      <IconButton
                                                                           aria-label="bloquer"
                                                                           color="secondary"
                                                                      >
                                                                           <BlockIcon />
                                                                      </IconButton>
                                                                 </Grid>
                                                            </Grid>
                                                       </div>
                                                  </TableCell>
                                             </TableRow>
                                        );
                                   })}
                         </TableBody>
                    </Table>
               </TableContainer>
               <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={userDB.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
               />
          </Paper>
     );
}
