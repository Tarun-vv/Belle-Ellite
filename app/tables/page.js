import table1 from "@/public/table-images/table-2-seat.webp";
import Image from "next/image";
import Link from "next/link";
import { getTables } from "../_lib/data-service";
import TableItem from "./TableItem";

async function page() {
  const tables = await getTables();

  return (
    <section className="section-tables">
      <div className="container">
        <h3 className="heading-3">Your Perfect Spot Awaits</h3>
        <h2 className="heading-2">Find the Table That Suits You Best</h2>
        <p className="paragraph">
          At Belle Étoile, we ensure every seating arrangement is as inviting as
          the dining experience itself. From intimate two-seaters to larger
          tables for celebrations, our cozy and elegant settings cater to your
          needs. Reserve your spot and let us make your visit truly special.
        </p>
      </div>

      <div className="container">
        <div className="tables grid grid--2--cols gap-sm row-gap-lg">
          {tables?.map((table) => (
            <TableItem table={table} key={table.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
