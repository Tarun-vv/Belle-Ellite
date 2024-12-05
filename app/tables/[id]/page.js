import { getTable } from "@/app/_lib/data-service";
import Link from "next/link";
import TableDetails from "./TableDetails";
import TableImgBox from "./TableImgBox";
import TableForm from "./TableForm";
import { auth } from "@/app/_lib/auth";

async function page({ params }) {
  const table = await getTable(params.id);
  const {
    imgUrl2,
    seatName,
    paragraph,
    mainText1,
    mainText2,
    mainText3,
    mainText4,
    price,
  } = table;

  const session = await auth();

  console.log(table);
  return (
    <section className="section-table-main">
      <div className="container grid grid--2--cols gap-md u-margin-bottom-lg">
        <TableImgBox imgUrl={imgUrl2} />
        <TableDetails
          seatName={seatName}
          paragraph={paragraph}
          mainText1={mainText1}
          mainText2={mainText2}
          mainText3={mainText3}
          mainText4={mainText4}
        />
      </div>
      <div className="container">
        <h3 className="heading-3">Reserve Your Table at Belle Étoile</h3>
        <h2 className="heading-2">
          Experience Exceptional Dining with Every Reservation
        </h2>
        {session?.user ? <TableForm price={price} /> : <button>Sign in</button>}
      </div>
    </section>
  );
}

export default page;
