import React from 'react'


function CardPage({ img, name, info, img2, starttime, price, detail }) {
  return (
    <div className="container ">
      <div className='row'>
        <div className="card my-4 mx-2 h-100 ">
          <div className="card-body p-2  ">
            <img src={img} className=" h-50 w-100 rounded" />
            <h5 className="card-title">{name}</h5>
            <p className="card-text lead">{info}</p>
            <p>{starttime}</p>
            <p className="text-center fs-5"> Only at ₹ {price}/-</p>
            <b>{detail}</b>
            <hr></hr>
            <center>
              <button className="btn btn-dark ">know more</button>
            </center>
          </div>
        </div>
      </div>
    </div>



    // <div className="container ">
    //   <div className="row mx-auto">
    //     <div ClassName="col-md-4" style={{ width: '400px' }}>
    //       <img src={img} ClassName="card-img-top" alt="..." />
    //       <div ClassName="card-body">
    //         <h3 ClassName="card-title">{name}</h3>
    //         <p ClassName="card-text">{info}</p>
    //         <div className="d-flex flex-row">
    //           <img src={img2} className="h-25" />
    //           <p className="card-text">
    //             {starttime}
    //           </p>
    //         </div>
    //         <p className="fs-2">
    //           Only at {price}
    //         </p>
    //       </div>
    //       <b>{detail}</b>
    //       <hr/>
    //       <button className="btn bg-dark text-white ">Know More</button>
          
    //     </div>
    //   </div>
    // </div>
  )
}

export default CardPage

// <div className="container">
// <div className="row">
// <div className="col-md-4"></div>
// <div className="col-md-4"></div>
// <div className="col-md-4"></div>
// </div>
// </div> 



