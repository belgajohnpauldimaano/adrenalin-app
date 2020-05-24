import React from 'react'

import './QuestionList.sass';

import { getMMDDYYYY } from './../../../utils';

export function QuestionList({ items }) {
  return (
    <div className="detail-list-container">
      {items.map((item, key) => {
        return <div key={key} className="detail-item">
          <h2>{item.title}</h2>
          <div className="date">
            &mdash; {getMMDDYYYY(item.date)}
          </div>
          <div className="question">{item.text}</div>
        </div>
      })}
    </div>
  )
}