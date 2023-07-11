"use client";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <img src={session.user.image} alt="" />
        <button onClick={() => signOut('github')}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  )
}