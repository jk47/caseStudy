import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import Moment from 'react-moment';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  card: {
    width: '60%',
    minWidth: 175,
    maxWidth: 275,
    backgroundColor: grey[200],
    margin: 20,
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
});

function SimpleCard(props) {
  const classes = props.classes;


  return (
    <div className={classes.cardDiv}>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h1" className={classes.title}>
            {props.proTitle}
          </Typography>
          <Typography type="headline" component="h1" className={classes.subtitle}>
            {props.proDescription}
          </Typography>
           <Divider />
          <Typography type="body1" className={classes.pos}>
            {props.proReviewHeader}
          </Typography>
          <Typography component="p">
            {props.proReviewBody}
          </Typography>
          <Typography type="caption" gutterBottom>
            <Button color="primary" className={classes.button}>
              - {props.proScreenName}
            </Button>
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
          <Typography type="body1" className={classes.pos}>
            {props.conReviewHeader}
          </Typography>
          <Typography component="p">
            {props.conReviewBody}
          </Typography>
          <br />
          <Typography type="caption" gutterBottom >
            <Button color="primary" className={classes.button}>
              - {props.conScreenName}
            </Button>
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
