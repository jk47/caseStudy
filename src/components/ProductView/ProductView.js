import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Slider from 'nuka-carousel';


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
    marginTop: 70,
  },
  title: {
    textAlign: 'center',
    fontSize: '1em'
  }

});

function ProductView(props) {
  const classes = props.classes;

  return (
    <div className={classes.style}>
      <p type="headline" className={classes.title}>
        {props.title}
      </p>

      <Slider  className={classes.slider}
      decorators={Slider.getDefaultProps().decorators.slice(0, 2)}>
        <img src={props.primaryImage} alt=" ninja blender" key="123" className={classes.image} />
      {props.alternateImages.map(function(imgSrc, index) {
          // not sure how to render with strong
          return <img src={imgSrc.image} alt="ninja blender" key={index} className={classes.image} />;
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
