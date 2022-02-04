
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OverviewPage from '../overview/Overview';
import RepositoriesPage from '../repository/Repositories';
import style from './style';
import Overview from '@mui/icons-material/MenuBook';
import Repositories from '@mui/icons-material/BookOutlined';
import Projects from '@mui/icons-material/AssessmentOutlined';


export default function Tabs(props) {
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
            <Overview style={style.icons}/>
            <Tab label="Overview" value="1" />
            <Repositories style={style.icons}/>
            <Tab label="Repositories" value="2" />
            <Projects style={style.icons}/>
            <Tab label="Projects" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <OverviewPage/>
        </TabPanel>
        <TabPanel value="2">
            <RepositoriesPage repoUrl={repoUrl}/> 
            </TabPanel>
        <TabPanel value="3">
            currently no projects
            </TabPanel>
      </TabContext>
    </Box>
  );
}
