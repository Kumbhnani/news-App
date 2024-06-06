import React from 'react'

  const NewsItem = (props) =>{

    var {title, description, imgurl,  newsurl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card shadow p-3 mb- bg-light rounded pt-4">
        <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger" style={{left: '20%',zIndex : '1'}}> {source}</span>
          <img className="card-img-top" src={!imgurl ? "https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=600" : imgurl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-info'>-{!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-sm btn-dark">See More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem