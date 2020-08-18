import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControl,
  NativeSelect,
  FormHelperText,
  Button,
  Card,
  CardContent
} from '@material-ui/core';
import StyledTableCell from '../components/StyledTableCell';
import { useTableStyles, useViewStyles } from '../styles/styles';
import { DataContext } from '../context/Context';
import { getFrequency } from '../utils/helper';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

const HighCourts = () => {
  const { statsMovementsHcSc: stats, movementsFromHCtoSC: fullData } = React.useContext(DataContext);

  const [activeState, setActiveState] = React.useState('');
  const [activeStateData, setActiveStateData] = React.useState([]);

  const classes = useTableStyles();
  const styles = useViewStyles();

  const rows = stats.map((d, i) => (
    <TableRow key={i}>
      <TableCell>{d['Action']}</TableCell>
      <TableCell>{d['Number of Persons in HC']}</TableCell>
      <TableCell>{d['Number of Cases in HC']}</TableCell>
    </TableRow>
  ));

  const highCourtJudgementsData = fullData.filter((data) => data['Court (Bench)'].indexOf('High Court') > -1);

  const frequencyOfStates = getFrequency('State', highCourtJudgementsData);

  const stateOptions = Object.keys(frequencyOfStates)
    .sort()
    .map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ));

  const handleStateSelection = () => {
    setActiveStateData(highCourtJudgementsData.filter((data) => data['State'] === activeState));
  };

  return (
    <Container className={styles.overviewContainer}>
      <Container maxWidth="md" className={classes.tableContainer}>
        <Typography style={{ textAlign: 'center' }}>All High Courts' Statistics - 2019</Typography>
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
      <Container maxWidth="sm" className={classes.tableContainer} style={{ padding: 0 }}>
        <form style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
          <FormControl>
            {/* <InputLabel htmlFor="state-picker">Select a state</InputLabel> */}
            <NativeSelect
              value={activeState}
              style={{ padding: 4, width: '90%' }}
              placeholder="State"
              onChange={(e) => setActiveState(e.target.value)}
              inputProps={{
                name: 'state',
                id: 'state-picker'
              }}
            >
              <option value="--">Choose a state</option>
              {stateOptions}
            </NativeSelect>
            <FormHelperText>*Only states that have data</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleStateSelection}>
            Select
          </Button>
        </form>
        {activeStateData.length ? (
          <>
            <Card style={{ width: '100%' }}>
              <CardContent>
                <BarChart mini title="Nature of offences" data={getFrequency('Nature of Offence', activeStateData)} />
              </CardContent>
            </Card>
            <Card style={{ width: '100%' }}>
              <CardContent>
                <PieChart mini title="High Court's action" data={getFrequency('Action', activeStateData)} />
              </CardContent>
            </Card>
          </>
        ) : null}
      </Container>
    </Container>
  );
};

export default HighCourts;
