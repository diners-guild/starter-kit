import React from 'react'
import MarkdownPage from 'rmw-shell/lib/containers/MarkdownPage'
import { useIntl } from 'react-intl'

const Coupons = () => {
  const intl = useIntl()
  return (
    <MarkdownPage
      CouponsProps={{
        CouponsTitle: intl.formatMessage({ id: 'coupons', defaultMessage: 'Coupons' }),
      }}
      path={
        'https://raw.githubusercontent.com/TarikHuber/react-most-wanted/master/README.md'
      }
    />
  )
}

export default Coupons