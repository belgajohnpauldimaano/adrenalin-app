import React from 'react'

import './DetailImageCard.sass';

export function DeatilCardImage({ tag, image }) {
  return (
    <div className="detail-card-container">
      <div className="detail-card-image" style={{ backgroundImage: 'url(' + require(`../../../assets/${image}`) + ')' }}>
        <div className="tag-container">
          <div>{tag}</div>
        </div>
      </div>
    </div>
  )
}