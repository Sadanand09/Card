import React from 'react'
import CardPage from '../Components/CardPage'
import ConfigData from '../utils/ConfigData.json'

function TeamPage() {
  // console.log(ConfigData);
  return (
    <div>
      <div className='d-flex flex-row justify-content-around'>
        {
          ConfigData.map((data, index) => {
            return (
              <div className='CardPage-card p-5'>
                <CardPage img={data.img} name={data.name} info={data.info} img2={data.img2} starttime={data.starttime} price={data.price} detail={data.detail}/>
              </div>
            )

          })
        }
      </div>
    </div>


  )
}

export default TeamPage
