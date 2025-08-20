import React from 'react'

const Card = ({title,description,imageUrl, btnText}) => {
  return (
<div className="card" style={{width: '18rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">{btnText}</a>
  </div>
</div>

  )
}

export default Card
