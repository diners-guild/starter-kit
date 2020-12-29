import React from 'react'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import { useIntl } from 'react-intl'

const PhysicalCards = () => {
    const intl = useIntl()

    return (
        <Page
            pageTitle={intl.formatMessage({
            id: 'physical_cards',
            defaultMessage: 'Physical Cards',
            })}
        >
            <h1>&nbsp;&nbsp;&nbsp;Coming Soon ✨</h1>
        </Page>
    )
}

export default PhysicalCards