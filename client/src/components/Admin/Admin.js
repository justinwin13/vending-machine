import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row/Row";
import Create from "./Create/Create";
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import useStyles from "./styles";

const Admin = () => {
  const classes = useStyles();
  const sodas = useSelector((state) => state.sodas);

  return (
    <Container className={classes.root}>
      <Typography className={classes.header} variant="h2">
        Sodas
      </Typography>
      <TableContainer className={classes.tableContainer} align="center">
        <Create />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerCell}>Product Name</TableCell>
              <TableCell className={classes.headerCell}>Description</TableCell>
              <TableCell className={classes.headerCell}>Cost</TableCell>
              <TableCell className={classes.headerCell}>Quantity</TableCell>
              <TableCell className={classes.headerCell}>id</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sodas?.map((soda) => (
              <Row key={soda._id} soda={soda} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Admin;
