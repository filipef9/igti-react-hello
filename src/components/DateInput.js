const DateInput = ({
  id = 'id_do_text_input',
  label = 'Label:',
  value = '1900-01-01',
  handleOnChange = null,
  autoFocus = false
}) => {
  
  const handleChangeInputDate = ({currentTarget}) => {
    if (handleOnChange) {
      const newValue = currentTarget.value;
      handleOnChange(newValue);
    }
  };

  return (
    <div className="flex flex-col my-4">
      <label
        htmlFor={id}
        className="text-sm mb-1"
      >{label}</label>
      <input 
        id={id}
        type="date" 
        value={value}
        onChange={handleChangeInputDate}
        autoFocus={autoFocus}
        autoComplete="off"
        className="border p-1"
      />
    </div>
  )
}

export default DateInput
