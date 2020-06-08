import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';

const color = "linear-gradient(#bbdefb,#fafafa)";
export const AltTabs = withStyles({
    root: {
        borderRadius: "5px",
        backgroundImage: color
    },
    indicator: {
        backgroundColor: '#fafafa'
    }

})(Tabs);
export const AltTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 350,
        minHeight: 400,
        opacity: 0.8,
        marginRight: theme.spacing(6),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            opacity: 1,
        }
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);