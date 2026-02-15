import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
export class News extends Component {

    constructor() {
        super();
        console.log("hello constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=61e2646e36714b04ae9360d2015e77f9&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    handleprevClick = async () => {
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=61e2646e36714b04ae9360d2015e77f9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        {this.setState({loading:true})}
        let data = await fetch(url);
        let parsedData = await data.json()
        

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })

    }

    handlenextClick = async () => {
        console.log("next")
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=61e2646e36714b04ae9360d2015e77f9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
           {this.setState({loading:true})}
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        this.setState({
            page: this.state.page +1,
            articles: parsedData.articles,
            loading:false
        })


    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News