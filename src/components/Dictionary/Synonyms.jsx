export const Synonyms = ({ data }) => {
  const synonyms = data[0].meanings.map((syn) => syn.synonyms);

  const cleanWords = synonyms.map((words) => words.map((word) => word.trim()));

  const spacedWords = cleanWords.map((words) => words.join(", ")).join(" ");

  return (
    <div className="synonysm-container">
    <h1>Synonysm:</h1>
    {synonyms.some((arr) => arr.length > 0) ? (
      <ul className="synonysm-group">
        {spacedWords.split(",  ").map((word, index) => (
          <li className="synonysm" key={index}>{word}</li>
        ))}
      </ul>
    ) : (
      <p className="synonysm">No synonyms available to display at the moment</p>
    )}
  </div>
  );
};
