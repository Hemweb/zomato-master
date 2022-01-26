import React from 'react'

function NutritionHeroCard(props) {
    return (
        <div className='w-full h-64 px-7 sm:px-4 '>
            <img src={props.image} className="w-full h-full  object-center rounded-lg" alt='nutrition banner image'/>
        </div>
    )
}

export default NutritionHeroCard
