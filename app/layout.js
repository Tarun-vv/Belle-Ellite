// importing style.css
import { Toaster } from "react-hot-toast";
import NavBar from "./_components/Navigation/NavBar";
import "./_sass/main.css";

// importing Josefin Sans font
import { Josefin_Sans } from "next/font/google";
import Username from "./_components/Navigation/Username";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className}`}>
        <Username />
        <NavBar />
        {children}
        <Toaster
          position="top-center"
          gutter={10}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#d1d5db",
              color: "#374151",
            },
          }}
        />
      </body>
    </html>
  );
}
