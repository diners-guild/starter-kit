import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TrackChanges from '@material-ui/icons/TrackChanges'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
//icons
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import StorefrontIcon from '@material-ui/icons/Storefront';

const PackageCard = ({ title, command, description, icons }) => {
  return (
    <Card elevation={4} style={{ margin: 18, maxWidth: 350 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <br />
        {icons}
        <br />
        <Typography variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const LandingPageContent = () => {

  const history = useHistory()

  return (
    <React.Fragment>
      <div style={{ height: 20 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Join the Guild
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Support local businesses in a convenient way
      </Typography>
      <div style={{ height: 30 }} />

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <PackageCard
          title={'Sign Up for FREE'}
          description={
            'Connect with any account (Google, Facebook, etc.) and start using this easy-to-use app!'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <LaptopMacIcon
                fontSize="large"
                alt="cell phone icon with profile information"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
        <PackageCard
          title={'Get your Card'}
          description={
            'Receive your virtual credit card - get your rewards added onto the same card after redeeming a coupon.'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <CardGiftcardIcon
                fontSize="large"
                alt="credit card icon"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
        <PackageCard
          title={'Shop and Save'}
          description={'Time to look at available coupons and start amping up those savings!'}
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <StorefrontIcon
                fontSize="large"
                alt="shopping bag icon"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
      </div>
      <div style={{ height: 30 }} />
      <div
        style={{
          backgroundColor: '#2D2D2D',
          backgroundImage: 'radial-gradient( #4F4F4F,#242424)',
        }}
      >
        <div style={{ height: 30 }} />
        <Typography
          variant="h3"
          color="textSecondary"
          style={{ margin: 16, textAlign: 'center', color: 'white' }}
        >
          Hassle-free
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          Redeem savings without having a coupon
        </Typography>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TrackChanges style={{ fontSize: 150, color: 'white' }} />
        </div>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          Use the app to find businesses you want to support. 
          Use your card to automatically redeem coupons without 
          having to go through the hassle of validating with the cashier.
        </Typography>
        <div style={{ height: 50 }} />
      </div>

      <div style={{ height: 30 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Business Owners, it's time to sign up!
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        In the Diner’s Guild community you get to create deals, 
        view reports, and save on money because there’s no monthly 
        subscription fee! Only pay for the number of customers that are using your coupon.
      </Typography>
      <div style={{ height: 30 }} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <Button
          size="large"
          style={{
            margin: 30,
            borderRadius: '40px',
            fontSize: 'bold',
            backgroundColor: "#E91E63"
          }}
          aria-label="Sign Up button"
          variant="contained"
          color="secondary"
          name={'signin'}
          onClick={() => {
            history.push('/coupons')
          }}
        >
          Sign Up Now
      </Button>
      </div>
      <div style={{ height: 50 }} />
    </React.Fragment>
  )
}

export default LandingPageContent
