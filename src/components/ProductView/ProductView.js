import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'black'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'black'}}
      onClick={onClick}
    ></div>
  );
}

const styles = theme => ({
  style: {
    width: '100%',
    maxWidth: 500,
    margin: 'auto',
    display: 'block'
  },
  image: {
    display:'block',
    margin:'auto'
  },

});

function ProductView(props) {
  const classes = props.classes;
  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

  return (
    <div className={classes.style}>
      <Typography type="headline" gutterBottom align="center">
        {props.title}
      </Typography>

      <Slider {...settings}>
        <div><img src={props.primaryImage} alt=" ninja blender" className={classes.image} /></div>
      {props.alternateImages.map(function(imgSrc) {
          // not sure how to render with strong
          return <div><img src={imgSrc.image} alt="ninja blender" className={classes.image} /></div>;
        })
      }
      </Slider>
    </div>
  );
}

ProductView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductView);
