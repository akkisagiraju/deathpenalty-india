import { makeStyles } from '@material-ui/core';

export const useViewStyles = makeStyles(() => ({
  overviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',

    '& > *': {
      margin: '18px 0'
    }
  }
}));

export const useTableStyles = makeStyles((theme) => ({
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      marginBottom: '14px'
    }
  },
  table: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderCollapse: 'separate'
  }
}));

export const useChartStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '14px',
    boxSizing: 'border-box',
    '& > *': {
      margin: '8px 0'
    }
  }
}));
