
export default function Produto({params}) {

  console.log(params)
  return (
    <div >
      <h1>Produto {params.produtoId}</h1>
    </div>
  )
}
