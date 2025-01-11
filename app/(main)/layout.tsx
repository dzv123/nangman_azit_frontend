import TabBar from "./_components/tabBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <TabBar />
    </div>
  );
}
