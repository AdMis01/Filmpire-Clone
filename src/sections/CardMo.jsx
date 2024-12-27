import React from 'react'

const CardMo = ({movie}) => {
  return (
    <a key={movie["#IMDB_ID"]} href={movie["#IMDB_URL"]} className='w-[200px] block overflow-hidden m-4 text-center'>
        <img src={movie["#IMG_POSTER"]} alt={"zdjecie"+movie["#TITLE"]} width={"100%"} height={400} className='rounded-xl' />
        <p className='text-base'>{movie["#TITLE"]}</p>
        <p className='text-sm'>Ranking: #{movie["#RANK"]}</p>
    </a>  )
}

export default CardMo