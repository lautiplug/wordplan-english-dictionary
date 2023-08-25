import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <main className="index-main">
      <section className="index-introducing">
        <div>
          <h2 className="index-h2 animate__animated animate__fadeIn">
            Introducing <strong className="index-strong">⭐Wordplan⭐</strong>
          </h2> 
        </div>

        <h3 className="index-h3 masked-copy texture-orange big-type animate__animated animate__fadeIn">
          A dictionary that will allow you to immerse yourself in the language
          and its context. Understand how to pronounce it, and its IPA symbols.
          In this way, you will really understand its meaning and usage.
        </h3>

        <Link to={"/app"}>
          <button className="button-background-move animate__animated animate__fadeIn">
            Try it for free!
          </button>
        </Link>
      </section>
    </main>
  );
};