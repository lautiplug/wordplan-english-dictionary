export const Definition = ({meanings}) => {

  const definitons = meanings.flatMap((meaning) => meaning.definitions.map((def) => def.definition))

  return (
    <main className="definition-main">
      <h3 className="definition-h3">1. {definitons.slice(0, 1)}</h3>
      <p className="definition-p">Another definition could be:</p>
      <h4 className="definition-h4">{definitons.slice(1, 2)}</h4>
    </main>
  )
}