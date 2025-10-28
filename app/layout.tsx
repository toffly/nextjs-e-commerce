const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="font-poppins antialiased container">{children}</body>
    </html>
  );
};

export default RootLayout;
