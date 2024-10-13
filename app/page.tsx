import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>Welcome to Church</div>
      <p>
      <Link href="/reset-password">Go to reset page</Link>
      </p>
      <p>
        <Link href="/membership">Go to membership page</Link>
      </p>
    </main>
  );
}
