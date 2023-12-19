import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 mb-8 py-4 px-5">
        <div className="container mx-auto flex">
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
    </div>
  );
}
