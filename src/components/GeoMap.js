import React from 'react';
import { Container, CircularProgress, makeStyles } from '@material-ui/core';
import { select, geoPath, geoMercator, min, max, scaleLinear } from 'd3';
import { getColor, getNumber } from '../utils/helper';
import { DataContext } from '../context/Context';

const useStyles = makeStyles(() => ({
  geoMapContainer: {
    padding: 0,
    margin: '14px 0',
    '& .state:hover': {
      cursor: 'pointer',
      stroke: '#1e181e',
      strokeWidth: '1.5px'
    }
  }
}));

const GeoMap = ({ stats }) => {
  const { map } = React.useContext(DataContext);
  const svgRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const classes = useStyles();

  const onHover = React.useCallback(
    (feature) => {
      const svg = select(svgRef.current);
      const count = getNumber(feature, stats);
      svg.selectAll('text').remove();
      svg
        .append('text')
        .text(`${feature.properties['st_nm']}: ${count}`)
        .attr('x', 30)
        .attr('y', 498)
        .attr('stroke', '#F65940');
    },
    [stats]
  );

  React.useEffect(() => {
    if (!map.features) {
      return;
    }
    const svg = select(svgRef.current);
    const { width, height } = wrapperRef.current?.getBoundingClientRect();
    const projection = geoMercator().fitSize([width, height], map);
    const pathGenerator = geoPath().projection(projection);

    const minValue = min(
      stats.filter((stat) => stat['State '].indexOf('TOTAL') < 0),
      (stat) => parseInt(stat['Number of persons currently on death row'])
    );
    const maxValue = max(
      stats.filter((stat) => stat['State '].indexOf('TOTAL') < 0),
      (stat) => parseInt(stat['Number of persons currently on death row'])
    );
    const colorScale = scaleLinear().domain([minValue, maxValue]).range(['#FFF', '#ae1f23']);

    svg
      .selectAll('.state')
      .data(map.features)
      .join('path')
      .on('mouseover', (feature) => {
        onHover(feature);
      })
      .attr('class', 'state')
      .attr('stroke', '#423643')
      .attr('fill', (feature) => getColor(feature, stats, colorScale))
      .attr('d', (feature) => pathGenerator(feature));
  }, [stats, map, onHover]);

  if (!map.features) {
    return (
      <Container style={{ margin: 28 }} ref={wrapperRef}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container className={classes.geoMapContainer} ref={wrapperRef}>
      <svg ref={svgRef} width="100%" height={500} />
    </Container>
  );
};

export default GeoMap;
