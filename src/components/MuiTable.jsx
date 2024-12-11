import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("UCB", 159),
  createData("City Bank Ltd.", 237),
  createData("EBL Bank", 262),
  createData("Dutch Bangla Bank Ltd.", 305),
];

export default function MuiTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: "15px" }}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories} TK</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
