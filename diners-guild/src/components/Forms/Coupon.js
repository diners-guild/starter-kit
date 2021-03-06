import React from 'react'
import {
  Autocomplete,
  KeyboardDatePicker,
  TextField,
} from 'rmw-shell/lib/components/FormFields'

// eslint-disable-next-line
const Form = ({ id, handleSubmit, values, companies = [] }) => {
  const companyOptions = companies.map((cL) => {
    const { key, val } = cL
    const { name } = val

    return { label: name, value: key }
  })


  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <button type="submit" style={{ display: 'none' }} />
      <div>
          <Autocomplete
            openOnFocus
            label="Select Company"
            name="company"
            options={companyOptions}
            getOptionValue={(option) => option}
            getOptionLabel={(option) => option.label || ''}
            getOptionSelected={(o, v) => {
              return o.value === v.value
            }}
            filterOptions={(options, params) => {
              const filtered = options.filter((v) => {
                return (
                  JSON.stringify(v)
                    .toUpperCase()
                    .indexOf(params.inputValue.toUpperCase()) !== -1
                )
              })
  
              return filtered
            }}
          />
        <br />
        
        <p><b>Coupon Type:</b> Spend $X, Receive a $Y Gift card</p>
        <div 
            style={{
                display: "flex",
                alignItems: "center",
            }}>
            <p>Spend</p>&nbsp;
            <TextField
                name="triggerAmount"
                variant="outlined"
                margin="normal"
                required={true}
                error={!isFinite(values.triggerAmount) && values.triggerAmount!== undefined}
                style={{ width: "50px"}}
            /><p>, Receive a </p>&nbsp;
            <TextField 
                name="rewardAmount"
                variant="outlined"
                margin="normal"
                required={true}
                error={!isFinite(values.rewardAmount) && values.rewardAmount!== undefined}
                style={{ width: "50px"}}
            />&nbsp;
            <p>Gift card!</p>
        </div>
        <br />

        <TextField
          label="Description"
          name="description"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          minRows={2}
        />
        <br />

        <KeyboardDatePicker
          label={'Expiration Date'}
          name="expiration_date"
          inputVariant="outlined"
          margin="normal"
          format="MM.DD.YYYY"
        />
        <br />

      </div>
    </form>
  )
}

export default Form
