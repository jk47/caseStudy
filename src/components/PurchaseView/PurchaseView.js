import React from 'react';
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
  pickUpInStore: {
    margin: theme.spacing.unit,
    width: '40%',
    maxWidth: 225,
    background: 'black',
    color: 'white',
  },
  addToCart: {
    margin: theme.spacing.unit,
    width: '40%',
    maxWidth: 225,
    background: 'red',
    color: 'white'
  },
  secondaryButton: {
    margin: theme.spacing.unit,
    width: '25%',
    maxWidth: 150
  },
  highlights: {
    marginTop: 30,
    marginBottom: 15
  },
  margin: {
    marginTop: 15,
    marginBottom: 15
  },
  returnPolicy: {
    borderLeft: '1px solid gray',
    fontSize: '12px',
    maxWidth: '50%',
    display: 'inline-block',
    paddingLeft: 10
  },
  return: {
    display: 'inline-block',
    paddingRight:10,
    verticalAlign: 'middle'
  },

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
          type = "number"
          placeholder="Quantity"
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
                  <Button raised className={classes.pickUpInStore}  >
                    PICK UP IN STORE
                  </Button>);
                }
          })
        ()}
        {(() => {
                  if (showAddToCart){
                    return (
                    <Button raised className={classes.addToCart}  >
                      ADD TO CART
                    </Button>);
                  }
            })
        ()}
      </div>
      <div>
        <h5 className={classes.return}>returns</h5>
        <p className={classes.returnPolicy}>This item must be returned within
        30 days of the ship date. See return policy for details. Prices, promotions,
        styles and availability may vary by store and online.</p>
      </div>
      <div className={classes.margin}>
        <Button raised  className={classes.secondaryButton}>
          ADD TO REGISTRY
        </Button>
        <Button raised  className={classes.secondaryButton}  >
          ADD TO LIST
        </Button>
        <Button raised  className={classes.secondaryButton} >
          SHARE
        </Button>
      </div>
      <Typography type="title" className={classes.title} >
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
