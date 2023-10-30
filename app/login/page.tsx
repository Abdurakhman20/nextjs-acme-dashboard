import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-center text-green-700 text-3xl">Login Page</h1>
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-200 transition-colors text-center text-xl pt-10"
      >
        Go Home
      </Link>
    </main>
  );
}
