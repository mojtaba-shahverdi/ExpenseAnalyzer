import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'
import useStyles from './styles'
import { ExpenseAnalyzerContext } from '../../../context/context'

const List = () => {
  const classes = useStyles()
  const { deleteTransaction } = React.useContext(ExpenseAnalyzerContext)

  const transactions = [
    { id: 1, type: 'Income', category: 'Salary', amount: 50, date: 'Tue Jul 19 2022' },
    { id: 3, type: 'Expense', category: 'Pets', amount: 150, date: 'Tue Jul 30 2012' },
    { id: 2, type: 'Income', category: 'Business', amount: 500, date: 'Tue Jul 19 2022'},
  ]

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='delete'>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List