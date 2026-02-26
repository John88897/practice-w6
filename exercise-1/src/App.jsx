
import Header from "./components/Header";
import { HTML_RESULTS } from "./data";
import Score from "./components/Score";
import { JAVA_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";


function App() {
  return (
    <>
      <Header batchName="batch 2024"/>
      <main className="scores-container">
        <Score courseName="Java" courseResults={JAVA_RESULTS}/>
        <Score courseName="HTML" courseResults={HTML_RESULTS}/>
        <Score courseName="Python" courseResults={PYTHON_RESULTS}/>
        <Score courseName="English" courseResults={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
