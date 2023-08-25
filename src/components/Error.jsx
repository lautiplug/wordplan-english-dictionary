import { bugReport } from "../hooks/useBug"

export const Error = () => {

  const handleClick = bugReport()

  return (
    <section>
      <div className="error-flex">
        <p className="error-p masked-copy texture-orange big-type">Did you find a bug? Please report it <strong className="error-msg-link" onClick={handleClick}>here</strong></p>
      </div>
    </section>
  )
}