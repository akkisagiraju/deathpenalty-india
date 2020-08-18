import React from 'react';
import { csv, json } from 'd3-fetch';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [statsPtoDeath, setStatsPtoDeath] = React.useState([]);
  const [statsMovementsHcSc, setStatsMovementsHcSc] = React.useState([]);
  const [pToDeath, setPToDeath] = React.useState([]);
  const [movementsFromHCtoSC, setMovementsFromHCtoSC] = React.useState([]);
  const [map, setMap] = React.useState({});

  React.useEffect(() => {
    const getAllData = async () => {
      const tempStatsPtoDeath = await csv(process.env.PUBLIC_URL + '/data/statistics-persons-sentenced-to-death.csv');
      setStatsPtoDeath(tempStatsPtoDeath);
      const tempStatsMovementsHcSc = await csv(process.env.PUBLIC_URL + '/data/statistics-movements-in-hc-and-sc.csv');
      setStatsMovementsHcSc(tempStatsMovementsHcSc);
      const tempPToDeath = await csv(process.env.PUBLIC_URL + '/data/persons-sentenced-to-death.csv');
      setPToDeath(tempPToDeath);
      const tempSetMovementsFromHCtoSC = await csv(process.env.PUBLIC_URL + '/data/movements-in-hc-and-sc.csv');
      setMovementsFromHCtoSC(tempSetMovementsFromHCtoSC);
      const tempMap = await json(process.env.PUBLIC_URL + '/map/states_india.geojson');
      setMap(tempMap);
    };
    getAllData();
  }, []);

  return (
    <DataContext.Provider value={{ statsPtoDeath, statsMovementsHcSc, pToDeath, movementsFromHCtoSC, map }}>
      {children}
    </DataContext.Provider>
  );
};
