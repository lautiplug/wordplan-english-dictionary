export const AudioControl = ({phonetics}) => {
  
  const phoneticsWithAudio = phonetics.filter((item) => item.audio !== "");

  const audioUrls = phoneticsWithAudio.map((item) => item.audio);

  return (
    <audio controls>
      {audioUrls.map((url, index) => (
        <source key={index} src={url} type="audio/mpeg" />
      ))}
    </audio>
  );
};
