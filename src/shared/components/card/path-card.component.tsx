import React, {useState} from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {selectFlightPlan} from '../../../core/actions/selected-flight-plan.actions';
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



export default function PathCard(props: {flightPath: IFlightPlan, setSelectedPath: Function, selectedPath: any}) {
  
  const { flightPath, setSelectedPath, selectedPath } = props;
  const [selection, setSelection] = useState(0);
  const classes = useStyles();
  
  const selectPath = (event:any) => {
    flightPath === selectedPath ? setSelectedPath(undefined) :
    setSelectedPath(flightPath) 
  }


  return (

    <Card className='card' onClick={selectPath} >
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
