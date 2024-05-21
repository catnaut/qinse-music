export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" flex min-h-screen flex-col items-center  px-40 pt-20">
      {children}
    </main>
  );
}
