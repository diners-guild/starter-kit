import React, { useState, lazy, Suspense } from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Helmet } from 'react-helmet'
import Paper from '@material-ui/core/Paper'
import { Scrollbars } from 'react-custom-scrollbars'
import Toolbar from '@material-ui/core/Toolbar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const LandingPageContent = lazy(() => import('./LandingPageContent'))
const Footer = lazy(() => import('./Footer'))
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

const LandingPage = () => {
  const [scrollbar, setScrollbar] = useState(null)
  const [transparent, setTransparent] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [top, setTop] = useState(null)
  const history = useHistory()

  const scrollTo = (e) => {
    e &&
      e.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true,
      })
  }

  const sections = [
    {
      name: 'start',
      onClick: () => history.push('/coupons'),
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, minimal-ui"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.dinersguild.com" />
          <meta
            name="keywords"
            content={
              'react,pwa,material-ui,redux,boilerplate,lighthouse,gdg,react.js'
            }
          />
          <meta
            name="description"
            content={
              'React PWA boilerplate that is using create-react-app and firebase '
            }
          />

          <title>Diner's Guild</title>
        </Helmet>
        <Scrollbars
          ref={(e) => {
            if (e !== null) {
              setScrollbar(e)
            }
          }}
          onScroll={(e) => {
            setTransparent(scrollbar.viewScrollTop < 100)
            setScrolled(true)
          }}
          autoHide
          style={{ width: '100%', height: '100vh' }}
        >
          <AppBar
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: transparent ? 'transparent' : undefined,
              boxShadow: transparent ? 'none' : undefined,
              transition: 'background 1s',
            }}
            position="static"
          >
            <Toolbar disableGutters>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  scrollTo(top)
                }}
              >
                <ArrowUpwardIcon 
                  style={{
                    height: 35,
                    justifySelf: 'center',
                    marginLeft: 12,
                    display: transparent ? 'none' : undefined,
                  }}
                />
              </div>
              <div style={{ flex: 1 }} />

              <Suspense fallback={<CircularProgress />}>
                <ResponsiveMenu sections={sections} />
              </Suspense>
            </Toolbar>
          </AppBar>
          <div style={{ width: '100%', height: '100%' }}>
            <div
              ref={(r) => r && setTop(r)}
              style={{
                height: '100vh',
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
                <img
                  src={'/DG-logo.svg'}
                  alt="Diner's Guild logo. A shield with a neon fork and knife crossed as its emblem with 'Diner's Guild' banner above."
                  style={{ height: 250, maxWidth: 280, justifySelf: 'center' }}
                />

                <div style={{ padding: 8 }}>
                  <h3
                    style={{
                      color: '#00FECA',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 50,
                    }}
                  >
                    DINER'S GUILD
                  </h3>

                  <h4
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 25,
                      marginTop: -40,
                    }}
                  >
                    The most convenient coupon app
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
                  <Button
                    size="large"
                    style={{
                      margin: 30,
                      borderRadius: '40px',
                      fontSize: 'bold',
                      backgroundColor: "#E91E63"
                    }}
                    aria-label="Start button"
                    variant="contained"
                    color="secondary"
                    name={'signin'}
                    onClick={() => {
                      history.push('/coupons')
                    }}
                  >
                    Start
                  </Button>
                </div>
                {scrolled && (
                  <Suspense fallback={<CircularProgress />}>
                    <LandingPageContent />
                  </Suspense>
                )}
              </Paper>
            </div>
            <div style={{ height: 100 }}></div>
{/* For bottom image before Footer */}
            <div
              style={{
                height: '800px',
                //width: '100%',
                backgroundImage: 'url(burger.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            />
            {scrolled && (
              <Suspense fallback={<CircularProgress />}>
                <Footer />
              </Suspense>
            )}
          </div>
        </Scrollbars>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default LandingPage
