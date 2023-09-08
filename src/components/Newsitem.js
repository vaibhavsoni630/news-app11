import React from 'react'

const Newsitem =(props)=> {
    
 
    let {title,description, imageUrl,newsUrl,author ,date } = props;
    return (
      <div>
        <div className="card  " style={{width: "18rem"}}>
            <img src={!imageUrl?"https://thumbs.dreamstime.com/b/grunge-textured-vintage-style-national-indian-flag-india-independence-day-grunge-national-indian-flag-india-independence-day-120219128.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
 
}

export default Newsitem
