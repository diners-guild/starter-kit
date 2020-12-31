import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TrackChanges from '@material-ui/icons/TrackChanges'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
  
const AboutPageContent = ({ setComponents }) => {
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
    </div>
    <div style={{ height: 30 }} />
    <div
        ref={(r) => {
        if (r) {
            setComponents(r)
        }
        }}
        style={{
        //height: 400,
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
    </div>
    <div style={{ height: 50 }} />
    </React.Fragment>
)
}

export default AboutPageContent