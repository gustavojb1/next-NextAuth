import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Produto() {

  const route = useRouter()

  const { data: session } = useSession()

  if(!session.user){
    route.push('/')
  }

  const { id } = route.query
  return (
    <div >
      <h1>Produto {id}</h1>
    </div>
  )
}
