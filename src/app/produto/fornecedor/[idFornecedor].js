import { useRouter } from "next/router"

export default function Fornecedor() {

  const route = useRouter()

  const { idFornecedor } = route.query
  return (
    <div >
      <h1>Fornecedor {idFornecedor}</h1>
    </div>
  )
}

// Endereço: http://localhost:3000/produto/fornecedor/forn01