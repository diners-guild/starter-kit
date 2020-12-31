import { lazy } from "react";
import locales from "./locales";
import routes from "./routes";
import getMenuItems from "./menuItems";
import themes from "./themes";
import parseLanguages from "base-shell/lib/utils/locale";
import grants from "./grants";
import Loading from "material-ui-shell/lib/components/Loading/Loading";
import getDefaultRoutes from "./getDefaultRoutes";
import { defaultUserData, isGranted } from "rmw-shell/lib/utils/auth";
import { FIREBASE_DEV_APIKEY, FIREBASE_PROD_APIKEY } from "../.env.json";

const config = {
  firebase: {
    //getting initConfig's from the Firebase Console website (Project -> Settings -> Your Apps -> CDN)
    prod: {
      initConfig: {
        apiKey: FIREBASE_PROD_APIKEY,
        authDomain: "dinersguildlive.firebaseapp.com",
        databaseURL: "https://dinersguildlive-default-rtdb.firebaseio.com/",
        projectId: "dinersguildlive",
        storageBucket: "dinersguildlive.appspot.com",
        messagingSenderId: "252454744274",
        appId: "1:252454744274:web:ffed196ada2fe5f749fd0b",
        measurementId: "G-25976HB2WM"
      },
      messaging: {
        publicVapidKey:
          "BEthk1-Qmoh9opZbi1AUZpxANTu6djVRDph4MLpyO2Qk6Dglm1Sa8Yt_pYi4EhYi3Tj-xgLqUktlbNuP_RP6gto",
      },
    },
    dev: {
      initConfig: {
        apiKey: FIREBASE_DEV_APIKEY,
        authDomain: "dinersguilddev.firebaseapp.com",
        databaseURL: "https://dinersguilddev-default-rtdb.firebaseio.com/",
        projectId: "dinersguilddev",
        storageBucket: "dinersguilddev.appspot.com",
        messagingSenderId: "56032715344",
        appId: "1:56032715344:web:356cee7678ae1678e4e755",
        measurementId: "G-KTMD83M8JN",
      },
      messaging: {
        publicVapidKey:
          "BEthk1-Qmoh9opZbi1AUZpxANTu6djVRDph4MLpyO2Qk6Dglm1Sa8Yt_pYi4EhYi3Tj-xgLqUktlbNuP_RP6gto",
      },
    },
    firebaseuiProps: {
      signInOptions: [
        "google.com",
        "facebook.com",
        "twitter.com",
        "github.com",
        "password",
        "phone",
      ],
    },
  },
  googleMaps: {
    apiKey: "AIzaSyByMSTTLt1Mf_4K1J9necAbw2NPDu2WD7g",
  },
  auth: {
    grants,
    redirectTo: "/dashboard",
    persistKey: "base-shell:auth",
    signInURL: "/signin",
    onAuthStateChanged: async (user, auth, firebaseApp) => {
      if (user != null) {
        const grantsSnap = await firebaseApp
          .database()
          .ref(`user_grants/${user.uid}`)
          .once("value");
        const notifcationsDisabledSnap = await firebaseApp
          .database()
          .ref(`disable_notifications/${user.uid}`)
          .once("value");

        const isAdminSnap = await firebaseApp
          .database()
          .ref(`admins/${user.uid}`)
          .once("value");

        firebaseApp
          .database()
          .ref(`user_grants/${user.uid}`)
          .on("value", (snap) => {
            auth.updateAuth({ grants: snap.val() });
          });

        firebaseApp
          .database()
          .ref(`disable_notifications/${user.uid}`)
          .on("value", (snap) => {
            auth.updateAuth({ notificationsDisabled: !!snap.val() });
          });

        firebaseApp
          .database()
          .ref(`admins/${user.uid}`)
          .on("value", (snap) => {
            auth.updateAuth({ isAdmin: !!snap.val() });
          });

        auth.updateAuth({
          ...defaultUserData(user),
          grants: grantsSnap.val(),
          notificationsDisabled: notifcationsDisabledSnap.val(),
          isAdmin: !!isAdminSnap.val(),
          isGranted,
        });

        firebaseApp.database().ref(`users/${user.uid}`).update({
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
          providers: user.providerData,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          notificationsDisabled: notifcationsDisabledSnap.val(),
        });

        await firebaseApp
          .database()
          .ref(`user_chats/${user.uid}/public_chat`)
          .update({
            displayName: "Public Chat",
            lastMessage: "Group chat",
            path: `group_chat_messages/public_chat`,
          });
      } else {
        firebaseApp.database().ref().off();
        auth.setAuth(defaultUserData(user));
      }
    },
  },
  getDefaultRoutes,
  routes,
  locale: {
    locales,
    persistKey: "base-shell:locale",
    defaultLocale: parseLanguages(["en", "de", "ru"], "en"),
    onError: (e) => {
      //console.warn(e)

      return;
    },
  },
  menu: {
    getMenuItems,
    MenuHeader: lazy(() =>
      import("material-ui-shell/lib/components/MenuHeader/MenuHeader")
    ),
  },
  theme: {
    themes,
    defaultThemeID: "default",
    defaultType: "light",
  },
  pages: {
    LandingPage: lazy(() => import("../pages/LandingPage")),
    PageNotFound: lazy(() => import("../pages/PageNotFound")),
  },
  components: {
    Menu: lazy(() =>
      import("rmw-shell/lib/containers/FirebaseMenu/FirebaseMenu")
    ),
    Loading,
  },

  containers: {
    AppContainer: lazy(() =>
      import("material-ui-shell/lib/containers/AppContainer/AppContainer")
    ),
    LayoutContainer: lazy(() =>
      import("rmw-shell/lib/containers/LayoutContainer/LayoutContainer")
    ),
  },
};

export default config;
