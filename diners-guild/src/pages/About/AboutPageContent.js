import React from "react";
import Typography from "@material-ui/core/Typography";
import { useIntl } from "react-intl";

const AboutPageContent = () => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: "center" }}
      >
        {intl.formatMessage({
          id: "modernAndConvenient",
          defaultMessage: "Drive to Change - How Diner’s Guild Started",
        })}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: "center" }}
      >
        {intl.formatMessage({
          id: "ideaForDiner",
          defaultMessage: `The idea for Diner’s Guild came from CEO and Founder, Bryan Jackson, who
          loves going to local restaurants and trying new foods with his wife and
          2 kids. His favorite local hub is a Bostonial ice cream parlor called
          Brooker’s Founding Flavors Ice Cream. However, when the Covid-19
          pandemic hit, regulations made it difficult to support those local
          businesses. Knowing how businesses of all kinds were struggling to stay
          afloat, Bryan’s desire to support local businesses continued to grow.
          For a world without Brooker’s ice cream is a world without Bryan. When
          states were able to open restaurants again, businesses and customers
          alike questioned how sanitary it was to eat out, not just to use a
          coupon. Is it worth sending paper coupons through the mail and
          exchanging? Is it worth having to redeem coupons by tapping on
          customers’ phone screens?`,
        })}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: "center" }}
      >
        {intl.formatMessage({
          id: "businessesCouponsBryanQuote",
          defaultMessage: `“I’d love for businesses to put out coupons to encourage
          customers to go, but coupons didn’t seem as effective as they would have
          in the past,” Bryan stated.`,
        })}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: "center" }}
      >
        {intl.formatMessage({
          id: "digitizeExperience",
          defaultMessage: `“And so, our thought is that by digitizing the experience and making the
          use of a coupon more effortless, we can encourage more people to support
          local businesses we like and enjoy. This would also help make the
          transition of bringing back the normality of supporting those businesses
          easier.”`,
        })}
      </Typography>
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: "center" }}
      >
        {intl.formatMessage({
          id: "benefitCustomers",
          defaultMessage: `Benefitting the Customers`,
        })}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: "center" }}
      >
        {intl.formatMessage({
          id: "keepTrack",
          defaultMessage: `Keeping track of paper coupons that you are meaning to use can be
          difficult. And, if those coupons give any rewards (“Spend $20, get a $5
          gift card”), it’s difficult to remember to redeem that gift card in the
          future once you have it. With wanting to make a more seamless
          transaction between business and customer, Diner’s Guild wanted the
          transaction to only go through a credit card, which people do on a daily
          basis already. With coupons becoming more integrated with technology,
          why not have a system that keeps track of that for you? With Diner’s
          Guild, you can as our software automatically would redeem the $5 on your
          card seeing that you had spent $20 at X business. No more needing to
          pull out those coupons from your purse or pocket, or pulling out your
          phone to click ‘Redeem’ and verify it with the cashier.`,
        })}
      </Typography>
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: "center" }}
      >
         {intl.formatMessage({
          id: "benefittingLocalBusinesses",
          defaultMessage: `Benefitting Local Businesses`,
        })}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: "center" }}
      >
        {intl.formatMessage({
          id: "betterForBusenesses",
          defaultMessage: `With Bryan’s experience working with restaurants and businesses alike
          for software, he saw that most SaaS software to promote restaurants is
          great, but it can also impose restaurants like a tax. Apps like GrubHub
          and DoorDash make a great experience for customers because they can now
          have their favorite food delivered to them; it also benefits promoting
          the business as the restaurant now have delivery options. However, this
          almost is counter-productive as restaurant owners now have to pay for
          these services, and for small local businesses, this can hinder
          business’ survival. “I wanted to build an advertising platform where
          businesses can have a software whose incentives are aligned.” Paying for
          the promotion would be similar to a pay-per-ad advertisement versus a
          monthly subscription. This makes it so businesses only pay for the app
          when the apps successfully brings customers to their business.`,
        })}
      </Typography>
    </React.Fragment>
  );
};

export default AboutPageContent;
