import newsstyles from "../styles/NewsDate.module.css";
const newsArr = [
  {
    tittle: "",
    line: "",
    date: "12 сарын 22",
  },
  {
    tittle: "",
    line: "",
    date: "12 сарын 21",
  },
  {
    tittle: "",
    line: "",
    date: "12 сарын 20",
  },
  {
    tittle: "",
    line: "",
    date: "12 сарын 19",
  },
  {
    tittle: "",
    line: "",
    date: "12 сарын 18",
  },
];
export const NewsDate = () => {
  return (
    <div className={newsstyles.allNews}>
      <div className={newsstyles.newsDate}>
        <div className={newsstyles.newsTit}>
          <h3 className={newsstyles.h3}>Өнөөдөр</h3>
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/todaynews.6ba1d8b2.png"
            alt=""
          />
        </div>
        <div className={newsstyles.line}></div>
        <p className={newsstyles.p}>12 сарын 23</p>
      </div>
      {newsArr.map((news) => {
        return (
          <div className={newsstyles.newsDate1}>
            <div className={newsstyles.newsTit}>
              <h3 className={newsstyles.h3}>{news.tittle}</h3>
            </div>
            <div className={newsstyles.line}>{news.line}</div>
            <p className={newsstyles.p}>{news.date}</p>
          </div>
        );
      })}
    </div>
  );
};
