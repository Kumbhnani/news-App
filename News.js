import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitlizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatNews = async () => {
    props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);

    props.setProgress( 100);
  };

  useEffect(() => {
    updatNews();
    document.title = `ApnaNews | ${capitlizeFirstLetter(props.category)}`;
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    updatNews();

    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.api}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  // const hadlePreviusClick = async () => {
  //   setPage(page-1)
  //   updatNews();
  // };

  // const hadleNextClick = async () => {
  //   setPage(page + 1)
  //   updatNews();
  // };

  return (
    <div className="container my-3">
      <h2
        className="text-center"
        style={{ margin: "35pxpx", marginTop: "90px" }}
      >
        ApnaNews - Top {capitlizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loading={<Spinner />}
      >
        <div className="row container">
          {articles.map((element) => {
            return (
              <div className="col-sm-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description : ""}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between buttonlr">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.hadlePreviusClick}
            className="btn btn-dark btn1"
          >
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            onClick={this.hadleNextClick}
            className="btn btn-dark btn2"
          >
            next &rarr;
          </button> */}
      {/* </div> */}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  api: PropTypes.string,
};

export default News;
