import TextExpander from "@/app/_components/ui/TextExpander";

function TableDetails({
  seatName,
  paragraph,
  mainText1,
  mainText2,
  mainText3,
  mainText4,
}) {
  return (
    <div className="table-main__text-box">
      <h2 className="heading-1 gold">{seatName}</h2>
      <p className="paragraph">{paragraph}</p>
      <h3 className="heading-3">Features</h3>
      <ul className="paragraph-list">
        <li>{mainText1}</li>
        <li>{mainText2}</li>
        <li>{mainText3}</li>
        <li>{mainText4}</li>
      </ul>
    </div>
  );
}

export default TableDetails;
