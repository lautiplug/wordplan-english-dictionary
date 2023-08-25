export const Phonetics = ({phonetics}) => {

  const text = phonetics.map((phonetic) => phonetic.text).filter(Boolean) || [];

  return (
    <main className="phonetics-main"> 
      <p className="phonetics-p">{text.slice(0, 1)}</p>
    </main>
  )
}