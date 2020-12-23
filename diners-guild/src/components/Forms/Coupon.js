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
    <form name="myForm"
      onSubmit={handleSubmit}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <button type="submit" style={{ display: 'none' }} />
      <div>
          <Autocomplete
            openOnFocus
            label="Select Company"
            name="select_company"
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
        <div>
            <p><b>Coupon Type:</b> Spend $X, Receive a $Y Gift card</p>
            <p>Spend</p>&nbsp;
            <TextField
                label="$X"
                name="triggerAmount"
                variant="standard"
                margin="normal"
                required={true}
                fullWidth={false}
                error={!isFinite(values.triggerAmount) && values.triggerAmount!== undefined}
                // helperText={error ? "Error msg" : ""}
            /><p>, Receive a </p>&nbsp;
            <TextField 
                label="$Y"
                name="rewardAmount"
                variant="standard"
                margin="normal"
                required={true}
                fullWidth={false}
                error={!isFinite(values.$rewardAmount) && values.triggerAmount!== undefined}
                // helperText={error ? "Error msg" : ""}
            />&nbsp;
            <p>Gift card!</p>
        </div>
        <br />

        {/* testing error props */}
        <TextField error
            // label="Error"
            name="error"
            variant="standard"
            margin="normal"
            required={true}
            fullWidth={false}
            helperText="Entry must be a number"
            />

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
