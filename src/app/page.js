"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

export default function Home() {

  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <img src={session.user.image} alt="" />
        <button onClick={() => signOut('github')}>Sign out</button>
        <Link href="/categoria">Categoria</Link>

      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in</button>
      <Link href="/categoria">Categoria</Link>

    </>
  )
}