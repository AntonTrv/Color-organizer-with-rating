import React from 'react'
import PropTypes from 'prop-types'
import '../css/addColorForm.scss'

const AddColorForm = ({onNewColor=f=>f}) => {

  let _title, _color

  const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
return (
  <form onSubmit={submit}>
    <input ref={input => _title = input} type='text' placeholder="enter your color here" required />
    <input ref={input=>_color = input} type='color' required />
    <button>Add</button>
  </form>
)
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddColorForm;
