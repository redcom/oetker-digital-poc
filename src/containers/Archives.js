import React from 'react'
import { generateItems } from '../utils/randomGenerator'
// reuse the List style
import './Lists.css'

const Item = ({ name, img }) => {
  // load the image using require which will move the assets into build folder and fingerprint them
  const image = require('../assets/' + img + '.jpg')
  return (
    <li className={`listItem`}>
      <span>
        <img src={image} alt={`${img}`} />
      </span>
      <span>{name}</span>
    </li>
  )
}

// Stateless component because it is a presentational component only
const Archives = () => {
  const items = generateItems(5) // generate 5 items
  return (
    <ul className={`list`}>
      {items.map((item, key) => <Item {...item} key={`archive-${key}`} />)}
    </ul>
  )
}

export default Archives
