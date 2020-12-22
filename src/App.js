import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/general/Login"
import Home from "./components/general/Home"
import Writing from "./components/Exam/SampleExam/Writing";
import Break from "./components/Exam/SampleExam/Break";
import Break_2 from "./components/Exam/SampleExam/Break_2";
import Math_1 from "./components/Exam/SampleExam/Math_1";
import Math_2 from "./components/Exam/SampleExam/Math_2";
import Verbal from "./components/Exam/SampleExam/Verbal";
import Reading from "./components/Exam/SampleExam/Reading";
import CreateNewExam from './components/Admin/CreateNewExam';
import CourseManagement from './components/Admin/CourseManagement';
import ExamManagement from './components/Admin/ExamManagement';

export default function App() {



  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path='/writing' component={Writing}/>
        <Route path='/math_1' component={Math_1}/>
        <Route path='/reading' component={Reading}/>
        <Route path='/verbal' component={Verbal}/>
        <Route path='/math_2' component={Math_2}/>
        <Route path='/break' component={Break}/>
        <Route path='/break_2' component={Break_2}/>
        <Route path='/c' component={CreateNewExam}/>
        <Route path='/exammanagement' component={ExamManagement}/>
        <Route path='/coursemanagement' component={CourseManagement}/>
      </div>
    </Router>
  );
}
