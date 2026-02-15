import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {
  
    constructor(){
        super();
        console.log("hello constructor");
        this.state={
           articles:[],
           loading:false
        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=61e2646e36714b04ae9360d2015e77f9"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className="container my-3">
           <h2>NewsMonkey - Top Headlines</h2>
           <div className="row">
            {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title?element.title.slice(0,88):""} description={element.description?element.description.slice(0,45):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
               </div>

            })}
              
                
           </div>
         
        
      </div>
    )
  }
}

export default News