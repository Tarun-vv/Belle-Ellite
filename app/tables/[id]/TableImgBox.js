import Image from "next/image";

function TableImgBox({ imgUrl }) {
  return (
    <div className="table-main__img-box relative">
      <Image
        src={imgUrl}
        fill
        className="object-cover table-main__img"
        alt="table"
      />
    </div>
  );
}

export default TableImgBox;
