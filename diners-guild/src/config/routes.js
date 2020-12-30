/* eslint-disable react/jsx-key */
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const About = lazy(() => import('../pages/About'))
const Companies = lazy(() => import('../pages/Demo/Companies'))
const Company = lazy(() => import('../pages/Demo/Companies/Company'))
const Coupons = lazy(() => import('../pages/Coupons'))
const Coupon = lazy(() => import('../pages/Coupons/Coupon'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const PhysicalCards = lazy(() => import('../pages/Wallet/PhysicalCards'))
const Transactions = lazy(() => import('../pages/Wallet/Transactions'))
const VirtualCards = lazy(() => import('../pages/Wallet/VirtualCards'))


const routes = [
  <Route path="/about" exact component={About} />,
  <AuthorizedRoute path="/coupons" exact component={Coupons}/>,
  <AuthorizedRoute path="/coupons/:uid" exact component={Coupon}/>,
  <AuthorizedRoute path="/create_coupon" exact component={Coupon} />,
  <AuthorizedRoute path="/dashboard" exact component={Dashboard} />,
  <AuthorizedRoute path="/companies" exact component={Companies} />,
  <AuthorizedRoute path="/companies/:uid" exact component={Company} />,
  <AuthorizedRoute path="/create_company" exact component={Company} />,
  <AuthorizedRoute path="/dashboard" exact component={Dashboard} />,
  <AuthorizedRoute path="/physical_cards" exact component={PhysicalCards} />,
  <AuthorizedRoute path="/transactions" exact component={Transactions} />,
  <AuthorizedRoute path="/virtual_cards" exact component={VirtualCards} />,

]

export default routes
