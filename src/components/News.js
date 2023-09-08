import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
     const [articles, setarticles] = useState([]);
     const [loading, setloading] = useState(true);
     const [page, setpage] = useState(1);
     const [totalResults, settotalResults] = useState(0);

     const FirstCapitalLetter = (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1);
     };

     

  

     const update = async () => {
          props.setProgress(10);
          let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
          setloading(true)
          props.setProgress(30);
          let data = await fetch(url);
          let parseddata = await data.json();
          props.setProgress(70);
          setarticles(parseddata.articles);
          setloading(false);
          settotalResults(parseddata.totalResults);

          props.setProgress(100);
     };

     useEffect(() => {
          document.title = `NewsFirst -${FirstCapitalLetter(props.category)}`;
          update();
     }, []);

     const fetchMoreData = async () => {
         
          
          let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page +1}&pageSize=${props.pageSize}`;
          setpage(page+1)
          let data = await fetch(url);
          let parseddata = await data.json();
          console.log(parseddata);
          setarticles(articles.concat(parseddata.articles))
          settotalResults(parseddata.totalResults)
          
     };

     return (
          <>
               <h1 className="text-center" style={{marginTop:"80px"}}>
                    <b> NewsFirst {FirstCapitalLetter(props.category)} headline</b>
               </h1>
               {loading && <Spin />}

               <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={ <Spin />}
               >
                    <div className="container">
                         <div className="row ">
                              {/* {!loading && */}
                                  { articles.map((element) => {
                                        return (
                                             <div className="col-md-4 my-3" key={element.url}>
                                                  <Newsitem
                                                       title={element.title ? element.title.slice(0, 45) : ""}
                                                       description={element.description ? element.description.slice(0, 88) : ""}
                                                       imageUrl={element.urlToImage}
                                                       author={element.author}
                                                       date={element.publishedAt}
                                                       newsUrl={element.url}
                                                  />
                                             </div>
                                        );
                                   })}
                         </div>
                    </div>
               </InfiniteScroll>
          </>
     );
};

News.defaultProps = {
     country: "in",
     pageSize: 8,
     category: "general",
};

News.propTypes = {
     country: PropTypes.string,
     pageSize: PropTypes.number,
     category: PropTypes.string,
};

export default News;
