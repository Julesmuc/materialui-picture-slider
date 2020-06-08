import React from 'react';
import PictureSlider from './components/PictureSlider'
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  Grid
} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: "flex",
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: theme.spacing(2, 0, 2),
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div>
          <Container maxWidth="xl">
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <PictureSlider />
                </Grid>
              </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
