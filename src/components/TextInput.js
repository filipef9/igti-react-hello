const TextInput = ({
  id = 'id_do_text_input',
  label = 'Label:',
  value = 'value',
  handleOnChange = null,
  autoFocus = false
}) => {
  
  const handleChangeInputText = ({currentTarget}) => {
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
        type="text" 
        value={value}
        onChange={handleChangeInputText}
        autoFocus={autoFocus}
        autocomplete="off"
        className="border p-1"
      />
    </div>
  )
}

export default TextInput
