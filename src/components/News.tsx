import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import SampleNews from '../samplenews.json'
// import Spinner from './Spinner';
import * as utility from '../common/utilityService'
// import NavBar from './NavBar';
// import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
// import Avatar from '@mui/material/Avatar';



interface NewsProps {
    pageSize: number,
    category: string,
    key: string,
    country?: string;
}

interface NewsState {
    articles: any,
    loading: boolean,
    page: number,
    country: string,
    totalResults: number
}


export default class News extends Component<NewsProps, NewsState> {

    skeleton = new Array(10).fill(0)

    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general',
        // articles: any
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        key: PropTypes.string
    }

    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "French government rejects union demand to rethink pension bill - Reuters",
            "description": "President Emmanuel Macron's government on Tuesday rejected a new demand by unions to rethink a deeply unpopular pension bill, infuriating labour leaders who said the government must find a way out of the crisis.",
            "url": "https://www.reuters.com/world/europe/paris-police-very-vigilant-about-potential-violence-ahead-new-round-pension-2023-03-28/",
            "urlToImage": "https://www.reuters.com/resizer/-9uubUtwVpA0QW9zWGHoxPLwhBk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PW5QFB7KPVL4HLO3EMDE3LUJFM.jpg",
            "publishedAt": "2023-03-28T12:20:00Z",
            "content": "NANTES/PARIS, France, March 28 (Reuters) - President Emmanuel Macron's government on Tuesday rejected a new demand by unions to rethink a deeply unpopular pension bill, infuriating labour leaders who… [+3482 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Gerardo Lemos, Omar Astorga, Karol Suarez",
            "title": "Blaze kills at least 39 people at migrant detention center near Mexico-US border - CNN",
            "description": "At least 39 people died in a fire at a migration center in Mexico's northern border city of Ciudad Juarez, officials said Tuesday.",
            "url": "https://www.cnn.com/2023/03/28/americas/mexico-migrants-fire-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328075057-01-mexico-inm-fire-032723.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-28T12:00:00Z",
            "content": "At least 39 people died in a fire at a migration center in Mexicos northern border city of Ciudad Juarez, officials said Tuesday.\r\nAuthorities said the fire at the office of National Migration Instit… [+1409 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Healthday.com"
            },
            "author": "Dennis Thompson",
            "title": "Weight Loss Helps Your Heart Even If Some Weight Comes Back - HealthDay News",
            "description": "TUESDAY, March 28, 2023 (HealthDay News) -- It can be downright discouraging to work hard to lose 10 pounds, only to regain a few later.But don’t be downhearted -- a new evidence review says the important heart health benefits of weight loss are sustained eve…",
            "url": "https://consumer.healthday.com/heart-rate-and-weight-loss-2659645645.html",
            "urlToImage": "https://consumer.healthday.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTg0NjgxOS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczMjgxMTEzOX0.aN8TNX31epaI8pWAWDovjjHFMILoZV8pivSm4iIy9e0/image.jpg?width=1200&height=600&coordinates=0%2C66%2C0%2C67",
            "publishedAt": "2023-03-28T11:49:25Z",
            "content": "TUESDAY, March 28, 2023 (HealthDay News) -- It can be downright discouraging to work hard to lose 10 pounds, only to regain a few later.\r\nBut donât be downhearted -- a new evidence review says the … [+7520 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Richard Pollina",
            "title": "New research suggests physical exercise has 'little' mental benefits - New York Post ",
            "description": "Analyzing data from over 100 individual trials involving more than 11,000 “healthy participants” found “inconclusive evidence” that physical exercise improves cognitive abil…",
            "url": "https://nypost.com/2023/03/28/new-research-suggests-physical-exercise-has-little-mental-benefits/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/Workout-4.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-03-28T11:20:00Z",
            "content": "Need a brain boost? Fitness may not be for you!\r\nIt is more common than not to hear exercising will provide a range of mental health benefits, but new research suggests there is “little evidence” sho… [+4989 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Jeffrey Clark",
            "title": "Kamala Harris stumbles over her words in Ghana speech: 'A lot of that work is the work that I am here to do' - Fox News",
            "description": "Kamala Harris delivered another halting, repetitive speech, this time in Ghana as part of the Biden administration's push to build closer ties with Africa.",
            "url": "https://www.foxnews.com/media/kamala-harris-stumbles-words-ghana-speech-work-i-am-here-do",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/2022-07-18T200935Z_686354063_RC2GEV9LSIB4_RTRMADP_3_USA-RACE-NAACP-HARRIS.jpg",
            "publishedAt": "2023-03-28T11:08:00Z",
            "content": "Vice President Kamala Harris\r\n stumbled over her words during a speech in Ghana Monday, serving up yet another word salad on the world stage. \r\n\"There are a number of things on the issue of the econo… [+2207 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Bertha Coombs",
            "title": "Walgreens revenue rises despite sharp decline in demand for Covid tests, vaccines - CNBC",
            "description": "Walgreens' quarterly results topped Wall Street's expectations, even as profit declined from a year earlier.",
            "url": "https://www.cnbc.com/2023/03/28/walgreens-wba-q2-earnings.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107206500-1678454271932-gettyimages-1472409579-walgreenswouldnotdispenseanabortionpillin21states008.jpeg?v=1680001370&w=1920&h=1080",
            "publishedAt": "2023-03-28T11:02:50Z",
            "content": "Walgreens Boots Alliance on Tuesday said its quarterly profit declined more than 20%, driven by sharply lower Covid vaccine volumes and test sales compared to last winter, when the Covid Omicron vari… [+2688 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Thomas Schlachter, Homero De la Fuente",
            "title": "March Madness: South Carolina advances to third straight Final Four appearance - CNN",
            "description": "The South Carolina Gamecocks have continued their incredible unbeaten run with an 86-75 win against the Maryland Terrapins -- setting up a blockbuster Final Four clash against Caitlin Clark and the Iowa Hawkeyes.",
            "url": "https://www.cnn.com/2023/03/28/sport/south-carolina-march-madness-final-four-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328095941-02-south-carolina-march-madness-final-four.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-28T10:54:00Z",
            "content": "The South Carolina Gamecocks have continued their incredible unbeaten run with an 86-75 win against the Maryland Terrapins setting up a blockbuster Final Four clash against Caitlin Clark and the Iowa… [+2119 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Suzanne O'Halloran",
            "title": "Silicon Valley Bank’s rapid withdrawals, management missteps created perfect storm - Fox Business",
            "description": "The collapse of Silicon Valley Bank appears to have been a perfect storm from failures of management, hyped up social media, risky liabilities and the speed of digital banking.",
            "url": "https://www.foxbusiness.com/markets/silicon-valley-banks-rapid-withdrawals-management-missteps-created-perfect-storm",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/03/0/0/Fed-Chair-Jerome-Powell-made-about-the-rapid-withdrawals.gif?ve=1&tl=1",
            "publishedAt": "2023-03-28T10:10:28Z",
            "content": "The run on Silicon Valley Bank (SVB) was not your average bank run; it was so fast, it shocked even the most seasoned regulators as depositors siphoned $42 billon from the bank in just hours, leaving… [+3137 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Push Square"
            },
            "author": "Liam Croft",
            "title": "Capcom Fans Split Over What Classic Game Should Be Remade Next - Push Square",
            "description": "Dino Crisis vs. Resident Evil",
            "url": "https://www.pushsquare.com/news/2023/03/capcom-fans-split-over-what-classic-game-should-be-remade-next",
            "urlToImage": "https://images.pushsquare.com/e49a2c179219e/1280x720.jpg",
            "publishedAt": "2023-03-28T09:15:00Z",
            "content": "With Capcom's remaking efforts surrounding the classic Resident Evil 4 now complete, fans are predicting the company will move on next to either Dino Crisis or stick with its survival horror franchis… [+1433 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Usf.edu"
            },
            "author": "Daniel Chang",
            "title": "Pay up, kid? An ER's error sends a 4-year-old to collections - WUSF Public Media",
            "description": "A Florida woman tried to dispute an emergency room bill, but the hospital and collection agency refused to talk to her — because it was her child's name on the bill, not hers.",
            "url": "https://wusfnews.wusf.usf.edu/2023-03-28/pay-up-kid-an-ers-error-sends-a-4-year-old-to-collections",
            "urlToImage": "https://npr.brightspotcdn.com/dims4/default/71d5e11/2147483647/strip/true/crop/4000x2100+0+450/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F03%2F27%2Fbotm_march2023_0027-c1751b96f391d95bb3d8578e250e1eca64f80b07.jpg",
            "publishedAt": "2023-03-28T09:00:00Z",
            "content": "Dr. Sara McLin thought she made the right choice by going to an in-network emergency room near her Florida home after her 4-year-old burned his hand on a stove last Memorial Day weekend.\r\nHer family … [+10018 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Two fishermen caught cheating at Ohio tournament plead guilty - CBS News",
            "description": "Two men accused of stuffing fish with lead weights and fish fillets to try to win an Ohio fishing tournament last fall have pleaded guilty to charges including cheating.",
            "url": "https://www.cbsnews.com/news/fishing-tournament-cheating-guilty-jacob-runyan-chase-cominsky/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/28/ff9d6277-ccac-4fd2-82f0-a11ed18142c9/thumbnail/1200x630/9c7e46713ea82559e102445a878a0669/ap22299566880723.jpg",
            "publishedAt": "2023-03-28T08:56:06Z",
            "content": "Two men accused of stuffing fish with lead weights and fish fillets in an attempt to win thousands of dollars in an Ohio fishing tournament last fall pleaded guilty Monday to charges including cheati… [+2247 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Trump Warns Of Potential Death & Destruction If He Faces Charges In New York City Probe | Trump News - CNN-News18",
            "description": "Trump Warns Of Potential Death & Destruction If He Faces Charges In New York City Probe | Trump NewsRatcheting up his already-incendiary rhetoric, former pre...",
            "url": "https://www.youtube.com/watch?v=WcMxdvKIpmM",
            "urlToImage": "https://i.ytimg.com/vi/WcMxdvKIpmM/maxresdefault_live.jpg",
            "publishedAt": "2023-03-28T08:43:55Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "March Madness 2023 picks: Experts predict NCAA Tournament Final Four winners, national champion - CBS Sports",
            "description": "Our experts give their opinions on which team will cut down the nets at the end of the Big Dance",
            "url": "https://www.cbssports.com/college-basketball/news/march-madness-2023-picks-experts-predict-ncaa-tournament-final-four-winners-national-champion/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/27/40be04be-af86-4160-8795-bdc756d1fb44/thumbnail/1200x675/684c7e8ac21874f2313d048523349998/huskies.jpg",
            "publishedAt": "2023-03-28T06:07:00Z",
            "content": "Though the first two weekends of the 2023 NCAA Tournament were riddled with upsets, you would have done well to listen to listen to our expert picks. I dominated straight-up picks during March Madnes… [+7034 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Stephanie Nolasco, Ashley Papa",
            "title": "Prince Harry in London: Prince William, King Charles have zero plans to give royal 'warm reception': experts - Fox News",
            "description": "In his memoir, \"Spare,\" Prince Harry blamed an overly aggressive press for the 1997 death of his mother, Princess Diana, and also accused the media of hounding his wife Meghan Markle.",
            "url": "https://www.foxnews.com/entertainment/prince-harry-london-prince-william-king-charles-zero-plans-give-royal-warm-reception",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/Getty_PrinceHarry.jpg",
            "publishedAt": "2023-03-28T06:00:00Z",
            "content": "Prince Harry made a surprise appearance in London, but a reconciliation with Prince William and King Charles III is not happening, royal experts insist.\r\nThe Duke of Sussex was in court Monday as the… [+8632 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "Sam Reynolds",
            "title": "Disney Lays Off Metaverse Team: WSJ - CoinDesk",
            "description": "Fifty people have lost their jobs as Disney disbands its next-generation storytelling and consumer experiences unit as part a company-wide staff reduction.",
            "url": "https://www.coindesk.com/business/2023/03/28/disney-lays-off-metaverse-team-wsj/",
            "urlToImage": "https://www.coindesk.com/resizer/ncWXw-zw8Sf5T9oxZwE8bwg4L9U=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/NMUXTTQDRJGQ5KZXRXF7UZBWJA.jpg",
            "publishedAt": "2023-03-28T05:32:00Z",
            "content": "Disney is questioning the continued value of Web3.\r\nThe company is in the process of laying off 7,000 staff in an attempt to control costs and develop what CEO Bob Iger calls a streamlined business. … [+1085 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "P!nk, Kelly Clarkson, Pat Benatar & Neil Giraldo Perform At The 2023 iHeartRadio Music Awards - iHeartRadio",
            "description": "If You're New Subscribe ► http://bit.ly/1Jy0DbOP!nk, Kelly Clarkson, Pat Benatar & Neil Giraldo Perform At The 2023 iHeartRadio Music AwardsStream the full s...",
            "url": "https://www.youtube.com/watch?v=3W6p5TTbELY",
            "urlToImage": "https://i.ytimg.com/vi/3W6p5TTbELY/maxresdefault.jpg",
            "publishedAt": "2023-03-28T04:27:44Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "Packers, Jets make progress toward an Aaron Rodgers deal - NBC Sports",
            "description": "The most tangible evidence yet of a thawing of the ice between the Packers and Jets came on Monday, when Green Bay G.M. Brian Gutekunst admitted his team won’t necessarily get a first-round pick for quarterback Aaron Rodgers. That statement fairly can be inte…",
            "url": "https://profootballtalk.nbcsports.com/2023/03/28/packers-jets-make-progress-toward-an-aaron-rodgers-deal/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/03/GettyImages-1245944622-e1679976800769.jpg",
            "publishedAt": "2023-03-28T04:14:00Z",
            "content": "The most tangible evidence yet of a thawing of the ice between the Packers and Jets came on Monday, when Green Bay G.M. Brian Gutekunst admitted his team wont necessarily get a first-round pick for q… [+2319 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Elizabeth Wagmeister",
            "title": "‘The Bachelor’ Season 27 Finale: Is Zach Shallcross Engaged to Gabi or Kaity? (SPOILERS) - Variety",
            "description": "SPOILER ALERT: Do not read ahead, if you have not watched “The Bachelor” Season 27 finale, which aired on Monday, March 27 on ABC. 27 seasons later, “The Bachelor” is still …",
            "url": "https://variety.com/2023/tv/news/the-bachelor-season-27-finale-zach-shallcross-1235565339/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/03/Bachelor-Finale-Zack-Shallcross-Kaity-Gabi-2.jpg?w=1000&h=562&crop=1",
            "publishedAt": "2023-03-28T03:45:00Z",
            "content": "SPOILER ALERT: Do not read ahead, if you have not watched “The Bachelor” Season 27 finale, which aired on Monday, March 27 on ABC.\r\n27 seasons later, “The Bachelor” is still handing out his final ros… [+5416 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "Nikki McCann Ramirez",
            "title": "Trump Says He Didn’t Call for ‘Death and Destruction,’ Simply Voiced His Concern It Would Happen - Rolling Stone",
            "description": "In an interview with Fox News, Trump lashed out at prosecutors, investigators, and potential 2024 opponents",
            "url": "https://www.rollingstone.com/politics/politics-news/trump-fox-sean-hannity-interview-manhattan-investigation-1234704656/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/03/Trump-Hannity-Interview.jpg?w=1600&h=900&crop=1",
            "publishedAt": "2023-03-28T03:27:19Z",
            "content": "After a months-long absence, Former President Donald Trump returned to Fox News on Monday for an extended interview with host Sean Hannity. \r\nAs Trump gasses up his 2024 campaign, the former presiden… [+4168 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Philadelphia Inquirer"
            },
            "author": "Ryan W. Briggs",
            "title": "Bristol plant that spilled chemicals into Philly's water supply had other mishaps over the last decade - The Philadelphia Inquirer",
            "description": "The plant is among a cluster of industrial companies along the Delaware River that was home to chemical giants since the early 20th century.",
            "url": "https://www.inquirer.com/news/trinseo-chemical-spill-delaware-river-bristol-township-20230327.html",
            "urlToImage": "https://www.inquirer.com/resizer/MUv7Mz2vAaSqVriGuDSDep8izu0=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/KR2VQIF7TVCBLDNRXPPRY2G46A.jpg",
            "publishedAt": "2023-03-28T02:40:50Z",
            "content": "A chemical plant in Bristol that authorities said caused a toxic spill, threatening Philadelphias drinking water, has a long history of mishaps including at least four recent contamination incidents.… [+4758 chars]"
        }
    ]


    constructor(props: NewsProps) {
        super({ ...News.defaultProps, ...props });
        this.state = {
            articles: [{}],
            loading: false,
            page: 1,
            totalResults: 0,
            country: props.country || News.defaultProps.country,

        }
        document.title = `${utility.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=017405e53ac34dd484db138c2f272c02&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });


        // with api call
        let data = await fetch(url);
        let parsedData = await data.json();

        // sample response from json
        // let data = SampleNews;
        // let parsedData = data;

        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });

    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=017405e53ac34dd484db138c2f272c02&page=1&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });

    }

    handlePrevClick = async () => {

        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {

        this.setState({ page: this.state.page + 1 })
        this.updateNews();

    }

    render() {

        return (
            <>

                <div className='container my-3'>
                    <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {utility.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                    {/* {this.state.loading && <Spinner />} */}

                    <div className="row">

                        {this.state.loading ? (
                            this.skeleton.map((element: any) => {
                                return <div className="col-md-3">
                                    <Skeleton variant="rectangular" width="100%">
                                        <div style={{ paddingTop: '25%' }} />
                                    </Skeleton>
                                </div>
                            })

                        ) : (

                            this.state.articles.map((element: any) => {
                                return <div className="col-md-3" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}
                                        author={element.author} date={element.publishedAt} source={element?.source?.name} />
                                </div>
                            })
                        )}

                    </div>

                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                    </div>






                </div>
            </>
        )
    }
}
