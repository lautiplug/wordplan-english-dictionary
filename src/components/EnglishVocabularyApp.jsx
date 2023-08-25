import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { AddWord, GetWord } from "./Dictionary";
import { Footer, Loading, Navbar, NotFound } from "../interface";
import { HasError } from "../interface/HasError";

export const EnglishVocabularyApp = () => {
  // input and initial state
  const [words, setWords] = useState(["demo"]);

  const onAddWord = (newWord) => {
    if (words.includes(newWord)) return;
    setWords([newWord, ...words]);
  };

  // data
  const { data, isLoading, hasError } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${words[0]}`
  );

  // destructuring data
  const { word, phonetics, meanings } = (data && data[0]) || {};

  return (
    <>
      <Navbar />
      <main className="main">
        <AddWord words={words} onNewWord={onAddWord} />
        {isLoading ? <Loading /> : null}
        {!isLoading && !hasError && word && phonetics && meanings ? (
          <GetWord
            words={words}
            onNewWord={onAddWord}
            word={word}
            phonetics={phonetics}
            meanings={meanings}
            data={data}
          />
        ) : hasError ? (
          <HasError hasError={hasError}/>
        ) : (
          <NotFound />
        )}
      </main>
      <Footer />
    </>
  );
};
