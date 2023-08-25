import './styles/styles.css'

export const NotFound = ({hasError}) => {
  return (
    <h1 className="not-found-text">{hasError}</h1>
  )
}