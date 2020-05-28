import React from 'react'

export default function CardImage({ tag, thumbImg }) {
  return (
    <div className="card-image" style={{ backgroundImage: 'url('+require(`../../../assets/${thumbImg}`)+')' }}>
    {/* <div>{tag}</div> */}
      <div className="card-image-content">
        <div>{tag}</div>
      </div>
    </div>
  )
}
