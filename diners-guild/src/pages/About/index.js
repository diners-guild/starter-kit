import React, { useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Typography from '@material-ui/core/Typography'
import { useIntl } from 'react-intl'
import { usePaths } from 'rmw-shell/lib/providers/Firebase/Paths'

const AboutPage = () => {
  const intl = useIntl()
  return (
    <Page
      pageTitle={intl.formatMessage({
      id: 'about',
      defaultMessage: 'About',
      })}
    >
      <h1>&nbsp;&nbsp;&nbsp;About Diner's Guild</h1>
    </Page>
  )
}

export default AboutPage
