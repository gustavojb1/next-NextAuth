"use client";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Categoria() {

  const router = useRouter()

  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      router.push('/');
      alert("Pagina apenas para usuários logados - Por favor faça seu login antes de prosseguir")
    }
  }, []);

  if (session) {
    return (
      <div >
        <h1>Categoria</h1>
        <Link href="/">Home</Link>
      </div>
    )
  } else {
    return 
  }

}
