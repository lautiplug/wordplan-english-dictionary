import { Route, Routes } from "react-router-dom"
import { EnglishVocabularyApp } from "../components/EnglishVocabularyApp"
import { Index } from "../pages/Index"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Index/>}/>
      <Route exact path="/app" element={<EnglishVocabularyApp/>}/>
    </Routes>
  )
}