import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (

    <div
      className={className}
      style={{...style, display: 'block', background: 'grey'}}
      onClick={onClick}
    > </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'grey'}}
      onClick={onClick}
    ></div>
  );
}

const styles = theme => ({
  style: {
    width: '90%',
    maxWidth: 400,
    margin: 'auto',
    display: 'block'
  },
  image: {
    display:'block',
    margin:'auto',
    marginBottom: 40,
    width: '90%'
  },
  slider: {
    width: '90%',
  },
  title: {
    textAlign: 'center',
    fontSize: '1em'
  }

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
      <p type="headline" className={classes.title}>
        {props.title}
      </p>

      <Slider {...settings} className={classes.slider}>
        <div key="uniqueKey"><img src={props.primaryImage} alt=" ninja blender" className={classes.image} /></div>
      {props.alternateImages.map(function(imgSrc, index) {
          // not sure how to render with strong
          return <div key={index}><img src={imgSrc.image} alt="ninja blender" className={classes.image} /></div>;
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
