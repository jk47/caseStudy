import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import Moment from 'react-moment';
import Divider from 'material-ui/Divider';
import Star from 'material-ui-icons/Star';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  card: {
    width: '60%',
    minWidth: 175,
    maxWidth: 275,
    backgroundColor: grey[200],
    margin: 20,
    marginleft:0,
    marginRight:0,
    display: 'inline-block',
    textAlign: 'left',
    verticalAlign: 'top',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: -16,
    fontSize: 20,
  },
  subtitle: {
    marginBottom: 0,
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginTop: 6,
    marginBottom: 6,
    color: theme.palette.text.secondary,
  },
  cardDiv: {
    textAlign: 'center',
    marginTop:-40,
  },
  button: {
    margin: theme.spacing.unit,
  },
  stars: {
    width: '60%',
    minWidth: 175,
    maxWidth: 275,
    display: 'inline-block',
    color: 'black',
    textAlign: 'left',

  },
  reviews: {
    width: '60%',
    minWidth: 175,
    maxWidth: 275,
    display: 'inline-block',
    color: 'black',
    textAlign: 'right'
  },
  red: {
    color:'red'
  },
  redSmall: {
    color:'red',
  }
});

function SimpleCard(props) {
  const classes = props.classes;


  return (
    <div className={classes.cardDiv}>
      <div>

        <div className={classes.stars}>
          <Star className={classes.red}/><Star className={classes.red}/><Star className={classes.red}/>
          <Star className={classes.red}/><Star className={classes.red}/>  overall
        </div>
        <div className={classes.reviews}>
          view all 14 reviews
        </div>
      </div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h1" className={classes.title}>
            {props.proTitle}
          </Typography>
          <Typography type="headline" component="h1" className={classes.subtitle}>
            {props.proDescription}
          </Typography>
           <Divider />
           <Star className={classes.redSmall}/><Star className={classes.redSmall}/><Star className={classes.redSmall}/>
           <Star className={classes.redSmall}/><Star className={classes.redSmall}/>
          <Typography type="body1" className={classes.pos}>
            {props.proReviewHeader}
          </Typography>
          <Typography component="p">
            {props.proReviewBody}
          </Typography>
          <br />
          <Typography type="caption" gutterBottom>
            <a href='#'>{props.proScreenName}</a>&nbsp;
            <Moment format="MMMM DD, YYYY">{props.proDate}</Moment>
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h1" className={classes.title}>
            {props.conTitle}
          </Typography>
          <Typography type="headline" component="h1" className={classes.subtitle}>
            {props.conDescription}
          </Typography>
           <Divider />
           <Star className={classes.redSmall}/><StarBorder /><StarBorder />
           <StarBorder /><StarBorder />
          <Typography type="body1" className={classes.pos}>
            {props.conReviewHeader}
          </Typography>
          <Typography component="p">
            {props.conReviewBody}
          </Typography>
          <br />
          <Typography type="caption" gutterBottom >
            <a href="#">{props.conScreenName}</a>&nbsp;
            <Moment format="MMMM DD, YYYY">{props.conDate}</Moment>
          </Typography>
        </CardContent>
      </Card>
    </div>

  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
