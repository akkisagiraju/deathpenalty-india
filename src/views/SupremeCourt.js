import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Card,
  CircularProgress
} from '@material-ui/core';
import StyledTableCell from '../components/StyledTableCell';
import { useTableStyles, useViewStyles } from '../styles/styles';
import { DataContext } from '../context/Context';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import InfoText from '../components/InfoText';
import { getFrequency } from '../utils/helper';

const actions = ['Commuted', 'Acquitted', 'Remitted', 'Confirmed'];

const SupremeCourt = () => {
  const { statsMovementsHcSc: stats, movementsFromHCtoSC: fullData } = React.useContext(DataContext);
  const classes = useTableStyles();
  const styles = useViewStyles();

  if (!fullData.length) {
    return <CircularProgress />;
  }

  const filterDataByAction = (action) => {
    return fullData.filter((data) => data['Court (Bench)'] === 'Supreme Court' && data['Action'] === action);
  };

  const frequencyOfStates = getFrequency(
    'State',
    fullData.filter((data) => data['Court (Bench)'] === 'Supreme Court')
  );

  const rows = stats.map((d, i) => (
    <TableRow key={i}>
      <TableCell>{d['Action']}</TableCell>
      <TableCell>{d['Number of Persons in SC']}</TableCell>
      <TableCell>{d['Number of Cases in SC']}</TableCell>
    </TableRow>
  ));

  return (
    <Container className={styles.overviewContainer}>
      <Container maxWidth="md" className={classes.tableContainer}>
        <Typography style={{ textAlign: 'center' }}>Supreme Court's Statistics - 2019</Typography>
        <Table size="small" className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Action</StyledTableCell>
              <StyledTableCell>Number of Persons</StyledTableCell>
              <StyledTableCell>Number of Cases</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </Container>
      <Container maxWidth="md">
        <Card>
          <BarChart
            title="Maharashtra and Madhya Pradesh dominate Supreme Court"
            data={frequencyOfStates}
            label="Number of people charged"
          />
          <InfoText text="MH and MP account for 63% of the total convicted who moved Supreme Court in 2019" />
        </Card>
      </Container>
      <Container maxWidth="md" className={classes.tableContainer}>
        <Card>
          <Typography style={{ textAlign: 'center', marginTop: '14px' }}>
            Supreme Court's Action vs Nature of Offence
          </Typography>
          <Grid container spacing={2} style={{ width: '100%' }}>
            {actions.map((action) => (
              <Grid key={action} item lg={6} md={6} sm={6} xs={12}>
                <PieChart title={action} data={getFrequency('Nature of Offence', filterDataByAction(action))} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Container>
  );
};

export default SupremeCourt;
