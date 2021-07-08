import './App.css';
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';


import OpenAccordion from './OpenAccordion'





function App() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open with fade transition
      </Button>


      <OpenAccordion
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        expanded={expanded}
        handleChange={handleChange}

      />

    </div>
  );
}

export default App;



