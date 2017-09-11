import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Star from 'material-ui-icons/Star';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  redSmall: {
    color: 'red',
  },
  display: {
    display: 'inline-block',
  }

});

function StarsRating(props) {
  const classes = props.classes;
  let plusStarsCount = props.overallRating;
  let plusStars = [];
  let minusStars = [];
  for (var i = 0; i<plusStarsCount; i++) {
     plusStars.push(<Star className={classes.redSmall}/>);
  }
  for (i = 0; i<5-plusStarsCount; i++) {
     minusStars.push(<StarBorder />);
  }

  return (
    <div className={classes.display}>
      {plusStars}{minusStars}
    </div>

  );
}

StarsRating.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StarsRating);
