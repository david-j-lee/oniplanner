import React, { FC, memo, useRef } from 'react';

// material
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import IPlant from './../../interfaces/IPlant';

// components
import ResourceChips from '../resources/ResourceChips';

interface IProps {
  plant: IPlant;
}

export const PlantDetails: FC<IProps> = memo(({ plant }) => {
  const classes = useStyles();

  const imgUrl = useRef(
    `/images/bio/${plant.name.toLowerCase().split(' ').join('-')}.png`,
  );

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <div
          className={classes.image}
          style={{
            background: `#3E4357 url(${imgUrl.current}) no-repeat center center`,
            backgroundSize: 'contain',
          }}
        />
        <div className={classes.headingContent}>
          <Typography variant="h6">{plant.name}</Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" className={classes.title}>
                <small>Growth Rate</small>
                <br />
                {plant.growthRate.value} {plant.growthRate.rate}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" className={classes.title}>
                <small>Yield</small>
                <br />
                {plant.yield}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.content}>
        <Typography variant="subtitle1" className={classes.title}>
          Inputs
        </Typography>
        <ResourceChips ios={plant.inputs} />
      </div>
    </div>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  heading: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  headingContent: {
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingBottom: 0,
    width: 500 - 160,
    flexGrow: 1,
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(),
  },
  content: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  avatar: {
    height: '100%',
    width: '100%',
    backgroundSize: 'contain',
  },
}));

export default PlantDetails;
