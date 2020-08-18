import { TableCell, withStyles } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  }
}))(TableCell);

export default StyledTableCell;
