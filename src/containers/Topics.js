import React from 'react'
import CountUp from 'react-countup'
import { generateRandomPostNumber } from '../utils/randomGenerator'

import './Lists.css'

const MAX_NR_POSTS = 100
const MIN_NR_POSTS = 10
// a better place to get the data model is to query a backend api

const items = [
  {
    name: 'HTML Techniques',
    nrOfPosts: generateRandomPostNumber(MAX_NR_POSTS, MIN_NR_POSTS),
  },
  {
    name: 'CSS Styling',
    nrOfPosts: generateRandomPostNumber(MAX_NR_POSTS, MIN_NR_POSTS),
  },
  {
    name: 'Flash tutorials',
    nrOfPosts: generateRandomPostNumber(MAX_NR_POSTS, MIN_NR_POSTS),
  },
  {
    name: 'Web something',
    nrOfPosts: generateRandomPostNumber(MAX_NR_POSTS, MIN_NR_POSTS),
  },
  {
    name: 'Site news',
    nrOfPosts: generateRandomPostNumber(MAX_NR_POSTS, MIN_NR_POSTS),
  },
  {
    name: 'Web development',
    nrOfPosts: generateRandomPostNumber(MAX_NR_POSTS, MIN_NR_POSTS),
  },
]

const Item = ({ name, nrOfPosts }) => (
  <li className={`listItem`}>
    <span>{name}</span>
    <span>
      <CountUp start={0} end={nrOfPosts} duration={3} useEasing={true} /> POSTS
    </span>
  </li>
)

class Topics extends React.Component {
  render() {
    return (
      <ul className={`list`}>
        {items.map((item, key) => <Item {...item} key={`topic-${key}`} />)}
      </ul>
    )
  }
}

export default Topics
