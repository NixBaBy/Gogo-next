import small from "../styles/InterviewSmall.module.css";
const smallArr = [
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/np/2024/11/19/5221475/gutal%20ohin-175000-19154631021-180406-2004306656.jpeg",
    name: "ГУТАЛ",
    tittle: "ГУТАЛ: #32: “Хөхний чинь зураг байгаа шүү, хөөрхөн өө",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/11/-01112024-1730454760-2040900969-laa-61.jpg",
    name: "бизнес",
    tittle: "Т.Диймаа: Хүн галын эрчмээ лаагаар нөхөх боломжтой",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/10/324302-27102024-1730039775-1102321352-0P3A16781.jpg",
    name: "Сайд",
    tittle: "Элчин сайд Ина Марчюлёните: Залуусыг уриалж, зөв зүйлд чиглүүлж ",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/10/323921-16102024-1729077905-1946325810-B61A3286.MOV_snapshot_00.06.3601.jpg",
    name: "ГУТАЛ",
    tittle: "ГУТАЛ: #32: “Хөхний чинь зураг байгаа шүү, хөөрхөн өө",
  },
];
export const InterviewSmall = () => {
  return (
    <div className={small.interviewSmall}>
      {smallArr.map((news) => {
        return (
          <div className={small.smallInt}>
            <img src={news.img} alt="" />
            <div className={small.smallBot}>
              <p className={small.name}>{news.name}</p>
              <p className={small.tittle}>{news.tittle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
