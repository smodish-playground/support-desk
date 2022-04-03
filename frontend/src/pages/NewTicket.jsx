import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1>Create new ticket</h1>
        <p>Please fill out form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='email' className='form-control' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select id='product' name='product' value={product} onChange={(e) => setProduct(e.target.value)}>
              <option value='iPhone'>iPhone</option>
              <option value='Macbook Pro'>Macbook Pro</option>
              <option value='iMac'>iMac</option>
              <option value='iPad'>iPad</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Descriptionof issue</label>
            <textarea
              className='form-control'
              name='description'
              id='description'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket
