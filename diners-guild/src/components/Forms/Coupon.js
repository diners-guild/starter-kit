import React from 'react'
import {
  Autocomplete,
  KeyboardDatePicker,
  TextField,
} from 'rmw-shell/lib/components/FormFields'

// eslint-disable-next-line
const Form = ({ id, handleSubmit, values, companyList = [] }) => {
  const companies = companyList.map((cL) => {
    const { key, val } = cL
    const { displayName } = val

    return { label: displayName, value: key }
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
            options={companies}
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
        {/* <TextField
          label="Company"
          name="company"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
        /> */}
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
          label={'Due to'}
          name="due_to"
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
