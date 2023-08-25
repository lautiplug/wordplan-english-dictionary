export const Examples = ({ examplesWord }) => {
  const examples = examplesWord
    .flatMap((meaning) => meaning.definitions.map((def) => def.example))
    .filter(Boolean); // get the correct position of "example"

  return (
    <main className="examples-main">
      <strong className="examples-p">Here you have some examples: </strong>
      <br />
      {examples.length > 0 ? (
        examples
          .slice(0, 3)
          .map((example, index) => <p className="examples" key={index}> - {example}</p>)
      ) : (
        <p className="examples-p">No examples to show you at the moment.</p>
      )}
    </main>
  );
};


