import React from 'react'
import { UnorderedList } from '../../SubComponents/UnorderedList'
import { ImgCard } from '../../SubComponents/ImgCard'
import './Likes.css'
const likesArr = [
  {
    'My favorite color is green.': [
      'Color',
      'https://www.factzoo.com/sites/all/img/reptiles/turtle/green-turtle-head.jpg',
    ],
  },
  {
    'MotoGP makes my heart race.': [
      'Sport',
      'https://i2.wp.com/s-media-cache-ak0.pinimg.com/736x/6d/bb/fc/6dbbfc31cd76d841548bdeb9e72f4788--marc-marquez-vs.jpg?resize=720%2C427&ssl=1',
    ],
  },
  {
    'Military discipline guides me.': [
      'Discipline',
      'https://s3-us-west-2.amazonaws.com/mgx-photos/ChrisArmy.jpg',
    ],
  },
  {
    'My didgeridoo moves me.': [
      'Instrument',
      'https://www.thepoweredit.com/wp-content/uploads/2015/08/didgeridoo-player.jpg',
    ],
  },
]
const likesCards = likesArr.map(element => {
  const li = Object.keys(element)
  const key = Object.values(element)[0][0]
  const imgUrl = Object.values(element)[0][1]
  return (
    <div key={key} className='Margin-bottom' id='Likes-line-item-div'>
      <ImgCard
        containerClassName='Card-container-shadow'
        containerId=''
        imgClassName='Card-container-inset Image'
        imgId='Likes-card-img'
        src={imgUrl}
        alt='stock photo'
        cardContent={li}
        cardContentId='Likes-card-content'
        cardContentClass='nanumFont'
      />
    </div>
  )
})

export const Likes = props => {
  return (
    <div className={props.className} id='Likes-div'>
      <UnorderedList ulId='Likes-list' content={likesCards} />
    </div>
  )
}
