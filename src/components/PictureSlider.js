import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { AltTab, AltTabs } from "./customTabs";
import Card from './CustomCard'
import tabs from './tabContent'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    }
}));




export default function PictureSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Box m={2} display="flex" justifyContent="center">
                <AltTabs variant="scrollable"
                    scrollButtons="auto" value={value} onChange={handleChange} aria-label="styled tabs example">
                    {tabs.map((imageObj,i) => {
                        return <AltTab key={i} label={<Card picture={imageObj.image} pictureAlt={imageObj.alt} pictureTitle={imageObj.title} pictureText={imageObj.text}/>} />
                    })}
                </AltTabs>
            </Box>
        </div>
    )
};

