import Link from "next/link"

export default function Home() {
  return (
      <main className="">
        <div>Welcome to Church</div>
        <Link href="/reset-password">Go to reset page</Link>
      </main>
  );
}
