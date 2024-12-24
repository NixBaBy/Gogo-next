import watchStyles from "../styles/watch.module.css";
const watchArr = [
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/ck/2024/07/01/hurelsuh-163832-6466452281.jpeg",
    h2: "У.Хүрэлсүх: Ажил хийхгүй, арчаагүй гаруудаа зайлуул",
    share: "659",
    comment: "95",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325996-13122024-1734056515-78578648-battulga1.jpeg",
    h2: "У.Хүрэлсүх: Ажил хийхгүй, арчаагүй гаруудаа зайлуул",
    share: "659",
    comment: "95",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325923-11122024-1733901954-2139079683-MixCollage-11-Dec-2024-03-24-PM-4153.jpg",
    h2: "У.Хүрэлсүх: Ажил хийхгүй, арчаагүй гаруудаа зайлуул",
    share: "10",
    comment: "12",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/np/2024/11/26/5221788/chuulgan_chuulganiihuraldaan-14-125119-9894188141.jpeg",
    h2: "У.Хүрэлсүх: Ажил хийхгүй, арчаагүй гаруудаа зайлуул",
    share: "125",
    comment: "95",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325922-11122024-1733899910-1075170821-24.jpg",
    h2: "У.Хүрэлсүх: Ажил хийхгүй, арчаагүй гаруудаа зайлуул",
    share: "12",
    comment: "5",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/-09122024-1733741859-157089042-cover.jpg",
    h2: "У.Хүрэлсүх: Ажил хийхгүй, арчаагүй гаруудаа зайлуул",
    share: "69",
    comment: "9",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/10/-31102024-1730359302-1623504155-26.jpg",
    h2: "У.Хүрэлсүх: Ажил хийхгүй, арчаагүй гаруудаа зайлуул",
    share: "259",
    comment: "25",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325748-07122024-1733568718-1463344712-zurkh_uul.jpeg",
    h2: "У.Хүрэлсүх: Ажил хийхгүй, арчаагүй гаруудаа зайлуул",
    share: "459",
    comment: "95",
    key: "1",
  },
];
export const Watch = () => {
  return (
    <div className={watchStyles.watch}>
      <div className={watchStyles.containers}>
        <div className={watchStyles.tittle}>
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/play-btn.12e64771.svg"
            alt=""
          />
          <p>Үзэх</p>
        </div>

        <div className={watchStyles.allContainer}>
          {watchArr
            .filter((news) => news.key == 1)
            .map((news) => {
              return (
                <div className={watchStyles.container}>
                  <div className={watchStyles.containerTop}>
                    <img src={news.img} alt="" />
                  </div>
                  <div className={watchStyles.containerBot}>
                    <h2>{news.h2}</h2>
                    <div className={watchStyles.icon}>
                      <div className={watchStyles.share}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                        </svg>
                        <p>{news.share}</p>
                      </div>
                      <div className={watchStyles.comment}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                        </svg>
                        <p>{news.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
