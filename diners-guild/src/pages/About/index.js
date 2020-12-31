import React, { lazy, Suspense } from "react";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Typography from "@material-ui/core/Typography";
import { useIntl } from "react-intl";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
//variables for our component imports
const AboutPageContent = lazy(() => import("./AboutPageContent"));
const Footer = lazy(() => import("../LandingPage/Footer"));

const AboutPage = () => {
  const history = useHistory();
  const intl = useIntl();

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: "about",
        defaultMessage: "About",
      })}
    >
      {/* Code for the top main section, and the 'paper' component to hold additional section info */}
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            height: "60vh",
            width: "100%",
            backgroundColor: "black",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            minHeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={"/DG-logo.svg"}
                alt="Diner's Guild logo. A shield with a neon fork and knife crossed as its emblem with 'Diner's Guild' banner above."
                style={{ height: 150, maxWidth: 280, justifySelf: "center" }}
              />
              <Typography
                variant="h3"
                component="h3"
                style={{
                  color: "#00FECA",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 50,
                }}
              >
                A modern and convenient coupon app
              </Typography>

              <Typography
                variant="h4"
                component="h4"
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 25,
                }}
              >
                Our mission is to build a community connecting local businesses
                with their customers using technology to build convenient and
                seamless interactions
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -80,
          }}
        >
          <Paper
            elevation={3}
            style={{
              width: "100%",
              maxWidth: "90%",
              borderRadius: 15,
              minHeight: 400,
            }}
          >
            <Suspense fallback={<CircularProgress />}>
              <AboutPageContent />
            </Suspense>
          </Paper>
        </div>
        <div style={{ height: 100 }}></div>
        <Suspense fallback={<CircularProgress />}>
          <Footer />
        </Suspense>
      </div>
    </Page>
  );
};

export default AboutPage;
