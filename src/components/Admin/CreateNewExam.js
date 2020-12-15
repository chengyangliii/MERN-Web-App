import React, {useState} from 'react'
import './dashboard.css'
import axios from "axios"
import {Button, Container, Modal} from "react-bootstrap"
import Question from '../CreateExam/R_Question'


export default function CreateNewExam() {

    const [writingList, setWritingList] = useState(null)
    const [math1List, setMath1List] = useState(null)
    const [readingList, setReadingList] = useState(null)
    const [verbalList, setVerbalList] = useState(null)
    const [math2List, setMath2List] = useState(null)


    const handleClick = e => {

        setWritingList(
            [
                {
                    "question": writing,
                    "grade": {},
                }
            ]
        )

        setMath1List(
            [{
                "id": "1",
                "question": q1Name,
                "answer_a": q1_a,
                "answer_b": q1_b,
                "answer_c": q1_c,
                "answer_d": q1_d,
                "answer_e": q1_e,
                "correct_answer": q1_correct,
            },
            {
                "id": "2",
                "question": q2Name,
                "answer_a": q2_a,
                "answer_b": q2_b,
                "answer_c": q2_c,
                "answer_d": q2_d,
                "answer_e": q2_e,
                "correct_answer": q2_correct,
            },
            {
                "id":"3",
                "question": q3Name,
                "answer_a": q3_a,
                "answer_b": q3_b,
                "answer_c": q3_c,
                "answer_d": q3_d,
                "answer_e": q3_e,
                "correct_answer": q3_correct,
            },
            {
                "id":"4",
                "question": q4Name,
                "answer_a": q4_a,
                "answer_b": q4_b,
                "answer_c": q4_c,
                "answer_d": q4_d,
                "answer_e": q4_e,
                "correct_answer": q4_correct,
            },
            {
                "id":"5",
                "question": q5Name,
                "answer_a": q5_a,
                "answer_b": q5_b,
                "answer_c": q5_c,
                "answer_d": q5_d,
                "answer_e": q5_e,
                "correct_answer": q5_correct,
            },
            {
                "id":"6",
                "question": q6Name,
                "answer_a": q6_a,
                "answer_b": q6_b,
                "answer_c": q6_c,
                "answer_d": q6_d,
                "answer_e": q6_e,
                "correct_answer": q6_correct,
            },
            {
                "id":"7",
                "question": q7Name,
                "answer_a": q7_a,
                "answer_b": q7_b,
                "answer_c": q7_c,
                "answer_d": q7_d,
                "answer_e": q7_e,
                "correct_answer": q7_correct,
            },
            {
                "id":"8",
                "question": q8Name,
                "answer_a": q8_a,
                "answer_b": q8_b,
                "answer_c": q8_c,
                "answer_d": q8_d,
                "answer_e": q8_e,
                "correct_answer": q8_correct,
            },
            {
                "id":"9",
                "question": q9Name,
                "answer_a": q9_a,
                "answer_b": q9_b,
                "answer_c": q9_c,
                "answer_d": q9_d,
                "answer_e": q9_e,
                "correct_answer": q9_correct,
            },
            {
                "id":"10",
                "question": q10Name,
                "answer_a": q10_a,
                "answer_b": q10_b,
                "answer_c": q10_c,
                "answer_d": q10_d,
                "answer_e": q10_e,
                "correct_answer": q10_correct,
            },
            {
                "id":"11",
                "question": q11Name,
                "answer_a": q11_a,
                "answer_b": q11_b,
                "answer_c": q11_c,
                "answer_d": q11_d,
                "answer_e": q11_e,
                "correct_answer": q11_correct,
            },
            {
                "id":"12",
                "question": q12Name,
                "answer_a": q12_a,
                "answer_b": q12_b,
                "answer_c": q12_c,
                "answer_d": q12_d,
                "answer_e": q12_e,
                "correct_answer": q12_correct,
            },
            {
                "id":"13",
                "question": q13Name,
                "answer_a": q13_a,
                "answer_b": q13_b,
                "answer_c": q13_c,
                "answer_d": q13_d,
                "answer_e": q13_e,
                "correct_answer": q13_correct,
            },
            {
                "id":"14",
                "question": q14Name,
                "answer_a": q14_a,
                "answer_b": q14_b,
                "answer_c": q14_c,
                "answer_d": q14_d,
                "answer_e": q14_e,
                "correct_answer": q14_correct,
            },
            {
                "id":"15",
                "question": q15Name,
                "answer_a": q15_a,
                "answer_b": q15_b,
                "answer_c": q15_c,
                "answer_d": q15_d,
                "answer_e": q15_e,
                "correct_answer": q15_correct,
            },
            {
                "id":"16",
                "question": q16Name,
                "answer_a": q16_a,
                "answer_b": q16_b,
                "answer_c": q16_c,
                "answer_d": q16_d,
                "answer_e": q16_e,
                "correct_answer": q16_correct,
            },
            {
                "id":"17",
                "question": q17Name,
                "answer_a": q17_a,
                "answer_b": q17_b,
                "answer_c": q17_c,
                "answer_d": q17_d,
                "answer_e": q17_e,
                "correct_answer": q17_correct,
            },
            {
                "id":"18",
                "question": q18Name,
                "answer_a": q18_a,
                "answer_b": q18_b,
                "answer_c": q18_c,
                "answer_d": q18_d,
                "answer_e": q18_e,
                "correct_answer": q18_correct,
            },
            {
                "id":"19",
                "question": q19Name,
                "answer_a": q19_a,
                "answer_b": q19_b,
                "answer_c": q19_c,
                "answer_d": q19_d,
                "answer_e": q19_e,
                "correct_answer": q19_correct,
            },
            {
                "id":"20",
                "question": q20Name,
                "answer_a": q20_a,
                "answer_b": q20_b,
                "answer_c": q20_c,
                "answer_d": q20_d,
                "answer_e": q20_e,
                "correct_answer": q20_correct,
            },
            {
                "id":"21",
                "question": q21Name,
                "answer_a": q21_a,
                "answer_b": q21_b,
                "answer_c": q21_c,
                "answer_d": q21_d,
                "answer_e": q21_e,
                "correct_answer": q21_correct,
            },
            {
                "id":"22",
                "question": q22Name,
                "answer_a": q22_a,
                "answer_b": q22_b,
                "answer_c": q22_c,
                "answer_d": q22_d,
                "answer_e": q22_e,
                "correct_answer": q22_correct,
            },
            {
                "id":"23",
                "question": q23Name,
                "answer_a": q23_a,
                "answer_b": q23_b,
                "answer_c": q23_c,
                "answer_d": q23_d,
                "answer_e": q23_e,
                "correct_answer": q23_correct,
            },
            {
                "id":"24",
                "question": q24Name,
                "answer_a": q24_a,
                "answer_b": q24_b,
                "answer_c": q24_c,
                "answer_d": q24_d,
                "answer_e": q24_e,
                "correct_answer": q24_correct,
            },
            {
                "id":"25",
                "question": q25Name,
                "answer_a": q25_a,
                "answer_b": q25_b,
                "answer_c": q25_c,
                "answer_d": q25_d,
                "answer_e": q25_e,
                "correct_answer": q25_correct,
            },
            {
                "id":"26",
                "question": q26Name,
                "answer_a": q26_a,
                "answer_b": q26_b,
                "answer_c": q26_c,
                "answer_d": q26_d,
                "answer_e": q26_e,
                "correct_answer": q26_correct,
            },
            {
                "id":"27",
                "question": q27Name,
                "answer_a": q27_a,
                "answer_b": q27_b,
                "answer_c": q27_c,
                "answer_d": q27_d,
                "answer_e": q27_e,
                "correct_answer": q27_correct,
            },
            {
                "id":"28",
                "question": q28Name,
                "answer_a": q28_a,
                "answer_b": q28_b,
                "answer_c": q28_c,
                "answer_d": q28_d,
                "answer_e": q28_e,
                "correct_answer": q28_correct,
            },
            {
                "id":"29",
                "question": q29Name,
                "answer_a": q29_a,
                "answer_b": q29_b,
                "answer_c": q29_c,
                "answer_d": q29_d,
                "answer_e": q29_e,
                "correct_answer": q29_correct,
            },
            {
                "id":"30",
                "question": q30Name,
                "answer_a": q30_a,
                "answer_b": q30_b,
                "answer_c": q30_c,
                "answer_d": q30_d,
                "answer_e": q30_e,
                "correct_answer": q30_correct,
            }]
        )

        // setReadingList(
        //     {

        //     }
        // )



        handleShowConfirmShow(e)
    }

    const [writing, setWriting] = useState("")
    const hangle_writingChange = e => {
        setWriting(e.target.value)
    }

    const [q1Name, setQ1Name] = useState("")
    const [q1_a, setQ1_a] = useState("")
    const [q1_b, setQ1_b] = useState("")
    const [q1_c, setQ1_c] = useState("")
    const [q1_d, setQ1_d] = useState("")
    const [q1_e, setQ1_e] = useState("")
    const [q1_correct, setQ1_correct] = useState("")
    const handleQ1_NameChange = e => {
        setQ1Name(e.target.value)
    }
    const handleQ1_aChange = e => {
        setQ1_a(e.target.value)
    }
    const handleQ1_bChange = e => {
        setQ1_b(e.target.value)
    }
    const handleQ1_cChange = e => {
        setQ1_c(e.target.value)
    }
    const handleQ1_dChange = e => {
        setQ1_d(e.target.value)
    }
    const handleQ1_eChange = e => {
        setQ1_e(e.target.value)
    }
    const handleQ1_correctChange = e => {
        setQ1_correct(e.target.value)
    }
    const [q2Name, setQ2Name] = useState("")
    const [q2_a, setQ2_a] = useState("")
    const [q2_b, setQ2_b] = useState("")
    const [q2_c, setQ2_c] = useState("")
    const [q2_d, setQ2_d] = useState("")
    const [q2_e, setQ2_e] = useState("")
    const [q2_correct, setQ2_correct] = useState("")
    const handleQ2_NameChange = e => {
        setQ2Name(e.target.value)
    }
    const handleQ2_aChange = e => {
        setQ2_a(e.target.value)
    }
    const handleQ2_bChange = e => {
        setQ2_b(e.target.value)
    }
    const handleQ2_cChange = e => {
        setQ2_c(e.target.value)
    }
    const handleQ2_dChange = e => {
        setQ2_d(e.target.value)
    }
    const handleQ2_eChange = e => {
        setQ2_e(e.target.value)
    }
    const handleQ2_correctChange = e => {
        setQ2_correct(e.target.value)
    }
    const [q3Name, setQ3Name] = useState("")
    const [q3_a, setQ3_a] = useState("")
    const [q3_b, setQ3_b] = useState("")
    const [q3_c, setQ3_c] = useState("")
    const [q3_d, setQ3_d] = useState("")
    const [q3_e, setQ3_e] = useState("")
    const [q3_correct, setQ3_correct] = useState("")
    const handleQ3_NameChange = e => {
        setQ3Name(e.target.value)
    }
    const handleQ3_aChange = e => {
        setQ3_a(e.target.value)
    }
    const handleQ3_bChange = e => {
        setQ3_b(e.target.value)
    }
    const handleQ3_cChange = e => {
        setQ3_c(e.target.value)
    }
    const handleQ3_dChange = e => {
        setQ3_d(e.target.value)
    }
    const handleQ3_eChange = e => {
        setQ3_e(e.target.value)
    }
    const handleQ3_correctChange = e => {
        setQ3_correct(e.target.value)
    }
    const [q4Name, setQ4Name] = useState("")
    const [q4_a, setQ4_a] = useState("")
    const [q4_b, setQ4_b] = useState("")
    const [q4_c, setQ4_c] = useState("")
    const [q4_d, setQ4_d] = useState("")
    const [q4_e, setQ4_e] = useState("")
    const [q4_correct, setQ4_correct] = useState("")
    const handleQ4_NameChange = e => {
        setQ4Name(e.target.value)
    }
    const handleQ4_aChange = e => {
        setQ4_a(e.target.value)
    }
    const handleQ4_bChange = e => {
        setQ4_b(e.target.value)
    }
    const handleQ4_cChange = e => {
        setQ4_c(e.target.value)
    }
    const handleQ4_dChange = e => {
        setQ4_d(e.target.value)
    }
    const handleQ4_eChange = e => {
        setQ4_e(e.target.value)
    }
    const handleQ4_correctChange = e => {
        setQ4_correct(e.target.value)
    }
    const [q5Name, setQ5Name] = useState("")
    const [q5_a, setQ5_a] = useState("")
    const [q5_b, setQ5_b] = useState("")
    const [q5_c, setQ5_c] = useState("")
    const [q5_d, setQ5_d] = useState("")
    const [q5_e, setQ5_e] = useState("")
    const [q5_correct, setQ5_correct] = useState("")
    const handleQ5_NameChange = e => {
        setQ5Name(e.target.value)
    }
    const handleQ5_aChange = e => {
        setQ5_a(e.target.value)
    }
    const handleQ5_bChange = e => {
        setQ5_b(e.target.value)
    }
    const handleQ5_cChange = e => {
        setQ5_c(e.target.value)
    }
    const handleQ5_dChange = e => {
        setQ5_d(e.target.value)
    }
    const handleQ5_eChange = e => {
        setQ5_e(e.target.value)
    }
    const handleQ5_correctChange = e => {
        setQ5_correct(e.target.value)
    }
    const [q6Name, setQ6Name] = useState("")
    const [q6_a, setQ6_a] = useState("")
    const [q6_b, setQ6_b] = useState("")
    const [q6_c, setQ6_c] = useState("")
    const [q6_d, setQ6_d] = useState("")
    const [q6_e, setQ6_e] = useState("")
    const [q6_correct, setQ6_correct] = useState("")
    const handleQ6_NameChange = e => {
        setQ6Name(e.target.value)
    }
    const handleQ6_aChange = e => {
        setQ6_a(e.target.value)
    }
    const handleQ6_bChange = e => {
        setQ6_b(e.target.value)
    }
    const handleQ6_cChange = e => {
        setQ6_c(e.target.value)
    }
    const handleQ6_dChange = e => {
        setQ6_d(e.target.value)
    }
    const handleQ6_eChange = e => {
        setQ6_e(e.target.value)
    }
    const handleQ6_correctChange = e => {
        setQ6_correct(e.target.value)
    }

    const [q7Name, setQ7Name] = useState("")
    const [q7_a, setQ7_a] = useState("")
    const [q7_b, setQ7_b] = useState("")
    const [q7_c, setQ7_c] = useState("")
    const [q7_d, setQ7_d] = useState("")
    const [q7_e, setQ7_e] = useState("")
    const [q7_correct, setQ7_correct] = useState("")
    const handleQ7_NameChange = e => {
        setQ7Name(e.target.value)
    }
    const handleQ7_aChange = e => {
        setQ7_a(e.target.value)
    }
    const handleQ7_bChange = e => {
        setQ7_b(e.target.value)
    }
    const handleQ7_cChange = e => {
        setQ7_c(e.target.value)
    }
    const handleQ7_dChange = e => {
        setQ7_d(e.target.value)
    }
    const handleQ7_eChange = e => {
        setQ7_e(e.target.value)
    }
    const handleQ7_correctChange = e => {
        setQ7_correct(e.target.value)
    }
    const [q8Name, setQ8Name] = useState("")
    const [q8_a, setQ8_a] = useState("")
    const [q8_b, setQ8_b] = useState("")
    const [q8_c, setQ8_c] = useState("")
    const [q8_d, setQ8_d] = useState("")
    const [q8_e, setQ8_e] = useState("")
    const [q8_correct, setQ8_correct] = useState("")
    const handleQ8_NameChange = e => {
        setQ8Name(e.target.value)
    }
    const handleQ8_aChange = e => {
        setQ8_a(e.target.value)
    }
    const handleQ8_bChange = e => {
        setQ8_b(e.target.value)
    }
    const handleQ8_cChange = e => {
        setQ8_c(e.target.value)
    }
    const handleQ8_dChange = e => {
        setQ8_d(e.target.value)
    }
    const handleQ8_eChange = e => {
        setQ8_e(e.target.value)
    }
    const handleQ8_correctChange = e => {
        setQ8_correct(e.target.value)
    }
    const [q9Name, setQ9Name] = useState("")
    const [q9_a, setQ9_a] = useState("")
    const [q9_b, setQ9_b] = useState("")
    const [q9_c, setQ9_c] = useState("")
    const [q9_d, setQ9_d] = useState("")
    const [q9_e, setQ9_e] = useState("")
    const [q9_correct, setQ9_correct] = useState("")
    const handleQ9_NameChange = e => {
        setQ9Name(e.target.value)
    }
    const handleQ9_aChange = e => {
        setQ9_a(e.target.value)
    }
    const handleQ9_bChange = e => {
        setQ9_b(e.target.value)
    }
    const handleQ9_cChange = e => {
        setQ9_c(e.target.value)
    }
    const handleQ9_dChange = e => {
        setQ9_d(e.target.value)
    }
    const handleQ9_eChange = e => {
        setQ9_e(e.target.value)
    }
    const handleQ9_correctChange = e => {
        setQ9_correct(e.target.value)
    }
    const [q10Name, setQ10Name] = useState("")
    const [q10_a, setQ10_a] = useState("")
    const [q10_b, setQ10_b] = useState("")
    const [q10_c, setQ10_c] = useState("")
    const [q10_d, setQ10_d] = useState("")
    const [q10_e, setQ10_e] = useState("")
    const [q10_correct, setQ10_correct] = useState("")
    const handleQ10_NameChange = e => {
        setQ10Name(e.target.value)
    }
    const handleQ10_aChange = e => {
        setQ10_a(e.target.value)
    }
    const handleQ10_bChange = e => {
        setQ10_b(e.target.value)
    }
    const handleQ10_cChange = e => {
        setQ10_c(e.target.value)
    }
    const handleQ10_dChange = e => {
        setQ10_d(e.target.value)
    }
    const handleQ10_eChange = e => {
        setQ10_e(e.target.value)
    }
    const handleQ10_correctChange = e => {
        setQ10_correct(e.target.value)
    }
    const [q11Name, setQ11Name] = useState("")
    const [q11_a, setQ11_a] = useState("")
    const [q11_b, setQ11_b] = useState("")
    const [q11_c, setQ11_c] = useState("")
    const [q11_d, setQ11_d] = useState("")
    const [q11_e, setQ11_e] = useState("")
    const [q11_correct, setQ11_correct] = useState("")
    const handleQ11_NameChange = e => {
        setQ11Name(e.target.value)
    }
    const handleQ11_aChange = e => {
        setQ11_a(e.target.value)
    }
    const handleQ11_bChange = e => {
        setQ11_b(e.target.value)
    }
    const handleQ11_cChange = e => {
        setQ11_c(e.target.value)
    }
    const handleQ11_dChange = e => {
        setQ11_d(e.target.value)
    }
    const handleQ11_eChange = e => {
        setQ11_e(e.target.value)
    }
    const handleQ11_correctChange = e => {
        setQ11_correct(e.target.value)
    }
    const [q12Name, setQ12Name] = useState("")
    const [q12_a, setQ12_a] = useState("")
    const [q12_b, setQ12_b] = useState("")
    const [q12_c, setQ12_c] = useState("")
    const [q12_d, setQ12_d] = useState("")
    const [q12_e, setQ12_e] = useState("")
    const [q12_correct, setQ12_correct] = useState("")
    const handleQ12_NameChange = e => {
        setQ12Name(e.target.value)
    }
    const handleQ12_aChange = e => {
        setQ12_a(e.target.value)
    }
    const handleQ12_bChange = e => {
        setQ12_b(e.target.value)
    }
    const handleQ12_cChange = e => {
        setQ12_c(e.target.value)
    }
    const handleQ12_dChange = e => {
        setQ12_d(e.target.value)
    }
    const handleQ12_eChange = e => {
        setQ12_e(e.target.value)
    }
    const handleQ12_correctChange = e => {
        setQ12_correct(e.target.value)
    }

    const [q13Name, setQ13Name] = useState("")
    const [q13_a, setQ13_a] = useState("")
    const [q13_b, setQ13_b] = useState("")
    const [q13_c, setQ13_c] = useState("")
    const [q13_d, setQ13_d] = useState("")
    const [q13_e, setQ13_e] = useState("")
    const [q13_correct, setQ13_correct] = useState("")
    const handleQ13_NameChange = e => {
        setQ13Name(e.target.value)
    }
    const handleQ13_aChange = e => {
        setQ13_a(e.target.value)
    }
    const handleQ13_bChange = e => {
        setQ13_b(e.target.value)
    }
    const handleQ13_cChange = e => {
        setQ13_c(e.target.value)
    }
    const handleQ13_dChange = e => {
        setQ13_d(e.target.value)
    }
    const handleQ13_eChange = e => {
        setQ13_e(e.target.value)
    }
    const handleQ13_correctChange = e => {
        setQ13_correct(e.target.value)
    }
    const [q14Name, setQ14Name] = useState("")
    const [q14_a, setQ14_a] = useState("")
    const [q14_b, setQ14_b] = useState("")
    const [q14_c, setQ14_c] = useState("")
    const [q14_d, setQ14_d] = useState("")
    const [q14_e, setQ14_e] = useState("")
    const [q14_correct, setQ14_correct] = useState("")
    const handleQ14_NameChange = e => {
        setQ14Name(e.target.value)
    }
    const handleQ14_aChange = e => {
        setQ14_a(e.target.value)
    }
    const handleQ14_bChange = e => {
        setQ14_b(e.target.value)
    }
    const handleQ14_cChange = e => {
        setQ14_c(e.target.value)
    }
    const handleQ14_dChange = e => {
        setQ14_d(e.target.value)
    }
    const handleQ14_eChange = e => {
        setQ14_e(e.target.value)
    }
    const handleQ14_correctChange = e => {
        setQ14_correct(e.target.value)
    }
    const [q15Name, setQ15Name] = useState("")
    const [q15_a, setQ15_a] = useState("")
    const [q15_b, setQ15_b] = useState("")
    const [q15_c, setQ15_c] = useState("")
    const [q15_d, setQ15_d] = useState("")
    const [q15_e, setQ15_e] = useState("")
    const [q15_correct, setQ15_correct] = useState("")
    const handleQ15_NameChange = e => {
        setQ15Name(e.target.value)
    }
    const handleQ15_aChange = e => {
        setQ15_a(e.target.value)
    }
    const handleQ15_bChange = e => {
        setQ15_b(e.target.value)
    }
    const handleQ15_cChange = e => {
        setQ15_c(e.target.value)
    }
    const handleQ15_dChange = e => {
        setQ15_d(e.target.value)
    }
    const handleQ15_eChange = e => {
        setQ15_e(e.target.value)
    }
    const handleQ15_correctChange = e => {
        setQ15_correct(e.target.value)
    }
    const [q16Name, setQ16Name] = useState("")
    const [q16_a, setQ16_a] = useState("")
    const [q16_b, setQ16_b] = useState("")
    const [q16_c, setQ16_c] = useState("")
    const [q16_d, setQ16_d] = useState("")
    const [q16_e, setQ16_e] = useState("")
    const [q16_correct, setQ16_correct] = useState("")
    const handleQ16_NameChange = e => {
        setQ16Name(e.target.value)
    }
    const handleQ16_aChange = e => {
        setQ16_a(e.target.value)
    }
    const handleQ16_bChange = e => {
        setQ16_b(e.target.value)
    }
    const handleQ16_cChange = e => {
        setQ16_c(e.target.value)
    }
    const handleQ16_dChange = e => {
        setQ16_d(e.target.value)
    }
    const handleQ16_eChange = e => {
        setQ16_e(e.target.value)
    }
    const handleQ16_correctChange = e => {
        setQ16_correct(e.target.value)
    }
    const [q17Name, setQ17Name] = useState("")
    const [q17_a, setQ17_a] = useState("")
    const [q17_b, setQ17_b] = useState("")
    const [q17_c, setQ17_c] = useState("")
    const [q17_d, setQ17_d] = useState("")
    const [q17_e, setQ17_e] = useState("")
    const [q17_correct, setQ17_correct] = useState("")
    const handleQ17_NameChange = e => {
        setQ17Name(e.target.value)
    }
    const handleQ17_aChange = e => {
        setQ17_a(e.target.value)
    }
    const handleQ17_bChange = e => {
        setQ17_b(e.target.value)
    }
    const handleQ17_cChange = e => {
        setQ17_c(e.target.value)
    }
    const handleQ17_dChange = e => {
        setQ17_d(e.target.value)
    }
    const handleQ17_eChange = e => {
        setQ17_e(e.target.value)
    }
    const handleQ17_correctChange = e => {
        setQ17_correct(e.target.value)
    }
    const [q18Name, setQ18Name] = useState("")
    const [q18_a, setQ18_a] = useState("")
    const [q18_b, setQ18_b] = useState("")
    const [q18_c, setQ18_c] = useState("")
    const [q18_d, setQ18_d] = useState("")
    const [q18_e, setQ18_e] = useState("")
    const [q18_correct, setQ18_correct] = useState("")
    const handleQ18_NameChange = e => {
        setQ18Name(e.target.value)
    }
    const handleQ18_aChange = e => {
        setQ18_a(e.target.value)
    }
    const handleQ18_bChange = e => {
        setQ18_b(e.target.value)
    }
    const handleQ18_cChange = e => {
        setQ18_c(e.target.value)
    }
    const handleQ18_dChange = e => {
        setQ18_d(e.target.value)
    }
    const handleQ18_eChange = e => {
        setQ18_e(e.target.value)
    }
    const handleQ18_correctChange = e => {
        setQ18_correct(e.target.value)
    }

    const [q19Name, setQ19Name] = useState("")
    const [q19_a, setQ19_a] = useState("")
    const [q19_b, setQ19_b] = useState("")
    const [q19_c, setQ19_c] = useState("")
    const [q19_d, setQ19_d] = useState("")
    const [q19_e, setQ19_e] = useState("")
    const [q19_correct, setQ19_correct] = useState("")
    const handleQ19_NameChange = e => {
        setQ19Name(e.target.value)
    }
    const handleQ19_aChange = e => {
        setQ19_a(e.target.value)
    }
    const handleQ19_bChange = e => {
        setQ19_b(e.target.value)
    }
    const handleQ19_cChange = e => {
        setQ19_c(e.target.value)
    }
    const handleQ19_dChange = e => {
        setQ19_d(e.target.value)
    }
    const handleQ19_eChange = e => {
        setQ19_e(e.target.value)
    }
    const handleQ19_correctChange = e => {
        setQ19_correct(e.target.value)
    }
    const [q20Name, setQ20Name] = useState("")
    const [q20_a, setQ20_a] = useState("")
    const [q20_b, setQ20_b] = useState("")
    const [q20_c, setQ20_c] = useState("")
    const [q20_d, setQ20_d] = useState("")
    const [q20_e, setQ20_e] = useState("")
    const [q20_correct, setQ20_correct] = useState("")
    const handleQ20_NameChange = e => {
        setQ20Name(e.target.value)
    }
    const handleQ20_aChange = e => {
        setQ20_a(e.target.value)
    }
    const handleQ20_bChange = e => {
        setQ20_b(e.target.value)
    }
    const handleQ20_cChange = e => {
        setQ20_c(e.target.value)
    }
    const handleQ20_dChange = e => {
        setQ20_d(e.target.value)
    }
    const handleQ20_eChange = e => {
        setQ20_e(e.target.value)
    }
    const handleQ20_correctChange = e => {
        setQ20_correct(e.target.value)
    }
    const [q21Name, setQ21Name] = useState("")
    const [q21_a, setQ21_a] = useState("")
    const [q21_b, setQ21_b] = useState("")
    const [q21_c, setQ21_c] = useState("")
    const [q21_d, setQ21_d] = useState("")
    const [q21_e, setQ21_e] = useState("")
    const [q21_correct, setQ21_correct] = useState("")
    const handleQ21_NameChange = e => {
        setQ21Name(e.target.value)
    }
    const handleQ21_aChange = e => {
        setQ21_a(e.target.value)
    }
    const handleQ21_bChange = e => {
        setQ21_b(e.target.value)
    }
    const handleQ21_cChange = e => {
        setQ21_c(e.target.value)
    }
    const handleQ21_dChange = e => {
        setQ21_d(e.target.value)
    }
    const handleQ21_eChange = e => {
        setQ21_e(e.target.value)
    }
    const handleQ21_correctChange = e => {
        setQ21_correct(e.target.value)
    }
    const [q22Name, setQ22Name] = useState("")
    const [q22_a, setQ22_a] = useState("")
    const [q22_b, setQ22_b] = useState("")
    const [q22_c, setQ22_c] = useState("")
    const [q22_d, setQ22_d] = useState("")
    const [q22_e, setQ22_e] = useState("")
    const [q22_correct, setQ22_correct] = useState("")
    const handleQ22_NameChange = e => {
        setQ22Name(e.target.value)
    }
    const handleQ22_aChange = e => {
        setQ22_a(e.target.value)
    }
    const handleQ22_bChange = e => {
        setQ22_b(e.target.value)
    }
    const handleQ22_cChange = e => {
        setQ22_c(e.target.value)
    }
    const handleQ22_dChange = e => {
        setQ22_d(e.target.value)
    }
    const handleQ22_eChange = e => {
        setQ22_e(e.target.value)
    }
    const handleQ22_correctChange = e => {
        setQ22_correct(e.target.value)
    }
    const [q23Name, setQ23Name] = useState("")
    const [q23_a, setQ23_a] = useState("")
    const [q23_b, setQ23_b] = useState("")
    const [q23_c, setQ23_c] = useState("")
    const [q23_d, setQ23_d] = useState("")
    const [q23_e, setQ23_e] = useState("")
    const [q23_correct, setQ23_correct] = useState("")
    const handleQ23_NameChange = e => {
        setQ23Name(e.target.value)
    }
    const handleQ23_aChange = e => {
        setQ23_a(e.target.value)
    }
    const handleQ23_bChange = e => {
        setQ23_b(e.target.value)
    }
    const handleQ23_cChange = e => {
        setQ23_c(e.target.value)
    }
    const handleQ23_dChange = e => {
        setQ23_d(e.target.value)
    }
    const handleQ23_eChange = e => {
        setQ23_e(e.target.value)
    }
    const handleQ23_correctChange = e => {
        setQ23_correct(e.target.value)
    }
    const [q24Name, setQ24Name] = useState("")
    const [q24_a, setQ24_a] = useState("")
    const [q24_b, setQ24_b] = useState("")
    const [q24_c, setQ24_c] = useState("")
    const [q24_d, setQ24_d] = useState("")
    const [q24_e, setQ24_e] = useState("")
    const [q24_correct, setQ24_correct] = useState("")
    const handleQ24_NameChange = e => {
        setQ24Name(e.target.value)
    }
    const handleQ24_aChange = e => {
        setQ24_a(e.target.value)
    }
    const handleQ24_bChange = e => {
        setQ24_b(e.target.value)
    }
    const handleQ24_cChange = e => {
        setQ24_c(e.target.value)
    }
    const handleQ24_dChange = e => {
        setQ24_d(e.target.value)
    }
    const handleQ24_eChange = e => {
        setQ24_e(e.target.value)
    }
    const handleQ24_correctChange = e => {
        setQ24_correct(e.target.value)
    }

    const [q25Name, setQ25Name] = useState("")
    const [q25_a, setQ25_a] = useState("")
    const [q25_b, setQ25_b] = useState("")
    const [q25_c, setQ25_c] = useState("")
    const [q25_d, setQ25_d] = useState("")
    const [q25_e, setQ25_e] = useState("")
    const [q25_correct, setQ25_correct] = useState("")
    const handleQ25_NameChange = e => {
        setQ25Name(e.target.value)
    }
    const handleQ25_aChange = e => {
        setQ25_a(e.target.value)
    }
    const handleQ25_bChange = e => {
        setQ25_b(e.target.value)
    }
    const handleQ25_cChange = e => {
        setQ25_c(e.target.value)
    }
    const handleQ25_dChange = e => {
        setQ25_d(e.target.value)
    }
    const handleQ25_eChange = e => {
        setQ25_e(e.target.value)
    }
    const handleQ25_correctChange = e => {
        setQ25_correct(e.target.value)
    }
    const [q26Name, setQ26Name] = useState("")
    const [q26_a, setQ26_a] = useState("")
    const [q26_b, setQ26_b] = useState("")
    const [q26_c, setQ26_c] = useState("")
    const [q26_d, setQ26_d] = useState("")
    const [q26_e, setQ26_e] = useState("")
    const [q26_correct, setQ26_correct] = useState("")
    const handleQ26_NameChange = e => {
        setQ26Name(e.target.value)
    }
    const handleQ26_aChange = e => {
        setQ26_a(e.target.value)
    }
    const handleQ26_bChange = e => {
        setQ26_b(e.target.value)
    }
    const handleQ26_cChange = e => {
        setQ26_c(e.target.value)
    }
    const handleQ26_dChange = e => {
        setQ26_d(e.target.value)
    }
    const handleQ26_eChange = e => {
        setQ26_e(e.target.value)
    }
    const handleQ26_correctChange = e => {
        setQ26_correct(e.target.value)
    }
    const [q27Name, setQ27Name] = useState("")
    const [q27_a, setQ27_a] = useState("")
    const [q27_b, setQ27_b] = useState("")
    const [q27_c, setQ27_c] = useState("")
    const [q27_d, setQ27_d] = useState("")
    const [q27_e, setQ27_e] = useState("")
    const [q27_correct, setQ27_correct] = useState("")
    const handleQ27_NameChange = e => {
        setQ27Name(e.target.value)
    }
    const handleQ27_aChange = e => {
        setQ27_a(e.target.value)
    }
    const handleQ27_bChange = e => {
        setQ27_b(e.target.value)
    }
    const handleQ27_cChange = e => {
        setQ27_c(e.target.value)
    }
    const handleQ27_dChange = e => {
        setQ27_d(e.target.value)
    }
    const handleQ27_eChange = e => {
        setQ27_e(e.target.value)
    }
    const handleQ27_correctChange = e => {
        setQ27_correct(e.target.value)
    }
    const [q28Name, setQ28Name] = useState("")
    const [q28_a, setQ28_a] = useState("")
    const [q28_b, setQ28_b] = useState("")
    const [q28_c, setQ28_c] = useState("")
    const [q28_d, setQ28_d] = useState("")
    const [q28_e, setQ28_e] = useState("")
    const [q28_correct, setQ28_correct] = useState("")
    const handleQ28_NameChange = e => {
        setQ28Name(e.target.value)
    }
    const handleQ28_aChange = e => {
        setQ28_a(e.target.value)
    }
    const handleQ28_bChange = e => {
        setQ28_b(e.target.value)
    }
    const handleQ28_cChange = e => {
        setQ28_c(e.target.value)
    }
    const handleQ28_dChange = e => {
        setQ28_d(e.target.value)
    }
    const handleQ28_eChange = e => {
        setQ28_e(e.target.value)
    }
    const handleQ28_correctChange = e => {
        setQ28_correct(e.target.value)
    }
    const [q29Name, setQ29Name] = useState("")
    const [q29_a, setQ29_a] = useState("")
    const [q29_b, setQ29_b] = useState("")
    const [q29_c, setQ29_c] = useState("")
    const [q29_d, setQ29_d] = useState("")
    const [q29_e, setQ29_e] = useState("")
    const [q29_correct, setQ29_correct] = useState("")
    const handleQ29_NameChange = e => {
        setQ29Name(e.target.value)
    }
    const handleQ29_aChange = e => {
        setQ29_a(e.target.value)
    }
    const handleQ29_bChange = e => {
        setQ29_b(e.target.value)
    }
    const handleQ29_cChange = e => {
        setQ29_c(e.target.value)
    }
    const handleQ29_dChange = e => {
        setQ29_d(e.target.value)
    }
    const handleQ29_eChange = e => {
        setQ29_e(e.target.value)
    }
    const handleQ29_correctChange = e => {
        setQ29_correct(e.target.value)
    }
    const [q30Name, setQ30Name] = useState("")
    const [q30_a, setQ30_a] = useState("")
    const [q30_b, setQ30_b] = useState("")
    const [q30_c, setQ30_c] = useState("")
    const [q30_d, setQ30_d] = useState("")
    const [q30_e, setQ30_e] = useState("")
    const [q30_correct, setQ30_correct] = useState("")
    const handleQ30_NameChange = e => {
        setQ30Name(e.target.value)
    }
    const handleQ30_aChange = e => {
        setQ30_a(e.target.value)
    }
    const handleQ30_bChange = e => {
        setQ30_b(e.target.value)
    }
    const handleQ30_cChange = e => {
        setQ30_c(e.target.value)
    }
    const handleQ30_dChange = e => {
        setQ30_d(e.target.value)
    }
    const handleQ30_eChange = e => {
        setQ30_e(e.target.value)
    }
    const handleQ30_correctChange = e => {
        setQ30_correct(e.target.value)
    }


    const handlePost = e => {
        //console.log(questionList)
        axios({
            method: "POST",
            data: {
              writing: writingList,
              math1: math1List,
              reading: readingList,
              verbal: verbalList,
              math2: math2List,
              student: [],
            },
            withCredentials: true,
            url: "http://localhost:5000/exam/add",
          }).then((res) => console.log(res))
    }
    const [showConfirm, setShowConfirm] = useState(false)
    const handleShowConfirmClose = e => setShowConfirm(false);
    const handleShowConfirmShow = e => setShowConfirm(true);
    const CloseConfirmAndPost = e => {
        handlePost(e)
        handleShowConfirmClose(e)
    }

    const [showMath1, setShowMath1] = useState(false)
    const handleShowMath1 = e => setShowMath1(!showMath1)

    return (
        <div>
            <Container className="mx-auto" style={{width:'600px'}}>
                &nbsp;
                <form>
                    <div className="form-group">
                        <label className=""><h5>Exam name</h5></label>
                        <input className="form-control" placeholder=""/>
                    </div>

                    <div className="form-group">
                        <label className=""><h5>Category</h5></label>
                        <select className="form-control">
                            <option>Default select</option>
                        </select>
                    </div>

                    <div className="text-center"><h5>Writing Section</h5></div>
                    <div className="form-group">
                        <label><h5>Writing title</h5></label>
                        <textarea 
                            className="form-control" 
                            rows="10" 
                            onChange={hangle_writingChange}
                        ></textarea>
                    </div>


                    <div className="text-center"><h5>Quantitative 1 Section</h5></div> 
                    {!showMath1 ? 
                        <>
                            <div className="text-right">
                                <Button variant="primary" onClick={handleShowMath1}>Show</Button> 
                            </div>
                        </>
                        : null
                    }
                    
                    {showMath1 ? 
                    <>
                    <Question 
                        num='1'
                        handle_NameChange={handleQ1_NameChange}
                        handle_aChange={handleQ1_aChange}
                        handle_bChange={handleQ1_bChange}
                        handle_cChange={handleQ1_cChange}
                        handle_dChange={handleQ1_dChange}
                        handle_eChange={handleQ1_eChange}
                        handle_correctChange={handleQ1_correctChange}
                        />
                    <Question
                        num='2'
                        handle_NameChange={handleQ2_NameChange}
                        handle_aChange={handleQ2_aChange}
                        handle_bChange={handleQ2_bChange}
                        handle_cChange={handleQ2_cChange} 
                        handle_dChange={handleQ2_dChange}
                        handle_eChange={handleQ2_eChange}
                        handle_correctChange={handleQ2_correctChange}
                    />
                    <Question   
                        num='3'
                        handle_NameChange={handleQ3_NameChange}
                        handle_aChange={handleQ3_aChange}
                        handle_bChange={handleQ3_bChange}
                        handle_cChange={handleQ3_cChange} 
                        handle_dChange={handleQ3_dChange}
                        handle_eChange={handleQ3_eChange}
                        handle_correctChange={handleQ3_correctChange}
                    />
                    <Question   
                        num='4'
                        handle_NameChange={handleQ4_NameChange}
                        handle_aChange={handleQ4_aChange}
                        handle_bChange={handleQ4_bChange}
                        handle_cChange={handleQ4_cChange} 
                        handle_dChange={handleQ4_dChange}
                        handle_eChange={handleQ4_eChange}
                        handle_correctChange={handleQ4_correctChange}
                    />
                    <Question   
                        num='5'
                        handle_NameChange={handleQ5_NameChange}
                        handle_aChange={handleQ5_aChange}
                        handle_bChange={handleQ5_bChange}
                        handle_cChange={handleQ5_cChange} 
                        handle_dChange={handleQ5_dChange}
                        handle_eChange={handleQ5_eChange}
                        handle_correctChange={handleQ5_correctChange}
                    />
                    <Question   
                        num='6'
                        handle_NameChange={handleQ6_NameChange}
                        handle_aChange={handleQ6_aChange}
                        handle_bChange={handleQ6_bChange}
                        handle_cChange={handleQ6_cChange} 
                        handle_dChange={handleQ6_dChange}
                        handle_eChange={handleQ6_eChange}
                        handle_correctChange={handleQ6_correctChange}
                    />
                    <Question 
                        num='7'
                        handle_NameChange={handleQ7_NameChange}
                        handle_aChange={handleQ7_aChange}
                        handle_bChange={handleQ7_bChange}
                        handle_cChange={handleQ7_cChange} 
                        handle_dChange={handleQ7_dChange}
                        handle_eChange={handleQ7_eChange}
                        handle_correctChange={handleQ7_correctChange}
                    />
                    <Question
                        num='8'
                        handle_NameChange={handleQ8_NameChange}
                        handle_aChange={handleQ8_aChange}
                        handle_bChange={handleQ8_bChange}
                        handle_cChange={handleQ8_cChange} 
                        handle_dChange={handleQ8_dChange}
                        handle_eChange={handleQ8_eChange}
                        handle_correctChange={handleQ8_correctChange}
                    />
                    <Question   
                        num='9'
                        handle_NameChange={handleQ9_NameChange}
                        handle_aChange={handleQ9_aChange}
                        handle_bChange={handleQ9_bChange}
                        handle_cChange={handleQ9_cChange} 
                        handle_dChange={handleQ9_dChange}
                        handle_eChange={handleQ9_eChange}
                        handle_correctChange={handleQ9_correctChange}
                    />
                    <Question   
                        num='10'
                        handle_NameChange={handleQ10_NameChange}
                        handle_aChange={handleQ10_aChange}
                        handle_bChange={handleQ10_bChange}
                        handle_cChange={handleQ10_cChange} 
                        handle_dChange={handleQ10_dChange}
                        handle_eChange={handleQ10_eChange}
                        handle_correctChange={handleQ10_correctChange}
                    />
                    <Question   
                        num='11'
                        handle_NameChange={handleQ11_NameChange}
                        handle_aChange={handleQ11_aChange}
                        handle_bChange={handleQ11_bChange}
                        handle_cChange={handleQ11_cChange} 
                        handle_dChange={handleQ11_dChange}
                        handle_eChange={handleQ11_eChange}
                        handle_correctChange={handleQ11_correctChange}
                    />
                    <Question   
                        num='12'
                        handle_NameChange={handleQ12_NameChange}
                        handle_aChange={handleQ12_aChange}
                        handle_bChange={handleQ12_bChange}
                        handle_cChange={handleQ12_cChange} 
                        handle_dChange={handleQ12_dChange}
                        handle_eChange={handleQ12_eChange}
                        handle_correctChange={handleQ12_correctChange}
                    />
                    <Question 
                        num='13'
                        handle_NameChange={handleQ13_NameChange}
                        handle_aChange={handleQ13_aChange}
                        handle_bChange={handleQ13_bChange}
                        handle_cChange={handleQ13_cChange} 
                        handle_dChange={handleQ13_dChange}
                        handle_eChange={handleQ13_eChange}
                        handle_correctChange={handleQ13_correctChange}
                    />
                    <Question
                        num='14'
                        handle_NameChange={handleQ14_NameChange}
                        handle_aChange={handleQ14_aChange}
                        handle_bChange={handleQ14_bChange}
                        handle_cChange={handleQ14_cChange} 
                        handle_dChange={handleQ14_dChange}
                        handle_eChange={handleQ14_eChange}
                        handle_correctChange={handleQ14_correctChange}
                    />
                    <Question   
                        num='15'
                        handle_NameChange={handleQ15_NameChange}
                        handle_aChange={handleQ15_aChange}
                        handle_bChange={handleQ15_bChange}
                        handle_cChange={handleQ15_cChange} 
                        handle_dChange={handleQ15_dChange}
                        handle_eChange={handleQ15_eChange}
                        handle_correctChange={handleQ15_correctChange}
                    />
                    <Question   
                        num='16'
                        handle_NameChange={handleQ16_NameChange}
                        handle_aChange={handleQ16_aChange}
                        handle_bChange={handleQ16_bChange}
                        handle_cChange={handleQ16_cChange} 
                        handle_dChange={handleQ16_dChange}
                        handle_eChange={handleQ16_eChange}
                        handle_correctChange={handleQ16_correctChange}
                    />
                    <Question   
                        num='17'
                        handle_NameChange={handleQ17_NameChange}
                        handle_aChange={handleQ17_aChange}
                        handle_bChange={handleQ17_bChange}
                        handle_cChange={handleQ17_cChange} 
                        handle_dChange={handleQ17_dChange}
                        handle_eChange={handleQ17_eChange}
                        handle_correctChange={handleQ17_correctChange}
                    />
                    <Question   
                        num='18'
                        handle_NameChange={handleQ18_NameChange}
                        handle_aChange={handleQ18_aChange}
                        handle_bChange={handleQ18_bChange}
                        handle_cChange={handleQ18_cChange} 
                        handle_dChange={handleQ18_dChange}
                        handle_eChange={handleQ18_eChange}
                        handle_correctChange={handleQ18_correctChange}
                    />
                    <Question 
                        num='19'
                        handle_NameChange={handleQ19_NameChange}
                        handle_aChange={handleQ19_aChange}
                        handle_bChange={handleQ19_bChange}
                        handle_cChange={handleQ19_cChange} 
                        handle_dChange={handleQ19_dChange}
                        handle_eChange={handleQ19_eChange}
                        handle_correctChange={handleQ19_correctChange}
                    />
                    <Question
                        num='20'
                        handle_NameChange={handleQ20_NameChange}
                        handle_aChange={handleQ20_aChange}
                        handle_bChange={handleQ20_bChange}
                        handle_cChange={handleQ20_cChange} 
                        handle_dChange={handleQ20_dChange}
                        handle_eChange={handleQ20_eChange}
                        handle_correctChange={handleQ20_correctChange}
                    />
                    <Question   
                        num='21'
                        handle_NameChange={handleQ21_NameChange}
                        handle_aChange={handleQ21_aChange}
                        handle_bChange={handleQ21_bChange}
                        handle_cChange={handleQ21_cChange} 
                        handle_dChange={handleQ21_dChange}
                        handle_eChange={handleQ21_eChange}
                        handle_correctChange={handleQ21_correctChange}
                    />
                    <Question   
                        num='22'
                        handle_NameChange={handleQ22_NameChange}
                        handle_aChange={handleQ22_aChange}
                        handle_bChange={handleQ22_bChange}
                        handle_cChange={handleQ22_cChange} 
                        handle_dChange={handleQ22_dChange}
                        handle_eChange={handleQ22_eChange}
                        handle_correctChange={handleQ22_correctChange}
                    />
                    <Question   
                        num='23'
                        handle_NameChange={handleQ23_NameChange}
                        handle_aChange={handleQ23_aChange}
                        handle_bChange={handleQ23_bChange}
                        handle_cChange={handleQ23_cChange} 
                        handle_dChange={handleQ23_dChange}
                        handle_eChange={handleQ23_eChange}
                        handle_correctChange={handleQ23_correctChange}
                    />
                    <Question   
                        num='24'
                        handle_NameChange={handleQ24_NameChange}
                        handle_aChange={handleQ24_aChange}
                        handle_bChange={handleQ24_bChange}
                        handle_cChange={handleQ24_cChange} 
                        handle_dChange={handleQ24_dChange}
                        handle_eChange={handleQ24_eChange}
                        handle_correctChange={handleQ24_correctChange}
                    />
                    <Question 
                        num='25'
                        handle_NameChange={handleQ25_NameChange}
                        handle_aChange={handleQ25_aChange}
                        handle_bChange={handleQ25_bChange}
                        handle_cChange={handleQ25_cChange} 
                        handle_dChange={handleQ25_dChange}
                        handle_eChange={handleQ25_eChange}
                        handle_correctChange={handleQ25_correctChange}
                    />
                    <Question
                        num='26'
                        handle_NameChange={handleQ26_NameChange}
                        handle_aChange={handleQ26_aChange}
                        handle_bChange={handleQ26_bChange}
                        handle_cChange={handleQ26_cChange} 
                        handle_dChange={handleQ26_dChange}
                        handle_eChange={handleQ26_eChange}
                        handle_correctChange={handleQ26_correctChange}
                    />
                    <Question   
                        num='27'
                        handle_NameChange={handleQ27_NameChange}
                        handle_aChange={handleQ27_aChange}
                        handle_bChange={handleQ27_bChange}
                        handle_cChange={handleQ27_cChange} 
                        handle_dChange={handleQ27_dChange}
                        handle_eChange={handleQ27_eChange}
                        handle_correctChange={handleQ27_correctChange}
                    />
                    <Question   
                        num='28'
                        handle_NameChange={handleQ28_NameChange}
                        handle_aChange={handleQ28_aChange}
                        handle_bChange={handleQ28_bChange}
                        handle_cChange={handleQ28_cChange} 
                        handle_dChange={handleQ28_dChange}
                        handle_eChange={handleQ28_eChange}
                        handle_correctChange={handleQ28_correctChange}
                    />
                    <Question   
                        num='29'
                        handle_NameChange={handleQ29_NameChange}
                        handle_aChange={handleQ29_aChange}
                        handle_bChange={handleQ29_bChange}
                        handle_cChange={handleQ29_cChange} 
                        handle_dChange={handleQ29_dChange}
                        handle_eChange={handleQ29_eChange}
                        handle_correctChange={handleQ29_correctChange}
                    />
                    <Question   
                        num='30'
                        handle_NameChange={handleQ30_NameChange}
                        handle_aChange={handleQ30_aChange}
                        handle_bChange={handleQ30_bChange}
                        handle_cChange={handleQ30_cChange} 
                        handle_dChange={handleQ30_dChange}
                        handle_eChange={handleQ30_eChange}
                        handle_correctChange={handleQ30_correctChange}
                    />
                    <div className="text-right">
                        <Button variant="primary" onClick={handleShowMath1}>Hide</Button>
                    </div>
                    </>
                    : null
                    }
                    

                    <div className="text-center"><h5>Reading Section</h5></div>

                    <div className="text-center"><h5>Verbal Section</h5></div>

                    <div className="text-center"><h5>Quantitative 2 Section</h5></div>

                </form>

                <br/>
                <br/>
                <div className="text-right">
                    <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
                </div>

                <Modal show={showConfirm} onHide={handleShowConfirmClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Confirmation Message
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShowConfirmClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={CloseConfirmAndPost}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
                <br/>
                <br/>

            </Container>
        </div>
    )
}