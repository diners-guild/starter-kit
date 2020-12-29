import React from 'react'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import { useIntl } from 'react-intl'

const ManageCoupons = () => {
    const intl = useIntl()

    return (
        <Page
            pageTitle={intl.formatMessage({
            id: 'manage_coupons',
            defaultMessage: 'Manage Coupons',
            })}
        >
            <h1>&nbsp;&nbsp;&nbsp;Coming Soon 🏗</h1>
        </Page>
    )
}

export default ManageCoupons
