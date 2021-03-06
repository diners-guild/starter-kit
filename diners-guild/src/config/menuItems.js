//icon imports
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import Business from '@material-ui/icons/Business'
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import DaschboardIcon from '@material-ui/icons/Dashboard'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Web from '@material-ui/icons/Web'
import GetApp from '@material-ui/icons/GetApp'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import LanguageIcon from '@material-ui/icons/Language'
import LockIcon from '@material-ui/icons/Lock'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import People from '@material-ui/icons/People'
import ReceiptIcon from '@material-ui/icons/Receipt';
import Security from '@material-ui/icons/Security'
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import SettingsIcon from '@material-ui/icons/SettingsApplications'
import StyleIcon from '@material-ui/icons/Style'
//other
import React from 'react'
import allLocales from './locales'
import allThemes from './themes'

const getMenuItems = (props) => {
  const {
    intl,
    updateLocale,
    locale,
    menuContext,
    themeContext,
    a2HSContext,
    firebaseApp,
    auth: authData,
  } = props
  const {
    isDesktop,
    isAuthMenuOpen,
    useMiniMode,
    setMiniMode,
    setAuthMenuOpen,
  } = menuContext
  const { themeID = 'en', setThemeID } = themeContext || {}
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext || {}
  const { auth } = authData
  const { isGranted = () => false, isAdmin = false } = auth || {}

  const localeItems = allLocales.map((l) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: l.locale }),
      onClick: () => {
        updateLocale(l.locale)
        if (!isAuthorised) {
          try {
            window.location.reload()
          } catch (error) {}
        }
      },
      leftIcon: <LanguageIcon />,
    }
  })

  const isAuthorised = auth.isAuthenticated

  const themeItems = allThemes.map((t) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: t.id }),
      onClick: () => {
        setThemeID(t.id)
      },
      leftIcon: <StyleIcon style={{ color: t.color }} />,
    }
  })

  const handleSignOut = () => {
    setAuthMenuOpen(false)
    firebaseApp.auth().signOut()
    localStorage.clear()
  }

  if (isAuthMenuOpen) {
    return [
      {
        value: '/my_account',
        primaryText: intl.formatMessage({
          id: 'my_account',
          defaultMessage: 'My Account',
        }),
        leftIcon: <AccountBoxIcon />,
      },
      {
        value: '/signin',
        onClick: isAuthorised ? () => handleSignOut() : () => {},
        visible: true,
        primaryText: isAuthorised
          ? intl.formatMessage({ id: 'sign_out' })
          : intl.formatMessage({ id: 'sign_in' }),
        leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
      },
    ]
  }
  return [
    {
      value: '/signin',
      onClick: isAuthorised ? () => handleSignOut() : () => {},
      visible: !isAuthorised,
      primaryText: isAuthorised
        ? intl.formatMessage({ id: 'sign_out' })
        : intl.formatMessage({ id: 'sign_in' }),
      leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
    },
    {
      value: '/',
      visible: isAuthorised,
      primaryText: intl.formatMessage({
        id: 'landing_page',
        defaultMessage: 'Landing Page',
      }),
      leftIcon: <Web />,
    },
    {
      value: '/dashboard',
      visible: isAdmin,
      primaryText: intl.formatMessage({
        id: 'dashboard',
        defaultMessage: 'Dashboard',
      }),
      leftIcon: <DaschboardIcon />,
    },
    {
      value: '/coupons',
      visible: true,
      primaryText: intl.formatMessage({ id: 'coupons', defaultMessage: 'Coupons' }),
      leftIcon: <ConfirmationNumberIcon />,
    },
    {
      value: '/about',
      visible: true,
      primaryText: intl.formatMessage({ id: 'about', defaultMessage: 'About' }),
      leftIcon: <InfoOutlined />,
    },
    {
      primaryText: intl.formatMessage({
        id: 'wallet',
        defaultMessage: 'Wallet',
      }),
      visible: isAuthorised,
      primaryTogglesNestedList: true,
      leftIcon: <CreditCardIcon />,
      nestedItems: [
        {
          value: '/virtual_cards',
          visible: isGranted(auth, 'read_companies'),
          primaryText: intl.formatMessage({
            id: 'virtual_cards',
            defaultMessage: 'Virtual Cards',
          }),
          leftIcon: <SettingsSystemDaydreamIcon />,
        },
        {
          value: '/physical_cards',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'physical_cards',
            defaultMessage: 'Physical Cards',
          }),
          leftIcon: <CreditCardIcon />,
        },
        {
          value: '/transactions',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'transactions',
            defaultMessage: 'Transactions',
          }),
          leftIcon: <ReceiptIcon />,
        },
      ],
    },

    {
      primaryText: intl.formatMessage({
        id: 'administration',
        defaultMessage: 'Administration',
      }),
      primaryTogglesNestedList: true,
      visible: isAdmin,
      leftIcon: <Security />,
      nestedItems: [
        {
          value: '/companies',
          visible: isAuthorised || isGranted(auth, 'read_companies'),
          primaryText: intl.formatMessage({
            id: 'companies',
            defaultMessage: 'Companies',
          }),
          leftIcon: <Business />,
        },
        {
          value: '/users',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'users',
            defaultMessage: 'Users',
          }),
          leftIcon: <People />,
        },
        {
          value: '/roles',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'roles',
            defaultMessage: 'Roles',
          }),
          leftIcon: <AccountBoxIcon />,
        },
        // {  // TODO set up company admin flow where users can add manage there own coupon experience.
        //   value: '/manage_coupons',
        //   visible: isAuthorised,
        //   primaryText: intl.formatMessage({
        //     id: 'manage_coupons',
        //     defaultMessage: 'Manage Coupons',
        //   }),
        //   leftIcon: <ConfirmationNumberIcon />,
        // },
      ],
    },
    { divider: true },
    {
      visible: true,
      primaryText: intl.formatMessage({ id: 'settings' }),
      primaryTogglesNestedList: true,
      leftIcon: <SettingsIcon />,
      nestedItems: [
        {
          visible: true,
          primaryText: intl.formatMessage({ id: 'theme' }),
          secondaryText: intl.formatMessage({ id: themeID }),
          primaryTogglesNestedList: true,
          leftIcon: <StyleIcon />,
          nestedItems: themeItems,
        },
        {
          visible: true,
          primaryText: intl.formatMessage({ id: 'language' }),
          secondaryText: intl.formatMessage({ id: locale }),
          primaryTogglesNestedList: true,
          leftIcon: <LanguageIcon />,
          nestedItems: localeItems,
        },
        {
          visible: isDesktop ? true : false,
          onClick: () => {
            setMiniMode(!useMiniMode)
          },
          primaryText: intl.formatMessage({
            id: 'menu_mini_mode',
          }),
          leftIcon: useMiniMode ? <MenuOpenIcon /> : <ChromeReaderMode />,
        },
      ],
    },
    {
      visible: isAppInstallable && !isAppInstalled,
      onClick: () => {
        deferredPrompt.prompt && deferredPrompt.prompt()
      },
      primaryText: intl.formatMessage({
        id: 'install',
        defaultMessage: 'Install',
      }),
      leftIcon: <GetApp />,
    },
  ]
}
export default getMenuItems