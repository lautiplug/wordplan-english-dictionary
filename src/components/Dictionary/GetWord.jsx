import { Error } from "../Error";
import "../styles/styles.css";
import { AudioControl, Definition, Examples, PartOfSpeech, Phonetics, Synonyms } from "./index";


export const GetWord = ({ word, phonetics, meanings, data, words, onNewWord }) => {

  return (
    <main className="word-main animate__animated animate__fadeIn">
      <section className="word-highligt-section">
        <section className="word-controls">
          <h1 className="word-h1">{word}</h1>
          <AudioControl phonetics={phonetics} />
        </section>

        <section className="word-highlight-flex">
          <div className="word-description">
            <Phonetics phonetics={phonetics} />
          </div>
        </section>

        <section className="word-speech-eg">
          <PartOfSpeech data={data} meanings={meanings} />
          <div className="word-speech-synonysm">
            <Definition meanings={meanings} />
            <Synonyms data={data} />
          </div>
          <Examples examplesWord={meanings} />
        </section>
        <Error/>
      </section>
    </main>
  );
};
