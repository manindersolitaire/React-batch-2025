import React from 'react'

const ContactFrom = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder='name' />
        <br />
        <input type="email" placeholder='email' />
        <br />
        <textarea placeholder='message'></textarea>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactFrom
