export const metadata = {
  title: "Next.js my app",
  description: "Generated by kiran jadhav Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}