
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OverviewPage from '../overview/Overview';
import RepositoriesPage from '../repository/Repositories';
import {overview, repo, projects } from '../../assets/index';
import style from './style';
import mockData from '../Data.json';


export default function LabTabs(props) {
  const [value, setValue] = React.useState('1');
  const repoUrl = props.data;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label=" Tab bar" centered>
            <img src={overview} style={style.icons}></img>
            <Tab label="Overview" value="1" />
            <img src={repo} style={style.icons}></img>
            <Tab label="Repositories" value="2" />
            <img src={projects} style={style.icons}></img>
            <Tab label="Projects" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <OverviewPage/>
        </TabPanel>
        <TabPanel value="2">
            <RepositoriesPage repoUrl={repoUrl}/>  {/*  data={mockData}  */}
            </TabPanel>
        <TabPanel value="3">
            project
            </TabPanel>
      </TabContext>
    </Box>
  );
}
