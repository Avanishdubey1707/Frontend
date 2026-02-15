import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description ,imageUrl,newsUrl}=this.props;
        return (
            <div className="my-3">
                
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/400200/400228.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem