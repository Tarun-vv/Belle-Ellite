// importing style.css
import "./_sass/main.css";

// importing Josefin Sans font
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className}`}>{children}</body>
    </html>
  );
}
