const CheckInput = ({
  id = 'id_do_checkbox_input',
  label = 'Label',
  handleOnChange = null,
  autoFocus = false
}) => {

  const handleChangeCheckbox = () => {
    if (handleOnChange) {
      handleOnChange();
    }
  };

  return (
    <div className="flex items-center space-x-2 my-4">
      <input
        id={id}
        type="checkbox"
        onChange={handleChangeCheckbox}
        autoFocus={autoFocus}
        className="border"
      />
      <label
        htmlFor={id}
        className="text-sm"
      >{label}</label>
    </div>
  )
}

export default CheckInput
