import React from "react"
import './Modal.css'


export function Modal () {

  const [value, setValue] = React.useState('')

  function formSubmitHandler (event: React.FormEvent) {
    event.preventDefault()
  }

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

    return(
      <div className={'overlay'}>
       <div className='modal'>
        <form onSubmit={formSubmitHandler}>
          <h2>sobaka</h2>
          <input 
            className = 'input' 
            type="text" 
            value={value} 
            placeholder="Введите название продукта..." 
            onChange={inputChangeHandler}
          />
          <button>Добавить товар</button>
        </form>
       </div>
      </div>
    )
}