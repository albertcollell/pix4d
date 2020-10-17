import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './path-card.component.scss'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IFlightPlan } from '../../../core/models/path';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



export default function PathCard(props: {flightPath: IFlightPlan}) {
  const { flightPath } = props
  const classes = useStyles();

  return (
    <Card className='card'>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {flightPath.timeStamp}
        </Typography>
        <Typography variant="h5" component="h2">
          {flightPath.planName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {flightPath.category}
        </Typography>
        <Typography variant="body2" component="p">
          {flightPath.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
