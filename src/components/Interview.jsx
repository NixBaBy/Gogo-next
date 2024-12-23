import intstyle from "../styles/Interview.module.css";
import { InterviewSmall } from "@/components/InterviewSmall";

export const Interview = () => {
  return (
    <div className={intstyle.inteview}>
      <div className={intstyle.heroInt}>
        <div className={intstyle.tittle}>
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/interview.b47c0f6b.png"
            alt=""
          />
          <p> Ярилцлага</p>
        </div>
        <div className={intstyle.heroInt}>
          <div className={intstyle.heroImg}>
            <img
              src="https://mgl.gogo.mn/newsn/thumbnail/1000/np/2022/10/31/tsas_ulaanbaatar_gudamj_tsastaigudamj_tsastseverelgee_tseverlegee_-16-115542-21288800661.jpeg"
              alt=""
            />
          </div>
          <div className={intstyle.heroBot}>
            <p className={intstyle.Tittle}>Соёлын довтолгоо</p>
            <h2 className={intstyle.h2}>
              СОЁЛЫН ДОВТОЛГОО №66: Хотоо хөлдүү "пицца"-гаар чимчихгүйхэн шинэ
              жилдэх юм сан
            </h2>
            <div className={intstyle.line}></div>
            <p className={intstyle.more}>Дэлгэрэнгүй</p>
          </div>
        </div>
      </div>
      <InterviewSmall />
    </div>
  );
};
