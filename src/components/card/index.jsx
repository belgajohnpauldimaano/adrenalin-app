import React from 'react'
import { Link } from 'react-router-dom';

import CardImage from './card-image';
import './Card.sass';

export default function Card({ tag, longTitle, thumbImg, slug }) {
  return (
    <div className="card-container">
      <CardImage tag={tag} thumbImg={thumbImg} />
      <h3>{longTitle}</h3>
      <Link className="card-link" to={`/${slug}`} >&mdash; VIEW CASE STUDY</Link>
    </div>
  )
}