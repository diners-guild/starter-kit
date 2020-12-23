/* eslint-disable react/jsx-key */
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const About = lazy(() => import('../pages/About'))
const Admin = lazy(() => import('../pages/Demo/Admin'))
const Companies = lazy(() => import('../pages/Demo/Companies'))
const Company = lazy(() => import('../pages/Demo/Companies/Company'))
const Coupons = lazy(() => import('../pages/Coupons'))
const Coupon = lazy(() => import('../pages/Coupons/Coupon'))
const Tasks = lazy(() => import('../pages/Demo/Tasks'))
const Task = lazy(() => import('../pages/Demo/Tasks/Task'))
const Dashboard = lazy(() => import('../pages/Dashboard'))

const routes = [
  <Route path="/about" exact component={About} />,
  <AuthorizedRoute path="/coupons" exact component={Coupons}/>,
  <AuthorizedRoute path="/coupons/:uid" exact component={Coupon}/>,
  <AuthorizedRoute path="/create_coupon" exact component={Coupon} />,
  <AuthorizedRoute path="/dashboard" exact component={Dashboard} />,
  <AuthorizedRoute path="/admin" exact component={Admin} />,
  <AuthorizedRoute path="/companies" exact component={Companies} />,
  <AuthorizedRoute path="/companies/:uid" exact component={Company} />,
  <AuthorizedRoute path="/create_company" exact component={Company} />,
  <AuthorizedRoute path="/tasks" exact component={Tasks} />,
  <AuthorizedRoute path="/tasks/:uid" exact component={Task} />,
  <AuthorizedRoute path="/create_task" exact component={Task} />,
]

export default routes
