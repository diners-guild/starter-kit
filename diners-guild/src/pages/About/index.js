import React, { useState, lazy, Suspense } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Typography from '@material-ui/core/Typography'
import { useIntl } from 'react-intl'
import { usePaths } from 'rmw-shell/lib/providers/Firebase/Paths'
import Paper from '@material-ui/core/Paper'
import { Scrollbars } from 'react-custom-scrollbars'
import Toolbar from '@material-ui/core/Toolbar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const PageContent = lazy(() => import('../LandingPage/PageContent'))
const Footer = lazy(() => import('../LandingPage/Footer'))
const ResponsiveMenu = lazy(() =>
  import('rmw-shell/lib/containers/ResponsiveMenu')
)

const theme = createMuiTheme({
  palette: {
    primary: { main: '#242424' },
    secondary: {
      main: '#c62828',
    },
  },
})

const AboutPage = () => {
  const [scrollbar, setScrollbar] = useState(null)
  const [transparent, setTransparent] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [components, setComponents] = useState(null)
  const [top, setTop] = useState(null)
  const history = useHistory()
  const intl = useIntl()

  return (
    <Page
      pageTitle={intl.formatMessage({
      id: 'about',
      defaultMessage: 'About',
      })}
    >
      <Scrollbar
        style={{
          width: '100%',
          height: '100%',
        }}
      >
{/* Code for the top main section, and the 'paper' component to hold additional section info */}
        <div style={{ width: '100%', height: '100%' }}>
            <div
              ref={(r) => r && setTop(r)}
              style={{
                height: '60vh',
                width: '100%',
                backgroundColor: 'black',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                minHeight: 600,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={'/DG-logo.svg'}
                    alt="Diner's Guild logo. A shield with a neon fork and knife crossed as its emblem with 'Diner's Guild' banner above."
                    style={{ height: 150, maxWidth: 280, justifySelf: 'center' }}
                  />
                  <h3
                    style={{
                      color: '#00FECA',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 50,
                    }}
                  >
                    A coupon app that meets modern convenience
                  </h3>

                  <h4
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 25,
                      marginTop: -40,
                    }}
                  >
                    Our mission is to build a community connecting local businesses with their 
                    customers using technology to build convenient and seamless interactions
                  </h4>
                </div>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -80,
              }}
            >
              <Paper
                elevation={3}
                style={{
                  width: '100%',
                  maxWidth: '90%',
                  borderRadius: 15,
                  minHeight: 400,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: -50,
                  }}
                >
                </div>
                {scrolled && (
                  <Suspense fallback={<CircularProgress />}>
                    <PageContent setComponents={setComponents} />
                  </Suspense>
                )}
              </Paper>
            </div>
            <div style={{ height: 100 }}></div>
            {scrolled && (
              <Suspense fallback={<CircularProgress />}>
                <Footer />
              </Suspense>
            )}
          </div>
      </Scrollbar>
    </Page>
  )
}

export default AboutPage
