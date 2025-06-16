export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Header</div>
      {children}
      <div>footer</div>
    </div>
  );
}
