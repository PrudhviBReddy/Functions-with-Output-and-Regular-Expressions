import './App.css';
import SampleResult from './components/SampleResult';

function App() {

  let calculateResult = (teluguMarks, hindiMarks, englishMarks, mathsMarks, scienceMarks, socialMarks)=>{
    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;

    let passMarks = 35;
    let result;

    if(teluguMarks >= passMarks && 
      hindiMarks >= passMarks && 
      englishMarks >= passMarks && 
      mathsMarks >= passMarks && 
      scienceMarks >= passMarks && 
      socialMarks >= passMarks  
    ){
      result = "Pass";
    }else{
      result = "Fail";
    }

    let perc = (totalMarks / 600) * 100;

    let summary = {
      total: teluguMarks,
      perc: perc.toFixed(2),
      result: result,
    }

    return summary;
  }
  let result = calculateResult( 99,79,89,95,69,99 );
  console.log(result);

  return (
    <div className="App">
      <SampleResult />
    </div>
  );
}

export default App;
