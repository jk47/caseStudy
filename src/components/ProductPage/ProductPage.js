import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import data from '../../item-data.json';
import Grid from 'material-ui/Grid';
import ProductView from '../ProductView/ProductView';
import PurchaseView from '../PurchaseView/PurchaseView';
import Review from '../Review/Review';


const styles = theme => ({
  grid: {
    margin: 20,
  },
  root: {
    flexGrow: 1,
    marginTop: 30,

  },
});

class ProductPage extends Component{
  constructor(props) {
    super(props);

    this.updateQuantity = this.updateQuantity.bind(this);

    this.state = {
      quantity: 0
    }
  };

  updateQuantity(plusOrMinus) {
    let currentQuantity = this.state.quantity;
    if (plusOrMinus === 'plus'){
      currentQuantity++;
    }
    else {
      if (currentQuantity > 0){
        currentQuantity--;
      }
    }
    this.setState({
      quantity: currentQuantity
    });
    console.log(this.state.quantity);
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
      <Grid container spacing={24} className={classes.grid}>
      <Grid item xs={12} sm={6}>

      <ProductView title={data.CatalogEntryView[0].title}
      primaryImage={data.CatalogEntryView[0].Images[0].PrimaryImage[0].image}
      alternateImages={data.CatalogEntryView[0].Images[0].AlternateImages} />

      </Grid>
      <Grid item xs={12} sm={6}>
      <PurchaseView price={data.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue}
      promo1={data.CatalogEntryView[0].Promotions[0].Description[0].shortDescription.toLowerCase()}
      promo2={data.CatalogEntryView[0].Promotions[1].Description[0].shortDescription}
      highlights={data.CatalogEntryView[0].ItemDescription[0].features}
      purchasingChannelCode={data.CatalogEntryView[0].purchasingChannelCode}
      updateQuantity={this.updateQuantity}
      quantityProp={this.state.quantity}>
      </PurchaseView>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Review proTitle="PRO" proDescription="most helpful 4-5 star review"
      overallRating={data.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating}
      proReviewHeader={data.CatalogEntryView[0].CustomerReview[0].Pro[0].title}
      proReviewBody={data.CatalogEntryView[0].CustomerReview[0].Pro[0].review}
      proScreenName={data.CatalogEntryView[0].CustomerReview[0].Pro[0].screenName}
      proDate={data.CatalogEntryView[0].CustomerReview[0].Pro[0].datePosted}
      proStars={Number.parseInt(data.CatalogEntryView[0].CustomerReview[0].Pro[0].overallRating, 10)}
      conTitle="CON" conDescription="most helpful 1-2 star review"
      conReviewHeader={data.CatalogEntryView[0].CustomerReview[0].Con[0].title}
      conReviewBody={data.CatalogEntryView[0].CustomerReview[0].Con[0].review}
      conScreenName={data.CatalogEntryView[0].CustomerReview[0].Con[0].screenName}
      conDate={data.CatalogEntryView[0].CustomerReview[0].Con[0].datePosted}
      conStars={Number.parseInt(data.CatalogEntryView[0].CustomerReview[0].Con[0].overallRating, 10)}/>
      </Grid>
      <Grid item xs={12} sm={6}>
      </Grid>
      </Grid>
      </div>
    );}
  }

  ProductPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(ProductPage);
