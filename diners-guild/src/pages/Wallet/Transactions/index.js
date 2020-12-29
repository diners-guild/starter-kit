import React from 'react'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import { useIntl } from 'react-intl'

const Transactions = () => {
    const intl = useIntl()

    return (
        <Page
            pageTitle={intl.formatMessage({
            id: 'transactions',
            defaultMessage: 'Transactions',
            })}
        >
            <h1>&nbsp;&nbsp;&nbsp;Coming Soon 🔮</h1>
        </Page>
    )
}

export default Transactions