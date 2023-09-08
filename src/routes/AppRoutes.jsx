import { Route, Routes } from "react-router-dom"
import { EnglishVocabularyApp } from "../components/EnglishVocabularyApp"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<EnglishVocabularyApp/>}/>
    </Routes>
  )
}