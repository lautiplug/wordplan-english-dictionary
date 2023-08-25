export const PartOfSpeech = ({ data }) => {
  // flatten the array twice to work with partOfSpeech
  const allTypesOfSpeech = data.flatMap((wordData) =>
    wordData.meanings.flatMap((meaning) => meaning.partOfSpeech)
  );
  
  const filteredWords = allTypesOfSpeech.filter((word, index) => allTypesOfSpeech.indexOf(word) === index)

  //  Join string with commas and spaces
  const joinedTypes = filteredWords.join(', ');

  return (
    <div className="word-part-of-speech-ul">
      <p>Can be a:</p>
      <div className="word-part-of-speech-flex">
        <li className="word-part-of-speech-li">{joinedTypes}</li>
      </div>
    </div>
  );
};