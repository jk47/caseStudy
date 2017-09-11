import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Slider from 'nuka-carousel';

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
    marginBottom: 80,
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
      dots: false,
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

      <Slider {...settings} className={classes.slider}
      decorators={Slider.getDefaultProps().decorators.slice(0, 2)}>
        <img src={props.primaryImage} alt=" ninja blender" className={classes.image} />
      {props.alternateImages.map(function(imgSrc, index) {
          // not sure how to render with strong
          return <img src={imgSrc.image} alt="ninja blender" className={classes.image} />;
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
