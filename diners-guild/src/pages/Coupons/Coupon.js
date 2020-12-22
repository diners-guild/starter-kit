import Form from '../../components/Forms/Coupon'
import React, { useEffect } from 'react'
import { FormPage } from 'rmw-shell/lib/containers/Page'
import { useIntl } from 'react-intl'
import { useParams, useHistory } from 'react-router-dom'
import { useLists } from 'rmw-shell/lib/providers/Firebase/Lists'

const path = 'coupons'
const singular = 'coupon'

const Coupon = () => {
  const history = useHistory()
  const intl = useIntl()
  const { uid } = useParams()
  const { watchList, unwatchList, getList } = useLists()

  useEffect(() => {
    watchList('companies')

    return () => unwatchList('companies')
  }, [watchList, unwatchList])

  const companyList = getList('companies')

  const initialValues = { helper: '', title: '' }

  return (
    <FormPage
      path={'public_tasks'}
      uid={uid}
      initialValues={initialValues}
      getPageProps={(values) => {
        return {
          pageTitle: intl.formatMessage({
            id: path,
            defaultMessage: 'Coupons',
          }),
        }
      }}
      handleSubmit={(values, newUid) => {
        console.log('values', values)
        if (newUid) {
          history.replace(`/${path}/${newUid}`)
        } else {
          history.push(`/${path}`)
        }
      }}
      handleDelete={() => {
        history.push(`/${path}`)
      }}
      formProps={{ companyList }}
      Form={Form}
      grants={{
        create: `create_${singular}`,
        delete: `delete_${singular}`,
      }}
      deleteDialogProps={{
        title: intl.formatMessage({
          id: `delete_${singular}_dialog_title`,
          defaultMessage: 'Delete Task?',
        }),
        message: intl.formatMessage({
          id: `delete_${singular}_dialog_message`,
          defaultMessage: 'Task will be deleted permanently?',
        }),
        action: intl.formatMessage({
          id: `delete_${singular}_dialog_action`,
          defaultMessage: 'DELETE TASK',
        }),
      }}
    />
  )
}

export default Coupon
