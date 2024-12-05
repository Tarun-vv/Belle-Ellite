import Image from "next/image";
import Link from "next/link";

function TableItem({ table }) {
  const { id, imgUrl, seatName, text1, text2, text3, price } = table;
  return (
    <div className="table grid grid--2--cols gap-sm row-gap-md">
      <div className="table__img-box relative">
        <Image
          src={imgUrl}
          fill
          // placeholder="blur"
          quality={90}
          alt="2 seat table"
          className="object-cover"
        />
      </div>
      <div className="table__text-box">
        <h3 className="heading-3 u-margin-bottom-sm">{seatName}</h3>
        <ul className="paragraph-list ">
          <li className="font-sm">{text1}</li>
          <li className="font-sm">{text2}</li>
          <li className="font-sm">{text3}</li>
        </ul>
      </div>
      <p className="table__price-box">
        Just for <span className="gold">${price}</span>
      </p>
      <Link href={`/tables/${id}`} className="btn text-center">
        Book now
      </Link>
    </div>
  );
}

export default TableItem;
