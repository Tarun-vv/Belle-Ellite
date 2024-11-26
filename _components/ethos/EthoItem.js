import { HiMiniSparkles } from "react-icons/hi2";

function EthoItem({ etho }) {
  const { svg, heading, content } = etho;
  return (
    <div className="etho__item">
      <div className="etho__icon-box">{svg}</div>
      
      <div className="etho__text-box">
        <h4 className="heading-4 u-margin-bottom-md ">{heading}</h4>
        <p className="paragraph">{content}</p>
      </div>
    </div>
  );
}

export default EthoItem;
