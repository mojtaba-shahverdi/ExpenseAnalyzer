import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { ExpenseAnalyzerContext } from '../../../context/context'
import { v4 as uuidv4 } from 'uuid'
import { useSpeechContext } from '@speechly/react-client'

import formatDate from '../../../utils/fomatDate'
import useStyles from './styles'
import { incomeCategories, expenseCategories } from '../../../constants/categories'
import CustomizedSnakbar from '../../Snackbar/Snakbar'

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles()
    const [formData, setFormData] = React.useState(initialState)
    const { addTransaction } = React.useContext(ExpenseAnalyzerContext)
    const { segment } = useSpeechContext()
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState()

    const   createTransaction = () => {
        if(formData.amount && formData.category && formData.type && formData.date){
            if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return
            const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
            setOpen(true)
            addTransaction(transaction)
            setFormData(initialState)
        }
        if(formData.amount === "") setError(true)
        if(formData.category === "") setError(true)
        if(formData.date === "") setError(true)
    }
    
    React.useEffect(() => {
        if (segment) {
            if (segment.intent.intent === 'add_expense') {
                setFormData({ ...formData, type: 'Expense' })
            } else if (segment.intent.intent === 'add_income') {
                setFormData({ ...formData, type: 'Income' })
            } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
                return createTransaction()
            } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
                return setFormData(initialState)
            }

            segment.entities.forEach((e) => {
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
                switch (e.type) {
                    case 'amount':
                        setFormData({ ...formData, amount: e.value })
                        break;
                    case 'category':
                        if (incomeCategories.map((iC) => iC.type).includes(category)) {
                            setFormData({ ...formData, type: 'Income', category })
                        } else if (expenseCategories.map((eC) => eC.type).includes(category)) {
                            setFormData({ ...formData, type: 'Expense', category })
                        }
                        break;
                    case 'date':
                        setFormData({ ...formData, date: e.value })
                        break;
                    default:
                        break;
                }
            })
            if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
                createTransaction()
            }
        }
    }, [segment, formData])

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories

    const style = {
        borderBottom: error && '3px solid red'
    }

    return (
        <Grid container spacing={2}>
            <CustomizedSnakbar open={open} setOpen={setOpen} />
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    {segment && segment.words.map((w) => w.value).join(' ')}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth style={style}>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField style={style} type='number' label='Amount' fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            </Grid>
            <Grid item xs={6}>
                <TextField  type='date' label='Date' fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
            </Grid>
            <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form