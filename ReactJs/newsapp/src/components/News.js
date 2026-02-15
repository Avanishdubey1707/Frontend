import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {
    articles=[
 {
 "source": {
"id": null,
"name": "Slashdot.org"
},
"author": "feedfeeder",
"title": "Tesla CarPlay is coming but it's reportedly being held back by low iOS 26 adoption numbers",
"description": "We're still waiting for Apple CarPlay compatibility for Tesla EVs, but it's been pushed back thanks to a slight hitch with iOS 26, according to Bloomberg 's Mark Gurman. In the latest Power On newsletter, Gurman said that Tesla's plans to adopt CarPlay have b…",
"url": "https://slashdot.org/firehose.pl?op=view&amp;id=180796406",
"urlToImage": null,
"publishedAt": "2026 02 15T17:52:50Z",
"content": "We're still waiting for Apple CarPlay compatibility for Tesla EVs, but it's been pushed back thanks to a slight hitch with iOS 26, according to Bloomberg's Mark Gurman. In the latest Power On newslet… [+1540 chars]"
},
 {
 "source": {
"id": null,
"name": "Notebookcheck.net"
},
"author": "Daniel Zlatev",
"title": "Tesla launches 0.99% Model Y Premium APR financing deal amid 17% January sales slump",
"description": "As Tesla's January sales are down 17% year on year and it reported its first ever annual revenue decline, it is trying to turn things around, at least in the US. The 2026 Model Y Premium trims are now getting their first APR financing deal for the year.",
"url": "https://www.notebookcheck.net/Tesla launches 0 99 Model Y Premium APR financing deal amid 17 January sales slump.1227280.0.html",
"urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/Model Y apr financing.jpg",
"publishedAt": "2026 02 15T17:12:00Z",
"content": "Faced with an unprecedented sales slump and its first annual drop in revenue after the federal tax credit expired last year, Tesla is speeding up its own incentives program to try and turn its fortun… [+1695 chars]"
},
 {
 "source": {
"id": "techcrunch",
"name": "TechCrunch"
},
"author": "Kirsten Korosec",
"title": "TechCrunch Mobility: Rivian's savior | TechCrunch",
"description": "Welcome back to TechCrunch Mobility — your central hub for news and insights on the future of transportation.",
"url": "https://techcrunch.com/2026/02/15/techcrunch mobility rivians savior/",
"urlToImage": "https://techcrunch.com/wp content/uploads/2025/07/250522 ANASTASIA BENSON GOOGLE MAPS AEB08056 FINAL.jpg?resize=1200,790",
"publishedAt": "2026 02 15T17:06:00Z",
"content": "Welcome back to TechCrunch Mobility your central hub for news and insights on the future of transportation. To get this in your inbox, sign up here for free just click TechCrunch Mobility!\r\nWe are in… [+8144 chars]"
},
 {
 "source": {
"id": null,
"name": "PhoneArena"
},
"author": "Johanna Romero",
"title": "Apple Maps might be the reason you're still waiting for Tesla CarPlay",
"description": "A new report reveals why the Tesla CarPlay launch is hitting delays.",
"url": "https://www.phonearena.com/news/apple maps might be the reason youre still waiting for tesla carplay_id178204",
"urlToImage": "https://m cdn.phonearena.com/images/article/178204 wide two_1200/Apple Maps might be the reason youre still waiting for Tesla CarPlay.jpg",
"publishedAt": "2026 02 15T16:06:29Z",
"content": "A discussion is a place, where people can voice their opinion, no matter if it\r\n is positive, neutral or negative. However, when posting, one must stay true to the topic, and not just share some\r\n ra… [+1082 chars]"
},
 {
 "source": {
"id": "breitbart news",
"name": "Breitbart News"
},
"author": "Lucas Nolan",
"title": "'Your AI Hates Whites & Asians:' Elon Musk Slams Anthropic After Company's $30 Billion Funding Round",
"description": "Tech tycoon Elon Musk publicly slammed AI rival Anthropic this week, calling its AI models \"misanthropic and evil\" in a post on his social media platform X. According to Musk, Anthropic's AI \"hates Whites & Asians, especially Chinese, heterosexuals and men.\"\n…",
"url": "https://www.breitbart.com/tech/2026/02/15/your ai hates whites asians elon musk slams anthropic after companys 30 billion funding round/",
"urlToImage": "https://media.breitbart.com/media/2026/02/Elon Musk targets anthropic 640x335.jpg",
"publishedAt": "2026 02 15T14:59:50Z",
"content": "Tech tycoon Elon Musk publicly slammed AI rival Anthropic this week, calling its AI models “misanthropic and evil” in a post on his social media platform X. According to Musk, Anthropic’s AI “hates W… [+4657 chars]"
}
    ]
    constructor(){
        super();
        console.log("hello constructor");
        this.state={
           articles: this.articles,
           loading:false
        }
    }
  render() {
    return (
      <div className="container my-3">
           <h2>NewsMonkey - Top Headlines</h2>
           <div className="row">
               <div className="col-md-4">
                    <Newsitem title="mytitle" description="mydesc" imageUrl="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_60/lsci/db/PICTURES/CMS/104900/104926.jpg" newsUrl="TODO"/>
               </div>
                <div className="col-md-4">
                    <Newsitem title="mytitle" description="mydesc"/>
               </div>
                <div className="col-md-4">
                    <Newsitem title="mytitle" description="mydesc"/>
               </div>

           </div>
         
        
      </div>
    )
  }
}

export default News