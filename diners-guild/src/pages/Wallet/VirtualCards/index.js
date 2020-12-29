import React from 'react'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import { useIntl } from 'react-intl'

const VirtualCards = () => {
    const intl = useIntl()

    return (
        <Page
            pageTitle={intl.formatMessage({
            id: 'virtual_cards',
            defaultMessage: 'Virtual Cards',
            })}
        >
            <h1>&nbsp;&nbsp;&nbsp;This is showing your Virtual Card information!</h1>
        </Page>
    )
}

export default VirtualCards