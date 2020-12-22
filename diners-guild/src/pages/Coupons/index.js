// MUI icons
import Avatar from '@material-ui/core/Avatar'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
// React resources
import React, { useCallback } from 'react'
import { ListPage } from 'rmw-shell/lib/containers/Page'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useFirebase } from 'rmw-shell/lib/providers/Firebase'

const path = 'coupons'

const fields = [
  {
    name: 'company',
    label: 'Company',
  },
  {
    name: 'description',
    label: 'Description',
  },
]

const Row = ({ data, index, style }) => {
  const { title = '', helper = {}, key } = data
  const history = useHistory()

  return (
    <div key={key} style={style}>
      <ListItem
        button
        alignItems="flex-start"
        style={{ height: 72 }}
        onClick={() => {
          history.push(`${path}/${key}`)
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <FastfoodIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={helper?.label} />
      </ListItem>
      <Divider variant="inset" />
    </div>
  )
}

const Coupons = () => {
  const intl = useIntl()
  const history = useHistory()
  const { firebaseApp } = useFirebase()

  const getRef = useCallback(() => {
    return firebaseApp.database().ref(`public_coupons`).limitToLast(50)
  }, [firebaseApp])

  return (
    <ListPage
      reverse
      fields={fields}
      path={'public_coupons'}
      getRef={getRef}
      createGrant="create_task"
      Row={Row}
      listProps={{ itemSize: 72 }}
      getPageProps={() => {
        return {
          pageTitle: intl.formatMessage({
            id: path,
            defaultMessage: 'Coupons',
          }),
        }
      }}
      onCreateClick={() => {
        history.push('/create_task')
      }}
    />
  )
}

export default Coupons