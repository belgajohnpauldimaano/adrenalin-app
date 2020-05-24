import React from 'react'

export default function CardImage({ tag, thumbImg }) {
  return (
    <div className="card-image" style={{ height: 471, backgroundImage: 'url('+require(`../../../assets/${thumbImg}`)+')' }}>
      <div>{tag}</div>
    </div>
  )
}
