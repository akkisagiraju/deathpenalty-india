import React from 'react';
import { Container, Grid, Card, Typography } from '@material-ui/core';
import OverviewCard from '../components/OverviewCard';
import GeoMap from '../components/GeoMap';
import { DataContext } from '../context/Context';
import BarChart from '../components/BarChart';
import InfoText from '../components/InfoText';
import { useViewStyles } from '../styles/styles';
import { getFrequency } from '../utils/helper';

const Overview = () => {
  const { statsPtoDeath: stats, pToDeath: data } = React.useContext(DataContext);
  const classes = useViewStyles();

  const totalNumberOnDeathRow = () => {
    const total = stats.find((data) => data['State '] === 'TOTAL');
    return total?.['Number of persons currently on death row'];
  };

  const totalSentencedIn2019 = () => {
    const total = stats.find((data) => data['State '] === 'TOTAL');
    return total?.['Persons sentenced to death in 2019'];
  };

  const freqencyOfOffences = getFrequency('Nature of Offence', data);

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <Container className={classes.overviewContainer}>
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item lg={6} md={12}>
            <OverviewCard text="Total number of people on death row (end of 2019)" total={totalNumberOnDeathRow()} />
          </Grid>
          <Grid item lg={6} md={12}>
            <OverviewCard text="Number of people sentenced to death in 2019" total={totalSentencedIn2019()} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="sm">
        <Card>
          <BarChart
            title="Sexual offences top the list of nature of offences responsible for death sentences in 2019"
            data={freqencyOfOffences}
            label="Number of people charged"
          />
          <InfoText text="About 55% of the sentences were given for committing sexual offences." />
        </Card>
      </Container>
      <Container maxWidth="sm">
        <Card>
          <Typography style={{ textAlign: 'center', marginTop: 22 }}>
            State level distribution of people on death row
          </Typography>
          <GeoMap stats={stats} />
        </Card>
      </Container>
    </Container>
  );
};

export default Overview;
