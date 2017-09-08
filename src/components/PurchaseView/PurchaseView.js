import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Label from 'material-ui-icons/Label';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { red } from 'material-ui/colors';
import Input from 'material-ui/Input/Input';

const redColor = red[500];
const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
    marginBottom: -8,
    color: redColor,
  },
  textColor: {
    color: redColor,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  highlights: {
    marginTop: 30,
    marginBottom: 15
  },
  margin: {
    marginTop: 15,
    marginBottom: 15
  }


});

function PurchaseView(props) {
  const classes = props.classes;
  const showAddToCart = props.purchasingChannelCode === "0" || props.purchasingChannelCode === "1";
  const showPickUpInStore = props.purchasingChannelCode === "0" || props.purchasingChannelCode === "2";;

  return (
    <div>
      <Typography type="title" className={classes.title}>
        {props.price}
        <Typography type="caption" >Online Price</Typography>
      </Typography>
      <Typography className={classes.textColor} type="subheading" gutterBottom>
        <Label className={classes.icon} />   {props.promo1}
      </Typography>
      <Typography className={classes.textColor} type="subheading" gutterBottom>
        <Label className={classes.icon} />   {props.promo2}
      </Typography>
      <div className={classes.container}>
        <Input
          placeholder="Enter Quantity"
          className={classes.input}
          inputProps={{
            'aria-label': 'Quantity',
          }}
          />
      </div>
      <div className={classes.margin }>
        {(() => {
                if (showPickUpInStore){
                  return (
                  <Button raised className={classes.button}  >
                    PICK UP IN STORE
                  </Button>);
                }
          })
        ()}
        {(() => {
                  if (showAddToCart){
                    return (
                    <Button raised className={classes.button}  >
                      ADD TO CART
                    </Button>);
                  }
            })
        ()}
      </div>
      <Typography type="subheading" className={classes.title}>
        returns
      </Typography>
      <div className={classes.margin}>
        <Button raised  className={classes.button}>
          ADD TO REGISTRY
        </Button>
        <Button raised  className={classes.button}  >
          ADD TO LIST
        </Button>
        <Button raised  className={classes.button} >
          SHARE
        </Button>
      </div>
      <Typography type="title" className={classes.title} className={classes.highlights}>
        product highlights
      </Typography>
      <div>
      {props.highlights.map(function(highlight, index) {
          // not sure how to render with strong
          return <li key={index}>{highlight.replace("<strong>", "").replace("</strong>", "")}</li>;
        })
      }
      </div>
    </div>
  );
}

PurchaseView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PurchaseView);
