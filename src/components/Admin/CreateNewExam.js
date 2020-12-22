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
            [
                {
                    "id": "1",
                    "question": M1q1Name,
                    "answer_a": M1q1_a,
                    "answer_b": M1q1_b,
                    "answer_c": M1q1_c,
                    "answer_d": M1q1_d,
                    "answer_e": M1q1_e,
                    "correct_answer": M1q1_correct,
                },
                {
                    "id": "2",
                    "question": M1q2Name,
                    "answer_a": M1q2_a,
                    "answer_b": M1q2_b,
                    "answer_c": M1q2_c,
                    "answer_d": M1q2_d,
                    "answer_e": M1q2_e,
                    "correct_answer": M1q2_correct,
                },
                {
                    "id":"3",
                    "question": M1q3Name,
                    "answer_a": M1q3_a,
                    "answer_b": M1q3_b,
                    "answer_c": M1q3_c,
                    "answer_d": M1q3_d,
                    "answer_e": M1q3_e,
                    "correct_answer": M1q3_correct,
                },
                {
                    "id":"4",
                    "question": M1q4Name,
                    "answer_a": M1q4_a,
                    "answer_b": M1q4_b,
                    "answer_c": M1q4_c,
                    "answer_d": M1q4_d,
                    "answer_e": M1q4_e,
                    "correct_answer": M1q4_correct,
                },
                {
                    "id":"5",
                    "question": M1q5Name,
                    "answer_a": M1q5_a,
                    "answer_b": M1q5_b,
                    "answer_c": M1q5_c,
                    "answer_d": M1q5_d,
                    "answer_e": M1q5_e,
                    "correct_answer": M1q5_correct,
                },
                {
                    "id":"6",
                    "question": M1q6Name,
                    "answer_a": M1q6_a,
                    "answer_b": M1q6_b,
                    "answer_c": M1q6_c,
                    "answer_d": M1q6_d,
                    "answer_e": M1q6_e,
                    "correct_answer": M1q6_correct,
                },
                {
                    "id":"7",
                    "question": M1q7Name,
                    "answer_a": M1q7_a,
                    "answer_b": M1q7_b,
                    "answer_c": M1q7_c,
                    "answer_d": M1q7_d,
                    "answer_e": M1q7_e,
                    "correct_answer": M1q7_correct,
                },
                {
                    "id":"8",
                    "question": M1q8Name,
                    "answer_a": M1q8_a,
                    "answer_b": M1q8_b,
                    "answer_c": M1q8_c,
                    "answer_d": M1q8_d,
                    "answer_e": M1q8_e,
                    "correct_answer": M1q8_correct,
                },
                {
                    "id":"9",
                    "question": M1q9Name,
                    "answer_a": M1q9_a,
                    "answer_b": M1q9_b,
                    "answer_c": M1q9_c,
                    "answer_d": M1q9_d,
                    "answer_e": M1q9_e,
                    "correct_answer": M1q9_correct,
                },
                {
                    "id":"10",
                    "question": M1q10Name,
                    "answer_a": M1q10_a,
                    "answer_b": M1q10_b,
                    "answer_c": M1q10_c,
                    "answer_d": M1q10_d,
                    "answer_e": M1q10_e,
                    "correct_answer": M1q10_correct,
                },
                {
                    "id":"11",
                    "question": M1q11Name,
                    "answer_a": M1q11_a,
                    "answer_b": M1q11_b,
                    "answer_c": M1q11_c,
                    "answer_d": M1q11_d,
                    "answer_e": M1q11_e,
                    "correct_answer": M1q11_correct,
                },
                {
                    "id":"12",
                    "question": M1q12Name,
                    "answer_a": M1q12_a,
                    "answer_b": M1q12_b,
                    "answer_c": M1q12_c,
                    "answer_d": M1q12_d,
                    "answer_e": M1q12_e,
                    "correct_answer": M1q12_correct,
                },
                {
                    "id":"13",
                    "question": M1q13Name,
                    "answer_a": M1q13_a,
                    "answer_b": M1q13_b,
                    "answer_c": M1q13_c,
                    "answer_d": M1q13_d,
                    "answer_e": M1q13_e,
                    "correct_answer": M1q13_correct,
                },
                {
                    "id":"14",
                    "question": M1q14Name,
                    "answer_a": M1q14_a,
                    "answer_b": M1q14_b,
                    "answer_c": M1q14_c,
                    "answer_d": M1q14_d,
                    "answer_e": M1q14_e,
                    "correct_answer": M1q14_correct,
                },
                {
                    "id":"15",
                    "question": M1q15Name,
                    "answer_a": M1q15_a,
                    "answer_b": M1q15_b,
                    "answer_c": M1q15_c,
                    "answer_d": M1q15_d,
                    "answer_e": M1q15_e,
                    "correct_answer": M1q15_correct,
                },
                {
                    "id":"16",
                    "question": M1q16Name,
                    "answer_a": M1q16_a,
                    "answer_b": M1q16_b,
                    "answer_c": M1q16_c,
                    "answer_d": M1q16_d,
                    "answer_e": M1q16_e,
                    "correct_answer": M1q16_correct,
                },
                {
                    "id":"17",
                    "question": M1q17Name,
                    "answer_a": M1q17_a,
                    "answer_b": M1q17_b,
                    "answer_c": M1q17_c,
                    "answer_d": M1q17_d,
                    "answer_e": M1q17_e,
                    "correct_answer": M1q17_correct,
                },
                {
                    "id":"18",
                    "question": M1q18Name,
                    "answer_a": M1q18_a,
                    "answer_b": M1q18_b,
                    "answer_c": M1q18_c,
                    "answer_d": M1q18_d,
                    "answer_e": M1q18_e,
                    "correct_answer": M1q18_correct,
                },
                {
                    "id":"19",
                    "question": M1q19Name,
                    "answer_a": M1q19_a,
                    "answer_b": M1q19_b,
                    "answer_c": M1q19_c,
                    "answer_d": M1q19_d,
                    "answer_e": M1q19_e,
                    "correct_answer": M1q19_correct,
                },
                {
                    "id":"20",
                    "question": M1q20Name,
                    "answer_a": M1q20_a,
                    "answer_b": M1q20_b,
                    "answer_c": M1q20_c,
                    "answer_d": M1q20_d,
                    "answer_e": M1q20_e,
                    "correct_answer": M1q20_correct,
                },
                {
                    "id":"21",
                    "question": M1q21Name,
                    "answer_a": M1q21_a,
                    "answer_b": M1q21_b,
                    "answer_c": M1q21_c,
                    "answer_d": M1q21_d,
                    "answer_e": M1q21_e,
                    "correct_answer": M1q21_correct,
                },
                {
                    "id":"22",
                    "question": M1q22Name,
                    "answer_a": M1q22_a,
                    "answer_b": M1q22_b,
                    "answer_c": M1q22_c,
                    "answer_d": M1q22_d,
                    "answer_e": M1q22_e,
                    "correct_answer": M1q22_correct,
                },
                {
                    "id":"23",
                    "question": M1q23Name,
                    "answer_a": M1q23_a,
                    "answer_b": M1q23_b,
                    "answer_c": M1q23_c,
                    "answer_d": M1q23_d,
                    "answer_e": M1q23_e,
                    "correct_answer": M1q23_correct,
                },
                {
                    "id":"24",
                    "question": M1q24Name,
                    "answer_a": M1q24_a,
                    "answer_b": M1q24_b,
                    "answer_c": M1q24_c,
                    "answer_d": M1q24_d,
                    "answer_e": M1q24_e,
                    "correct_answer": M1q24_correct,
                },
                {
                    "id":"25",
                    "question": M1q25Name,
                    "answer_a": M1q25_a,
                    "answer_b": M1q25_b,
                    "answer_c": M1q25_c,
                    "answer_d": M1q25_d,
                    "answer_e": M1q25_e,
                    "correct_answer": M1q25_correct,
                }
            ]
        )

        setReadingList(
            [
                {
                    "paragraph": paragraphName_1,
                },
                {
                    "id": "1",
                    "question": Readq1Name,
                    "answer_a": Readq1_a,
                    "answer_b": Readq1_b,
                    "answer_c": Readq1_c,
                    "answer_d": Readq1_d,
                    "answer_e": Readq1_e,
                    "correct_answer": Readq1_correct,
                },
                {
                    "id": "2",
                    "question": Readq2Name,
                    "answer_a": Readq2_a,
                    "answer_b": Readq2_b,
                    "answer_c": Readq2_c,
                    "answer_d": Readq2_d,
                    "answer_e": Readq2_e,
                    "correct_answer": Readq2_correct,
                },
                {
                    "id":"3",
                    "question": Readq3Name,
                    "answer_a": Readq3_a,
                    "answer_b": Readq3_b,
                    "answer_c": Readq3_c,
                    "answer_d": Readq3_d,
                    "answer_e": Readq3_e,
                    "correct_answer": Readq3_correct,
                },
                {
                    "id":"4",
                    "question": Readq4Name,
                    "answer_a": Readq4_a,
                    "answer_b": Readq4_b,
                    "answer_c": Readq4_c,
                    "answer_d": Readq4_d,
                    "answer_e": Readq4_e,
                    "correct_answer": Readq4_correct,
                },
                {
                    "id":"5",
                    "question": Readq5Name,
                    "answer_a": Readq5_a,
                    "answer_b": Readq5_b,
                    "answer_c": Readq5_c,
                    "answer_d": Readq5_d,
                    "answer_e": Readq5_e,
                    "correct_answer": Readq5_correct,
                },
                {
                    "id":"6",
                    "question": Readq6Name,
                    "answer_a": Readq6_a,
                    "answer_b": Readq6_b,
                    "answer_c": Readq6_c,
                    "answer_d": Readq6_d,
                    "answer_e": Readq6_e,
                    "correct_answer": Readq6_correct,
                },
                {
                    "paragraph": paragraphName_2,
                },
                {
                    "id":"7",
                    "question": Readq7Name,
                    "answer_a": Readq7_a,
                    "answer_b": Readq7_b,
                    "answer_c": Readq7_c,
                    "answer_d": Readq7_d,
                    "answer_e": Readq7_e,
                    "correct_answer": Readq7_correct,
                },
                {
                    "id":"8",
                    "question": Readq8Name,
                    "answer_a": Readq8_a,
                    "answer_b": Readq8_b,
                    "answer_c": Readq8_c,
                    "answer_d": Readq8_d,
                    "answer_e": Readq8_e,
                    "correct_answer": Readq8_correct,
                },
                {
                    "id":"9",
                    "question": Readq9Name,
                    "answer_a": Readq9_a,
                    "answer_b": Readq9_b,
                    "answer_c": Readq9_c,
                    "answer_d": Readq9_d,
                    "answer_e": Readq9_e,
                    "correct_answer": Readq9_correct,
                },
                {
                    "id":"10",
                    "question": Readq10Name,
                    "answer_a": Readq10_a,
                    "answer_b": Readq10_b,
                    "answer_c": Readq10_c,
                    "answer_d": Readq10_d,
                    "answer_e": Readq10_e,
                    "correct_answer": Readq10_correct,
                },
                {
                    "id":"11",
                    "question": Readq11Name,
                    "answer_a": Readq11_a,
                    "answer_b": Readq11_b,
                    "answer_c": Readq11_c,
                    "answer_d": Readq11_d,
                    "answer_e": Readq11_e,
                    "correct_answer": Readq11_correct,
                },
                {
                    "id":"12",
                    "question": Readq12Name,
                    "answer_a": Readq12_a,
                    "answer_b": Readq12_b,
                    "answer_c": Readq12_c,
                    "answer_d": Readq12_d,
                    "answer_e": Readq12_e,
                    "correct_answer": Readq12_correct,
                },
                {
                    "paragraph": paragraphName_3,
                },
                {
                    "id":"13",
                    "question": Readq13Name,
                    "answer_a": Readq13_a,
                    "answer_b": Readq13_b,
                    "answer_c": Readq13_c,
                    "answer_d": Readq13_d,
                    "answer_e": Readq13_e,
                    "correct_answer": Readq13_correct,
                },
                {
                    "id":"14",
                    "question": Readq14Name,
                    "answer_a": Readq14_a,
                    "answer_b": Readq14_b,
                    "answer_c": Readq14_c,
                    "answer_d": Readq14_d,
                    "answer_e": Readq14_e,
                    "correct_answer": Readq14_correct,
                },
                {
                    "id":"15",
                    "question": Readq15Name,
                    "answer_a": Readq15_a,
                    "answer_b": Readq15_b,
                    "answer_c": Readq15_c,
                    "answer_d": Readq15_d,
                    "answer_e": Readq15_e,
                    "correct_answer": Readq15_correct,
                },
                {
                    "id":"16",
                    "question": Readq16Name,
                    "answer_a": Readq16_a,
                    "answer_b": Readq16_b,
                    "answer_c": Readq16_c,
                    "answer_d": Readq16_d,
                    "answer_e": Readq16_e,
                    "correct_answer": Readq16_correct,
                },
                {
                    "id":"17",
                    "question": Readq17Name,
                    "answer_a": Readq17_a,
                    "answer_b": Readq17_b,
                    "answer_c": Readq17_c,
                    "answer_d": Readq17_d,
                    "answer_e": Readq17_e,
                    "correct_answer": Readq17_correct,
                },
                {
                    "id":"18",
                    "question": Readq18Name,
                    "answer_a": Readq18_a,
                    "answer_b": Readq18_b,
                    "answer_c": Readq18_c,
                    "answer_d": Readq18_d,
                    "answer_e": Readq18_e,
                    "correct_answer": Readq18_correct,
                },
                {
                    "paragraph": paragraphName_4,
                },
                {
                    "id":"19",
                    "question": Readq19Name,
                    "answer_a": Readq19_a,
                    "answer_b": Readq19_b,
                    "answer_c": Readq19_c,
                    "answer_d": Readq19_d,
                    "answer_e": Readq19_e,
                    "correct_answer": Readq19_correct,
                },
                {
                    "id":"20",
                    "question": Readq20Name,
                    "answer_a": Readq20_a,
                    "answer_b": Readq20_b,
                    "answer_c": Readq20_c,
                    "answer_d": Readq20_d,
                    "answer_e": Readq20_e,
                    "correct_answer": Readq20_correct,
                },
                {
                    "id":"21",
                    "question": Readq21Name,
                    "answer_a": Readq21_a,
                    "answer_b": Readq21_b,
                    "answer_c": Readq21_c,
                    "answer_d": Readq21_d,
                    "answer_e": Readq21_e,
                    "correct_answer": Readq21_correct,
                },
                {
                    "id":"22",
                    "question": Readq22Name,
                    "answer_a": Readq22_a,
                    "answer_b": Readq22_b,
                    "answer_c": Readq22_c,
                    "answer_d": Readq22_d,
                    "answer_e": Readq22_e,
                    "correct_answer": Readq22_correct,
                },
                {
                    "id":"23",
                    "question": Readq23Name,
                    "answer_a": Readq23_a,
                    "answer_b": Readq23_b,
                    "answer_c": Readq23_c,
                    "answer_d": Readq23_d,
                    "answer_e": Readq23_e,
                    "correct_answer": Readq23_correct,
                },
                {
                    "id":"24",
                    "question": Readq24Name,
                    "answer_a": Readq24_a,
                    "answer_b": Readq24_b,
                    "answer_c": Readq24_c,
                    "answer_d": Readq24_d,
                    "answer_e": Readq24_e,
                    "correct_answer": Readq24_correct,
                },
                {
                    "paragraph": paragraphName_5,
                },
                {
                    "id":"25",
                    "question": Readq25Name,
                    "answer_a": Readq25_a,
                    "answer_b": Readq25_b,
                    "answer_c": Readq25_c,
                    "answer_d": Readq25_d,
                    "answer_e": Readq25_e,
                    "correct_answer": Readq25_correct,
                },
                {
                    "id":"26",
                    "question": Readq26Name,
                    "answer_a": Readq26_a,
                    "answer_b": Readq26_b,
                    "answer_c": Readq26_c,
                    "answer_d": Readq26_d,
                    "answer_e": Readq26_e,
                    "correct_answer": Readq26_correct,
                },
                {
                    "id":"27",
                    "question": Readq27Name,
                    "answer_a": Readq27_a,
                    "answer_b": Readq27_b,
                    "answer_c": Readq27_c,
                    "answer_d": Readq27_d,
                    "answer_e": Readq27_e,
                    "correct_answer": Readq27_correct,
                },
                {
                    "id":"28",
                    "question": Readq28Name,
                    "answer_a": Readq28_a,
                    "answer_b": Readq28_b,
                    "answer_c": Readq28_c,
                    "answer_d": Readq28_d,
                    "answer_e": Readq28_e,
                    "correct_answer": Readq28_correct,
                },
                {
                    "id":"29",
                    "question": Readq29Name,
                    "answer_a": Readq29_a,
                    "answer_b": Readq29_b,
                    "answer_c": Readq29_c,
                    "answer_d": Readq29_d,
                    "answer_e": Readq29_e,
                    "correct_answer": Readq29_correct,
                },
                {
                    "id":"30",
                    "question": Readq30Name,
                    "answer_a": Readq30_a,
                    "answer_b": Readq30_b,
                    "answer_c": Readq30_c,
                    "answer_d": Readq30_d,
                    "answer_e": Readq30_e,
                    "correct_answer": Readq30_correct,
                },
                {
                    "paragraph": paragraphName_6,
                },
                {
                    "id": "31",
                    "question": Readq31Name,
                    "answer_a": Readq31_a,
                    "answer_b": Readq31_b,
                    "answer_c": Readq31_c,
                    "answer_d": Readq31_d,
                    "answer_e": Readq31_e,
                    "correct_answer": Readq31_correct,
                },
                {
                    "id": "32",
                    "question": Readq32Name,
                    "answer_a": Readq32_a,
                    "answer_b": Readq32_b,
                    "answer_c": Readq32_c,
                    "answer_d": Readq32_d,
                    "answer_e": Readq32_e,
                    "correct_answer": Readq32_correct,
                },
                {
                    "id":"33",
                    "question": Readq33Name,
                    "answer_a": Readq33_a,
                    "answer_b": Readq33_b,
                    "answer_c": Readq33_c,
                    "answer_d": Readq33_d,
                    "answer_e": Readq33_e,
                    "correct_answer": Readq33_correct,
                },
                {
                    "id":"34",
                    "question": Readq34Name,
                    "answer_a": Readq34_a,
                    "answer_b": Readq34_b,
                    "answer_c": Readq34_c,
                    "answer_d": Readq34_d,
                    "answer_e": Readq34_e,
                    "correct_answer": Readq34_correct,
                },
                {
                    "id":"35",
                    "question": Readq35Name,
                    "answer_a": Readq35_a,
                    "answer_b": Readq35_b,
                    "answer_c": Readq35_c,
                    "answer_d": Readq35_d,
                    "answer_e": Readq35_e,
                    "correct_answer": Readq35_correct,
                },
                {
                    "id":"36",
                    "question": Readq36Name,
                    "answer_a": Readq36_a,
                    "answer_b": Readq36_b,
                    "answer_c": Readq36_c,
                    "answer_d": Readq36_d,
                    "answer_e": Readq36_e,
                    "correct_answer": Readq36_correct,
                },
                {
                    "paragraph": paragraphName_7,
                },
                {
                    "id":"37",
                    "question": Readq37Name,
                    "answer_a": Readq37_a,
                    "answer_b": Readq37_b,
                    "answer_c": Readq37_c,
                    "answer_d": Readq37_d,
                    "answer_e": Readq37_e,
                    "correct_answer": Readq37_correct,
                },
                {
                    "id":"38",
                    "question": Readq38Name,
                    "answer_a": Readq38_a,
                    "answer_b": Readq38_b,
                    "answer_c": Readq38_c,
                    "answer_d": Readq38_d,
                    "answer_e": Readq38_e,
                    "correct_answer": Readq38_correct,
                },
                {
                    "id":"39",
                    "question": Readq39Name,
                    "answer_a": Readq39_a,
                    "answer_b": Readq39_b,
                    "answer_c": Readq39_c,
                    "answer_d": Readq39_d,
                    "answer_e": Readq39_e,
                    "correct_answer": Readq39_correct,
                },
                {
                    "id":"40",
                    "question": Readq40Name,
                    "answer_a": Readq40_a,
                    "answer_b": Readq40_b,
                    "answer_c": Readq40_c,
                    "answer_d": Readq40_d,
                    "answer_e": Readq40_e,
                    "correct_answer": Readq40_correct,
                },
                {
                    "id":"41",
                    "question": Readq41Name,
                    "answer_a": Readq41_a,
                    "answer_b": Readq41_b,
                    "answer_c": Readq41_c,
                    "answer_d": Readq41_d,
                    "answer_e": Readq41_e,
                    "correct_answer": Readq41_correct,
                },
                {
                    "id":"42",
                    "question": Readq42Name,
                    "answer_a": Readq42_a,
                    "answer_b": Readq42_b,
                    "answer_c": Readq42_c,
                    "answer_d": Readq42_d,
                    "answer_e": Readq42_e,
                    "correct_answer": Readq42_correct,
                },
                {
                    "paragraph": paragraphName_8,
                },
                {
                    "id":"43",
                    "question": Readq43Name,
                    "answer_a": Readq43_a,
                    "answer_b": Readq43_b,
                    "answer_c": Readq43_c,
                    "answer_d": Readq43_d,
                    "answer_e": Readq43_e,
                    "correct_answer": Readq43_correct,
                },
                {
                    "id":"44",
                    "question": Readq44Name,
                    "answer_a": Readq44_a,
                    "answer_b": Readq44_b,
                    "answer_c": Readq44_c,
                    "answer_d": Readq44_d,
                    "answer_e": Readq44_e,
                    "correct_answer": Readq44_correct,
                },
                {
                    "id":"45",
                    "question": Readq45Name,
                    "answer_a": Readq45_a,
                    "answer_b": Readq45_b,
                    "answer_c": Readq45_c,
                    "answer_d": Readq45_d,
                    "answer_e": Readq45_e,
                    "correct_answer": Readq45_correct,
                },
                {
                    "id":"46",
                    "question": Readq46Name,
                    "answer_a": Readq46_a,
                    "answer_b": Readq46_b,
                    "answer_c": Readq46_c,
                    "answer_d": Readq46_d,
                    "answer_e": Readq46_e,
                    "correct_answer": Readq46_correct,
                },
                {
                    "id":"47",
                    "question": Readq47Name,
                    "answer_a": Readq47_a,
                    "answer_b": Readq47_b,
                    "answer_c": Readq47_c,
                    "answer_d": Readq47_d,
                    "answer_e": Readq47_e,
                    "correct_answer": Readq47_correct,
                },
                {
                    "id":"48",
                    "question": Readq48Name,
                    "answer_a": Readq48_a,
                    "answer_b": Readq48_b,
                    "answer_c": Readq48_c,
                    "answer_d": Readq48_d,
                    "answer_e": Readq48_e,
                    "correct_answer": Readq48_correct,
                }
            ]
        )

        setVerbalList(
            [   
                {
                    "id": "1",
                    "question": Vq1Name,
                    "answer_a": Vq1_a,
                    "answer_b": Vq1_b,
                    "answer_c": Vq1_c,
                    "answer_d": Vq1_d,
                    "answer_e": Vq1_e,
                    "correct_answer": Vq1_correct,
                },
                {
                    "id": "2",
                    "question": Vq2Name,
                    "answer_a": Vq2_a,
                    "answer_b": Vq2_b,
                    "answer_c": Vq2_c,
                    "answer_d": Vq2_d,
                    "answer_e": Vq2_e,
                    "correct_answer": Vq2_correct,
                },
                {
                    "id":"3",
                    "question": Vq3Name,
                    "answer_a": Vq3_a,
                    "answer_b": Vq3_b,
                    "answer_c": Vq3_c,
                    "answer_d": Vq3_d,
                    "answer_e": Vq3_e,
                    "correct_answer": Vq3_correct,
                },
                {
                    "id":"4",
                    "question": Vq4Name,
                    "answer_a": Vq4_a,
                    "answer_b": Vq4_b,
                    "answer_c": Vq4_c,
                    "answer_d": Vq4_d,
                    "answer_e": Vq4_e,
                    "correct_answer": Vq4_correct,
                },
                {
                    "id":"5",
                    "question": Vq5Name,
                    "answer_a": Vq5_a,
                    "answer_b": Vq5_b,
                    "answer_c": Vq5_c,
                    "answer_d": Vq5_d,
                    "answer_e": Vq5_e,
                    "correct_answer": Vq5_correct,
                },
                {
                    "id":"6",
                    "question": Vq6Name,
                    "answer_a": Vq6_a,
                    "answer_b": Vq6_b,
                    "answer_c": Vq6_c,
                    "answer_d": Vq6_d,
                    "answer_e": Vq6_e,
                    "correct_answer": Vq6_correct,
                },
                {
                    "id":"7",
                    "question": Vq7Name,
                    "answer_a": Vq7_a,
                    "answer_b": Vq7_b,
                    "answer_c": Vq7_c,
                    "answer_d": Vq7_d,
                    "answer_e": Vq7_e,
                    "correct_answer": Vq7_correct,
                },
                {
                    "id":"8",
                    "question": Vq8Name,
                    "answer_a": Vq8_a,
                    "answer_b": Vq8_b,
                    "answer_c": Vq8_c,
                    "answer_d": Vq8_d,
                    "answer_e": Vq8_e,
                    "correct_answer": Vq8_correct,
                },
                {
                    "id":"9",
                    "question": Vq9Name,
                    "answer_a": Vq9_a,
                    "answer_b": Vq9_b,
                    "answer_c": Vq9_c,
                    "answer_d": Vq9_d,
                    "answer_e": Vq9_e,
                    "correct_answer": Vq9_correct,
                },
                {
                    "id":"10",
                    "question": Vq10Name,
                    "answer_a": Vq10_a,
                    "answer_b": Vq10_b,
                    "answer_c": Vq10_c,
                    "answer_d": Vq10_d,
                    "answer_e": Vq10_e,
                    "correct_answer": Vq10_correct,
                },
                {
                    "id":"11",
                    "question": Vq11Name,
                    "answer_a": Vq11_a,
                    "answer_b": Vq11_b,
                    "answer_c": Vq11_c,
                    "answer_d": Vq11_d,
                    "answer_e": Vq11_e,
                    "correct_answer": Vq11_correct,
                },
                {
                    "id":"12",
                    "question": Vq12Name,
                    "answer_a": Vq12_a,
                    "answer_b": Vq12_b,
                    "answer_c": Vq12_c,
                    "answer_d": Vq12_d,
                    "answer_e": Vq12_e,
                    "correct_answer": Vq12_correct,
                },
                {
                    "id":"13",
                    "question": Vq13Name,
                    "answer_a": Vq13_a,
                    "answer_b": Vq13_b,
                    "answer_c": Vq13_c,
                    "answer_d": Vq13_d,
                    "answer_e": Vq13_e,
                    "correct_answer": Vq13_correct,
                },
                {
                    "id":"14",
                    "question": Vq14Name,
                    "answer_a": Vq14_a,
                    "answer_b": Vq14_b,
                    "answer_c": Vq14_c,
                    "answer_d": Vq14_d,
                    "answer_e": Vq14_e,
                    "correct_answer": Vq14_correct,
                },
                {
                    "id":"15",
                    "question": Vq15Name,
                    "answer_a": Vq15_a,
                    "answer_b": Vq15_b,
                    "answer_c": Vq15_c,
                    "answer_d": Vq15_d,
                    "answer_e": Vq15_e,
                    "correct_answer": Vq15_correct,
                },
                {
                    "id":"16",
                    "question": Vq16Name,
                    "answer_a": Vq16_a,
                    "answer_b": Vq16_b,
                    "answer_c": Vq16_c,
                    "answer_d": Vq16_d,
                    "answer_e": Vq16_e,
                    "correct_answer": Vq16_correct,
                },
                {
                    "id":"17",
                    "question": Vq17Name,
                    "answer_a": Vq17_a,
                    "answer_b": Vq17_b,
                    "answer_c": Vq17_c,
                    "answer_d": Vq17_d,
                    "answer_e": Vq17_e,
                    "correct_answer": Vq17_correct,
                },
                {
                    "id":"18",
                    "question": Vq18Name,
                    "answer_a": Vq18_a,
                    "answer_b": Vq18_b,
                    "answer_c": Vq18_c,
                    "answer_d": Vq18_d,
                    "answer_e": Vq18_e,
                    "correct_answer": Vq18_correct,
                },
                {
                    "id":"19",
                    "question": Vq19Name,
                    "answer_a": Vq19_a,
                    "answer_b": Vq19_b,
                    "answer_c": Vq19_c,
                    "answer_d": Vq19_d,
                    "answer_e": Vq19_e,
                    "correct_answer": Vq19_correct,
                },
                {
                    "id":"20",
                    "question": Vq20Name,
                    "answer_a": Vq20_a,
                    "answer_b": Vq20_b,
                    "answer_c": Vq20_c,
                    "answer_d": Vq20_d,
                    "answer_e": Vq20_e,
                    "correct_answer": Vq20_correct,
                },
                {
                    "id":"21",
                    "question": Vq21Name,
                    "answer_a": Vq21_a,
                    "answer_b": Vq21_b,
                    "answer_c": Vq21_c,
                    "answer_d": Vq21_d,
                    "answer_e": Vq21_e,
                    "correct_answer": Vq21_correct,
                },
                {
                    "id":"22",
                    "question": Vq22Name,
                    "answer_a": Vq22_a,
                    "answer_b": Vq22_b,
                    "answer_c": Vq22_c,
                    "answer_d": Vq22_d,
                    "answer_e": Vq22_e,
                    "correct_answer": Vq22_correct,
                },
                {
                    "id":"23",
                    "question": Vq23Name,
                    "answer_a": Vq23_a,
                    "answer_b": Vq23_b,
                    "answer_c": Vq23_c,
                    "answer_d": Vq23_d,
                    "answer_e": Vq23_e,
                    "correct_answer": Vq23_correct,
                },
                {
                    "id":"24",
                    "question": Vq24Name,
                    "answer_a": Vq24_a,
                    "answer_b": Vq24_b,
                    "answer_c": Vq24_c,
                    "answer_d": Vq24_d,
                    "answer_e": Vq24_e,
                    "correct_answer": Vq24_correct,
                },
                {
                    "id":"25",
                    "question": Vq25Name,
                    "answer_a": Vq25_a,
                    "answer_b": Vq25_b,
                    "answer_c": Vq25_c,
                    "answer_d": Vq25_d,
                    "answer_e": Vq25_e,
                    "correct_answer": Vq25_correct,
                },
                {
                    "id":"26",
                    "question": Vq26Name,
                    "answer_a": Vq26_a,
                    "answer_b": Vq26_b,
                    "answer_c": Vq26_c,
                    "answer_d": Vq26_d,
                    "answer_e": Vq26_e,
                    "correct_answer": Vq26_correct,
                },
                {
                    "id":"27",
                    "question": Vq27Name,
                    "answer_a": Vq27_a,
                    "answer_b": Vq27_b,
                    "answer_c": Vq27_c,
                    "answer_d": Vq27_d,
                    "answer_e": Vq27_e,
                    "correct_answer": Vq27_correct,
                },
                {
                    "id":"28",
                    "question": Vq28Name,
                    "answer_a": Vq28_a,
                    "answer_b": Vq28_b,
                    "answer_c": Vq28_c,
                    "answer_d": Vq28_d,
                    "answer_e": Vq28_e,
                    "correct_answer": Vq28_correct,
                },
                {
                    "id":"29",
                    "question": Vq29Name,
                    "answer_a": Vq29_a,
                    "answer_b": Vq29_b,
                    "answer_c": Vq29_c,
                    "answer_d": Vq29_d,
                    "answer_e": Vq29_e,
                    "correct_answer": Vq29_correct,
                },
                {
                    "id":"30",
                    "question": Vq30Name,
                    "answer_a": Vq30_a,
                    "answer_b": Vq30_b,
                    "answer_c": Vq30_c,
                    "answer_d": Vq30_d,
                    "answer_e": Vq30_e,
                    "correct_answer": Vq30_correct,
                },
                {
                    "id": "31",
                    "question": Vq31Name,
                    "answer_a": Vq31_a,
                    "answer_b": Vq31_b,
                    "answer_c": Vq31_c,
                    "answer_d": Vq31_d,
                    "answer_e": Vq31_e,
                    "correct_answer": Vq31_correct,
                },
                {
                    "id": "32",
                    "question": Vq32Name,
                    "answer_a": Vq32_a,
                    "answer_b": Vq32_b,
                    "answer_c": Vq32_c,
                    "answer_d": Vq32_d,
                    "answer_e": Vq32_e,
                    "correct_answer": Vq32_correct,
                },
                {
                    "id":"33",
                    "question": Vq33Name,
                    "answer_a": Vq33_a,
                    "answer_b": Vq33_b,
                    "answer_c": Vq33_c,
                    "answer_d": Vq33_d,
                    "answer_e": Vq33_e,
                    "correct_answer": Vq33_correct,
                },
                {
                    "id":"34",
                    "question": Vq34Name,
                    "answer_a": Vq34_a,
                    "answer_b": Vq34_b,
                    "answer_c": Vq34_c,
                    "answer_d": Vq34_d,
                    "answer_e": Vq34_e,
                    "correct_answer": Vq34_correct,
                },
                {
                    "id":"35",
                    "question": Vq35Name,
                    "answer_a": Vq35_a,
                    "answer_b": Vq35_b,
                    "answer_c": Vq35_c,
                    "answer_d": Vq35_d,
                    "answer_e": Vq35_e,
                    "correct_answer": Vq35_correct,
                },
                {
                    "id":"36",
                    "question": Vq36Name,
                    "answer_a": Vq36_a,
                    "answer_b": Vq36_b,
                    "answer_c": Vq36_c,
                    "answer_d": Vq36_d,
                    "answer_e": Vq36_e,
                    "correct_answer": Vq36_correct,
                },
                {
                    "id":"37",
                    "question": Vq37Name,
                    "answer_a": Vq37_a,
                    "answer_b": Vq37_b,
                    "answer_c": Vq37_c,
                    "answer_d": Vq37_d,
                    "answer_e": Vq37_e,
                    "correct_answer": Vq37_correct,
                },
                {
                    "id":"38",
                    "question": Vq38Name,
                    "answer_a": Vq38_a,
                    "answer_b": Vq38_b,
                    "answer_c": Vq38_c,
                    "answer_d": Vq38_d,
                    "answer_e": Vq38_e,
                    "correct_answer": Vq38_correct,
                },
                {
                    "id":"39",
                    "question": Vq39Name,
                    "answer_a": Vq39_a,
                    "answer_b": Vq39_b,
                    "answer_c": Vq39_c,
                    "answer_d": Vq39_d,
                    "answer_e": Vq39_e,
                    "correct_answer": Vq39_correct,
                },
                {
                    "id":"40",
                    "question": Vq40Name,
                    "answer_a": Vq40_a,
                    "answer_b": Vq40_b,
                    "answer_c": Vq40_c,
                    "answer_d": Vq40_d,
                    "answer_e": Vq40_e,
                    "correct_answer": Vq40_correct,
                },
                {
                    "id":"41",
                    "question": Vq41Name,
                    "answer_a": Vq41_a,
                    "answer_b": Vq41_b,
                    "answer_c": Vq41_c,
                    "answer_d": Vq41_d,
                    "answer_e": Vq41_e,
                    "correct_answer": Vq41_correct,
                },
                {
                    "id":"42",
                    "question": Vq42Name,
                    "answer_a": Vq42_a,
                    "answer_b": Vq42_b,
                    "answer_c": Vq42_c,
                    "answer_d": Vq42_d,
                    "answer_e": Vq42_e,
                    "correct_answer": Vq42_correct,
                },
                {
                    "id":"43",
                    "question": Vq43Name,
                    "answer_a": Vq43_a,
                    "answer_b": Vq43_b,
                    "answer_c": Vq43_c,
                    "answer_d": Vq43_d,
                    "answer_e": Vq43_e,
                    "correct_answer": Vq43_correct,
                },
                {
                    "id":"44",
                    "question": Vq44Name,
                    "answer_a": Vq44_a,
                    "answer_b": Vq44_b,
                    "answer_c": Vq44_c,
                    "answer_d": Vq44_d,
                    "answer_e": Vq44_e,
                    "correct_answer": Vq44_correct,
                },
                {
                    "id":"45",
                    "question": Vq45Name,
                    "answer_a": Vq45_a,
                    "answer_b": Vq45_b,
                    "answer_c": Vq45_c,
                    "answer_d": Vq45_d,
                    "answer_e": Vq45_e,
                    "correct_answer": Vq45_correct,
                },
                {
                    "id":"46",
                    "question": Vq46Name,
                    "answer_a": Vq46_a,
                    "answer_b": Vq46_b,
                    "answer_c": Vq46_c,
                    "answer_d": Vq46_d,
                    "answer_e": Vq46_e,
                    "correct_answer": Vq46_correct,
                },
                {
                    "id":"47",
                    "question": Vq47Name,
                    "answer_a": Vq47_a,
                    "answer_b": Vq47_b,
                    "answer_c": Vq47_c,
                    "answer_d": Vq47_d,
                    "answer_e": Vq47_e,
                    "correct_answer": Vq47_correct,
                },
                {
                    "id":"48",
                    "question": Vq48Name,
                    "answer_a": Vq48_a,
                    "answer_b": Vq48_b,
                    "answer_c": Vq48_c,
                    "answer_d": Vq48_d,
                    "answer_e": Vq48_e,
                    "correct_answer": Vq48_correct,
                },
                {
                    "id":"49",
                    "question": Vq49Name,
                    "answer_a": Vq49_a,
                    "answer_b": Vq49_b,
                    "answer_c": Vq49_c,
                    "answer_d": Vq49_d,
                    "answer_e": Vq49_e,
                    "correct_answer": Vq49_correct,
                },
                {
                    "id":"50",
                    "question": Vq50Name,
                    "answer_a": Vq50_a,
                    "answer_b": Vq50_b,
                    "answer_c": Vq50_c,
                    "answer_d": Vq50_d,
                    "answer_e": Vq50_e,
                    "correct_answer": Vq50_correct,
                },
                {
                    "id":"51",
                    "question": Vq51Name,
                    "answer_a": Vq51_a,
                    "answer_b": Vq51_b,
                    "answer_c": Vq51_c,
                    "answer_d": Vq51_d,
                    "answer_e": Vq51_e,
                    "correct_answer": Vq51_correct,
                },
                {
                    "id":"52",
                    "question": Vq52Name,
                    "answer_a": Vq52_a,
                    "answer_b": Vq52_b,
                    "answer_c": Vq52_c,
                    "answer_d": Vq52_d,
                    "answer_e": Vq52_e,
                    "correct_answer": Vq52_correct,
                },
                {
                    "id":"53",
                    "question": Vq53Name,
                    "answer_a": Vq53_a,
                    "answer_b": Vq53_b,
                    "answer_c": Vq53_c,
                    "answer_d": Vq53_d,
                    "answer_e": Vq53_e,
                    "correct_answer": Vq53_correct,
                },
                {
                    "id":"54",
                    "question": Vq54Name,
                    "answer_a": Vq54_a,
                    "answer_b": Vq54_b,
                    "answer_c": Vq54_c,
                    "answer_d": Vq54_d,
                    "answer_e": Vq54_e,
                    "correct_answer": Vq54_correct,
                },
                {
                    "id":"55",
                    "question": Vq55Name,
                    "answer_a": Vq55_a,
                    "answer_b": Vq55_b,
                    "answer_c": Vq55_c,
                    "answer_d": Vq55_d,
                    "answer_e": Vq55_e,
                    "correct_answer": Vq55_correct,
                },
                {
                    "id":"56",
                    "question": Vq56Name,
                    "answer_a": Vq56_a,
                    "answer_b": Vq56_b,
                    "answer_c": Vq56_c,
                    "answer_d": Vq56_d,
                    "answer_e": Vq56_e,
                    "correct_answer": Vq56_correct,
                },
                {
                    "id":"57",
                    "question": Vq57Name,
                    "answer_a": Vq57_a,
                    "answer_b": Vq57_b,
                    "answer_c": Vq57_c,
                    "answer_d": Vq57_d,
                    "answer_e": Vq57_e,
                    "correct_answer": Vq57_correct,
                },
                {
                    "id":"58",
                    "question": Vq58Name,
                    "answer_a": Vq58_a,
                    "answer_b": Vq58_b,
                    "answer_c": Vq58_c,
                    "answer_d": Vq58_d,
                    "answer_e": Vq58_e,
                    "correct_answer": Vq58_correct,
                },
                {
                    "id":"59",
                    "question": Vq59Name,
                    "answer_a": Vq59_a,
                    "answer_b": Vq59_b,
                    "answer_c": Vq59_c,
                    "answer_d": Vq59_d,
                    "answer_e": Vq59_e,
                    "correct_answer": Vq59_correct,
                },
                {
                    "id":"60",
                    "question": Vq60Name,
                    "answer_a": Vq60_a,
                    "answer_b": Vq60_b,
                    "answer_c": Vq60_c,
                    "answer_d": Vq60_d,
                    "answer_e": Vq60_e,
                    "correct_answer": Vq60_correct,
                }
                
            ]
        )

        setMath2List(
            [
                {
                    "id": "1",
                    "question": M2q1Name,
                    "answer_a": M2q1_a,
                    "answer_b": M2q1_b,
                    "answer_c": M2q1_c,
                    "answer_d": M2q1_d,
                    "answer_e": M2q1_e,
                    "correct_answer": M2q1_correct,
                },
                {
                    "id": "2",
                    "question": M2q2Name,
                    "answer_a": M2q2_a,
                    "answer_b": M2q2_b,
                    "answer_c": M2q2_c,
                    "answer_d": M2q2_d,
                    "answer_e": M2q2_e,
                    "correct_answer": M2q2_correct,
                },
                {
                    "id":"3",
                    "question": M2q3Name,
                    "answer_a": M2q3_a,
                    "answer_b": M2q3_b,
                    "answer_c": M2q3_c,
                    "answer_d": M2q3_d,
                    "answer_e": M2q3_e,
                    "correct_answer": M2q3_correct,
                },
                {
                    "id":"4",
                    "question": M2q4Name,
                    "answer_a": M2q4_a,
                    "answer_b": M2q4_b,
                    "answer_c": M2q4_c,
                    "answer_d": M2q4_d,
                    "answer_e": M2q4_e,
                    "correct_answer": M2q4_correct,
                },
                {
                    "id":"5",
                    "question": M2q5Name,
                    "answer_a": M2q5_a,
                    "answer_b": M2q5_b,
                    "answer_c": M2q5_c,
                    "answer_d": M2q5_d,
                    "answer_e": M2q5_e,
                    "correct_answer": M2q5_correct,
                },
                {
                    "id":"6",
                    "question": M2q6Name,
                    "answer_a": M2q6_a,
                    "answer_b": M2q6_b,
                    "answer_c": M2q6_c,
                    "answer_d": M2q6_d,
                    "answer_e": M2q6_e,
                    "correct_answer": M2q6_correct,
                },
                {
                    "id":"7",
                    "question": M2q7Name,
                    "answer_a": M2q7_a,
                    "answer_b": M2q7_b,
                    "answer_c": M2q7_c,
                    "answer_d": M2q7_d,
                    "answer_e": M2q7_e,
                    "correct_answer": M2q7_correct,
                },
                {
                    "id":"8",
                    "question": M2q8Name,
                    "answer_a": M2q8_a,
                    "answer_b": M2q8_b,
                    "answer_c": M2q8_c,
                    "answer_d": M2q8_d,
                    "answer_e": M2q8_e,
                    "correct_answer": M2q8_correct,
                },
                {
                    "id":"9",
                    "question": M2q9Name,
                    "answer_a": M2q9_a,
                    "answer_b": M2q9_b,
                    "answer_c": M2q9_c,
                    "answer_d": M2q9_d,
                    "answer_e": M2q9_e,
                    "correct_answer": M2q9_correct,
                },
                {
                    "id":"10",
                    "question": M2q10Name,
                    "answer_a": M2q10_a,
                    "answer_b": M2q10_b,
                    "answer_c": M2q10_c,
                    "answer_d": M2q10_d,
                    "answer_e": M2q10_e,
                    "correct_answer": M2q10_correct,
                },
                {
                    "id":"11",
                    "question": M2q11Name,
                    "answer_a": M2q11_a,
                    "answer_b": M2q11_b,
                    "answer_c": M2q11_c,
                    "answer_d": M2q11_d,
                    "answer_e": M2q11_e,
                    "correct_answer": M2q11_correct,
                },
                {
                    "id":"12",
                    "question": M2q12Name,
                    "answer_a": M2q12_a,
                    "answer_b": M2q12_b,
                    "answer_c": M2q12_c,
                    "answer_d": M2q12_d,
                    "answer_e": M2q12_e,
                    "correct_answer": M2q12_correct,
                },
                {
                    "id":"13",
                    "question": M2q13Name,
                    "answer_a": M2q13_a,
                    "answer_b": M2q13_b,
                    "answer_c": M2q13_c,
                    "answer_d": M2q13_d,
                    "answer_e": M2q13_e,
                    "correct_answer": M2q13_correct,
                },
                {
                    "id":"14",
                    "question": M2q14Name,
                    "answer_a": M2q14_a,
                    "answer_b": M2q14_b,
                    "answer_c": M2q14_c,
                    "answer_d": M2q14_d,
                    "answer_e": M2q14_e,
                    "correct_answer": M2q14_correct,
                },
                {
                    "id":"15",
                    "question": M2q15Name,
                    "answer_a": M2q15_a,
                    "answer_b": M2q15_b,
                    "answer_c": M2q15_c,
                    "answer_d": M2q15_d,
                    "answer_e": M2q15_e,
                    "correct_answer": M2q15_correct,
                },
                {
                    "id":"16",
                    "question": M2q16Name,
                    "answer_a": M2q16_a,
                    "answer_b": M2q16_b,
                    "answer_c": M2q16_c,
                    "answer_d": M2q16_d,
                    "answer_e": M2q16_e,
                    "correct_answer": M2q16_correct,
                },
                {
                    "id":"17",
                    "question": M2q17Name,
                    "answer_a": M2q17_a,
                    "answer_b": M2q17_b,
                    "answer_c": M2q17_c,
                    "answer_d": M2q17_d,
                    "answer_e": M2q17_e,
                    "correct_answer": M2q17_correct,
                },
                {
                    "id":"18",
                    "question": M2q18Name,
                    "answer_a": M2q18_a,
                    "answer_b": M2q18_b,
                    "answer_c": M2q18_c,
                    "answer_d": M2q18_d,
                    "answer_e": M2q18_e,
                    "correct_answer": M2q18_correct,
                },
                {
                    "id":"19",
                    "question": M2q19Name,
                    "answer_a": M2q19_a,
                    "answer_b": M2q19_b,
                    "answer_c": M2q19_c,
                    "answer_d": M2q19_d,
                    "answer_e": M2q19_e,
                    "correct_answer": M2q19_correct,
                },
                {
                    "id":"20",
                    "question": M2q20Name,
                    "answer_a": M2q20_a,
                    "answer_b": M2q20_b,
                    "answer_c": M2q20_c,
                    "answer_d": M2q20_d,
                    "answer_e": M2q20_e,
                    "correct_answer": M2q20_correct,
                },
                {
                    "id":"21",
                    "question": M2q21Name,
                    "answer_a": M2q21_a,
                    "answer_b": M2q21_b,
                    "answer_c": M2q21_c,
                    "answer_d": M2q21_d,
                    "answer_e": M2q21_e,
                    "correct_answer": M2q21_correct,
                },
                {
                    "id":"22",
                    "question": M2q22Name,
                    "answer_a": M2q22_a,
                    "answer_b": M2q22_b,
                    "answer_c": M2q22_c,
                    "answer_d": M2q22_d,
                    "answer_e": M2q22_e,
                    "correct_answer": M2q22_correct,
                },
                {
                    "id":"23",
                    "question": M2q23Name,
                    "answer_a": M2q23_a,
                    "answer_b": M2q23_b,
                    "answer_c": M2q23_c,
                    "answer_d": M2q23_d,
                    "answer_e": M2q23_e,
                    "correct_answer": M2q23_correct,
                },
                {
                    "id":"24",
                    "question": M2q24Name,
                    "answer_a": M2q24_a,
                    "answer_b": M2q24_b,
                    "answer_c": M2q24_c,
                    "answer_d": M2q24_d,
                    "answer_e": M2q24_e,
                    "correct_answer": M2q24_correct,
                },
                {
                    "id":"25",
                    "question": M2q25Name,
                    "answer_a": M2q25_a,
                    "answer_b": M2q25_b,
                    "answer_c": M2q25_c,
                    "answer_d": M2q25_d,
                    "answer_e": M2q25_e,
                    "correct_answer": M2q25_correct,
                }
            ]
        )



        handleShowConfirmShow(e)
    }

    const [writing, setWriting] = useState("")
    const hangle_writingChange = e => {
        setWriting(e.target.value)
    }

    const [M1q1Name, setM1q1Name] = useState("")
    const [M1q1_a, setM1q1_a] = useState("")
    const [M1q1_b, setM1q1_b] = useState("")
    const [M1q1_c, setM1q1_c] = useState("")
    const [M1q1_d, setM1q1_d] = useState("")
    const [M1q1_e, setM1q1_e] = useState("")
    const [M1q1_correct, setM1q1_correct] = useState("")
    const handleM1q1_NameChange = e => {
        setM1q1Name(e.target.value)
    }
    const handleM1q1_aChange = e => {
        setM1q1_a(e.target.value)
    }
    const handleM1q1_bChange = e => {
        setM1q1_b(e.target.value)
    }
    const handleM1q1_cChange = e => {
        setM1q1_c(e.target.value)
    }
    const handleM1q1_dChange = e => {
        setM1q1_d(e.target.value)
    }
    const handleM1q1_eChange = e => {
        setM1q1_e(e.target.value)
    }
    const handleM1q1_correctChange = e => {
        setM1q1_correct(e.target.value)
    }
    const [M1q2Name, setM1q2Name] = useState("")
    const [M1q2_a, setM1q2_a] = useState("")
    const [M1q2_b, setM1q2_b] = useState("")
    const [M1q2_c, setM1q2_c] = useState("")
    const [M1q2_d, setM1q2_d] = useState("")
    const [M1q2_e, setM1q2_e] = useState("")
    const [M1q2_correct, setM1q2_correct] = useState("")
    const handleM1q2_NameChange = e => {
        setM1q2Name(e.target.value)
    }
    const handleM1q2_aChange = e => {
        setM1q2_a(e.target.value)
    }
    const handleM1q2_bChange = e => {
        setM1q2_b(e.target.value)
    }
    const handleM1q2_cChange = e => {
        setM1q2_c(e.target.value)
    }
    const handleM1q2_dChange = e => {
        setM1q2_d(e.target.value)
    }
    const handleM1q2_eChange = e => {
        setM1q2_e(e.target.value)
    }
    const handleM1q2_correctChange = e => {
        setM1q2_correct(e.target.value)
    }
    const [M1q3Name, setM1q3Name] = useState("")
    const [M1q3_a, setM1q3_a] = useState("")
    const [M1q3_b, setM1q3_b] = useState("")
    const [M1q3_c, setM1q3_c] = useState("")
    const [M1q3_d, setM1q3_d] = useState("")
    const [M1q3_e, setM1q3_e] = useState("")
    const [M1q3_correct, setM1q3_correct] = useState("")
    const handleM1q3_NameChange = e => {
        setM1q3Name(e.target.value)
    }
    const handleM1q3_aChange = e => {
        setM1q3_a(e.target.value)
    }
    const handleM1q3_bChange = e => {
        setM1q3_b(e.target.value)
    }
    const handleM1q3_cChange = e => {
        setM1q3_c(e.target.value)
    }
    const handleM1q3_dChange = e => {
        setM1q3_d(e.target.value)
    }
    const handleM1q3_eChange = e => {
        setM1q3_e(e.target.value)
    }
    const handleM1q3_correctChange = e => {
        setM1q3_correct(e.target.value)
    }
    const [M1q4Name, setM1q4Name] = useState("")
    const [M1q4_a, setM1q4_a] = useState("")
    const [M1q4_b, setM1q4_b] = useState("")
    const [M1q4_c, setM1q4_c] = useState("")
    const [M1q4_d, setM1q4_d] = useState("")
    const [M1q4_e, setM1q4_e] = useState("")
    const [M1q4_correct, setM1q4_correct] = useState("")
    const handleM1q4_NameChange = e => {
        setM1q4Name(e.target.value)
    }
    const handleM1q4_aChange = e => {
        setM1q4_a(e.target.value)
    }
    const handleM1q4_bChange = e => {
        setM1q4_b(e.target.value)
    }
    const handleM1q4_cChange = e => {
        setM1q4_c(e.target.value)
    }
    const handleM1q4_dChange = e => {
        setM1q4_d(e.target.value)
    }
    const handleM1q4_eChange = e => {
        setM1q4_e(e.target.value)
    }
    const handleM1q4_correctChange = e => {
        setM1q4_correct(e.target.value)
    }
    const [M1q5Name, setM1q5Name] = useState("")
    const [M1q5_a, setM1q5_a] = useState("")
    const [M1q5_b, setM1q5_b] = useState("")
    const [M1q5_c, setM1q5_c] = useState("")
    const [M1q5_d, setM1q5_d] = useState("")
    const [M1q5_e, setM1q5_e] = useState("")
    const [M1q5_correct, setM1q5_correct] = useState("")
    const handleM1q5_NameChange = e => {
        setM1q5Name(e.target.value)
    }
    const handleM1q5_aChange = e => {
        setM1q5_a(e.target.value)
    }
    const handleM1q5_bChange = e => {
        setM1q5_b(e.target.value)
    }
    const handleM1q5_cChange = e => {
        setM1q5_c(e.target.value)
    }
    const handleM1q5_dChange = e => {
        setM1q5_d(e.target.value)
    }
    const handleM1q5_eChange = e => {
        setM1q5_e(e.target.value)
    }
    const handleM1q5_correctChange = e => {
        setM1q5_correct(e.target.value)
    }
    const [M1q6Name, setM1q6Name] = useState("")
    const [M1q6_a, setM1q6_a] = useState("")
    const [M1q6_b, setM1q6_b] = useState("")
    const [M1q6_c, setM1q6_c] = useState("")
    const [M1q6_d, setM1q6_d] = useState("")
    const [M1q6_e, setM1q6_e] = useState("")
    const [M1q6_correct, setM1q6_correct] = useState("")
    const handleM1q6_NameChange = e => {
        setM1q6Name(e.target.value)
    }
    const handleM1q6_aChange = e => {
        setM1q6_a(e.target.value)
    }
    const handleM1q6_bChange = e => {
        setM1q6_b(e.target.value)
    }
    const handleM1q6_cChange = e => {
        setM1q6_c(e.target.value)
    }
    const handleM1q6_dChange = e => {
        setM1q6_d(e.target.value)
    }
    const handleM1q6_eChange = e => {
        setM1q6_e(e.target.value)
    }
    const handleM1q6_correctChange = e => {
        setM1q6_correct(e.target.value)
    }

    const [M1q7Name, setM1q7Name] = useState("")
    const [M1q7_a, setM1q7_a] = useState("")
    const [M1q7_b, setM1q7_b] = useState("")
    const [M1q7_c, setM1q7_c] = useState("")
    const [M1q7_d, setM1q7_d] = useState("")
    const [M1q7_e, setM1q7_e] = useState("")
    const [M1q7_correct, setM1q7_correct] = useState("")
    const handleM1q7_NameChange = e => {
        setM1q7Name(e.target.value)
    }
    const handleM1q7_aChange = e => {
        setM1q7_a(e.target.value)
    }
    const handleM1q7_bChange = e => {
        setM1q7_b(e.target.value)
    }
    const handleM1q7_cChange = e => {
        setM1q7_c(e.target.value)
    }
    const handleM1q7_dChange = e => {
        setM1q7_d(e.target.value)
    }
    const handleM1q7_eChange = e => {
        setM1q7_e(e.target.value)
    }
    const handleM1q7_correctChange = e => {
        setM1q7_correct(e.target.value)
    }
    const [M1q8Name, setM1q8Name] = useState("")
    const [M1q8_a, setM1q8_a] = useState("")
    const [M1q8_b, setM1q8_b] = useState("")
    const [M1q8_c, setM1q8_c] = useState("")
    const [M1q8_d, setM1q8_d] = useState("")
    const [M1q8_e, setM1q8_e] = useState("")
    const [M1q8_correct, setM1q8_correct] = useState("")
    const handleM1q8_NameChange = e => {
        setM1q8Name(e.target.value)
    }
    const handleM1q8_aChange = e => {
        setM1q8_a(e.target.value)
    }
    const handleM1q8_bChange = e => {
        setM1q8_b(e.target.value)
    }
    const handleM1q8_cChange = e => {
        setM1q8_c(e.target.value)
    }
    const handleM1q8_dChange = e => {
        setM1q8_d(e.target.value)
    }
    const handleM1q8_eChange = e => {
        setM1q8_e(e.target.value)
    }
    const handleM1q8_correctChange = e => {
        setM1q8_correct(e.target.value)
    }
    const [M1q9Name, setM1q9Name] = useState("")
    const [M1q9_a, setM1q9_a] = useState("")
    const [M1q9_b, setM1q9_b] = useState("")
    const [M1q9_c, setM1q9_c] = useState("")
    const [M1q9_d, setM1q9_d] = useState("")
    const [M1q9_e, setM1q9_e] = useState("")
    const [M1q9_correct, setM1q9_correct] = useState("")
    const handleM1q9_NameChange = e => {
        setM1q9Name(e.target.value)
    }
    const handleM1q9_aChange = e => {
        setM1q9_a(e.target.value)
    }
    const handleM1q9_bChange = e => {
        setM1q9_b(e.target.value)
    }
    const handleM1q9_cChange = e => {
        setM1q9_c(e.target.value)
    }
    const handleM1q9_dChange = e => {
        setM1q9_d(e.target.value)
    }
    const handleM1q9_eChange = e => {
        setM1q9_e(e.target.value)
    }
    const handleM1q9_correctChange = e => {
        setM1q9_correct(e.target.value)
    }
    const [M1q10Name, setM1q10Name] = useState("")
    const [M1q10_a, setM1q10_a] = useState("")
    const [M1q10_b, setM1q10_b] = useState("")
    const [M1q10_c, setM1q10_c] = useState("")
    const [M1q10_d, setM1q10_d] = useState("")
    const [M1q10_e, setM1q10_e] = useState("")
    const [M1q10_correct, setM1q10_correct] = useState("")
    const handleM1q10_NameChange = e => {
        setM1q10Name(e.target.value)
    }
    const handleM1q10_aChange = e => {
        setM1q10_a(e.target.value)
    }
    const handleM1q10_bChange = e => {
        setM1q10_b(e.target.value)
    }
    const handleM1q10_cChange = e => {
        setM1q10_c(e.target.value)
    }
    const handleM1q10_dChange = e => {
        setM1q10_d(e.target.value)
    }
    const handleM1q10_eChange = e => {
        setM1q10_e(e.target.value)
    }
    const handleM1q10_correctChange = e => {
        setM1q10_correct(e.target.value)
    }
    const [M1q11Name, setM1q11Name] = useState("")
    const [M1q11_a, setM1q11_a] = useState("")
    const [M1q11_b, setM1q11_b] = useState("")
    const [M1q11_c, setM1q11_c] = useState("")
    const [M1q11_d, setM1q11_d] = useState("")
    const [M1q11_e, setM1q11_e] = useState("")
    const [M1q11_correct, setM1q11_correct] = useState("")
    const handleM1q11_NameChange = e => {
        setM1q11Name(e.target.value)
    }
    const handleM1q11_aChange = e => {
        setM1q11_a(e.target.value)
    }
    const handleM1q11_bChange = e => {
        setM1q11_b(e.target.value)
    }
    const handleM1q11_cChange = e => {
        setM1q11_c(e.target.value)
    }
    const handleM1q11_dChange = e => {
        setM1q11_d(e.target.value)
    }
    const handleM1q11_eChange = e => {
        setM1q11_e(e.target.value)
    }
    const handleM1q11_correctChange = e => {
        setM1q11_correct(e.target.value)
    }
    const [M1q12Name, setM1q12Name] = useState("")
    const [M1q12_a, setM1q12_a] = useState("")
    const [M1q12_b, setM1q12_b] = useState("")
    const [M1q12_c, setM1q12_c] = useState("")
    const [M1q12_d, setM1q12_d] = useState("")
    const [M1q12_e, setM1q12_e] = useState("")
    const [M1q12_correct, setM1q12_correct] = useState("")
    const handleM1q12_NameChange = e => {
        setM1q12Name(e.target.value)
    }
    const handleM1q12_aChange = e => {
        setM1q12_a(e.target.value)
    }
    const handleM1q12_bChange = e => {
        setM1q12_b(e.target.value)
    }
    const handleM1q12_cChange = e => {
        setM1q12_c(e.target.value)
    }
    const handleM1q12_dChange = e => {
        setM1q12_d(e.target.value)
    }
    const handleM1q12_eChange = e => {
        setM1q12_e(e.target.value)
    }
    const handleM1q12_correctChange = e => {
        setM1q12_correct(e.target.value)
    }

    const [M1q13Name, setM1q13Name] = useState("")
    const [M1q13_a, setM1q13_a] = useState("")
    const [M1q13_b, setM1q13_b] = useState("")
    const [M1q13_c, setM1q13_c] = useState("")
    const [M1q13_d, setM1q13_d] = useState("")
    const [M1q13_e, setM1q13_e] = useState("")
    const [M1q13_correct, setM1q13_correct] = useState("")
    const handleM1q13_NameChange = e => {
        setM1q13Name(e.target.value)
    }
    const handleM1q13_aChange = e => {
        setM1q13_a(e.target.value)
    }
    const handleM1q13_bChange = e => {
        setM1q13_b(e.target.value)
    }
    const handleM1q13_cChange = e => {
        setM1q13_c(e.target.value)
    }
    const handleM1q13_dChange = e => {
        setM1q13_d(e.target.value)
    }
    const handleM1q13_eChange = e => {
        setM1q13_e(e.target.value)
    }
    const handleM1q13_correctChange = e => {
        setM1q13_correct(e.target.value)
    }
    const [M1q14Name, setM1q14Name] = useState("")
    const [M1q14_a, setM1q14_a] = useState("")
    const [M1q14_b, setM1q14_b] = useState("")
    const [M1q14_c, setM1q14_c] = useState("")
    const [M1q14_d, setM1q14_d] = useState("")
    const [M1q14_e, setM1q14_e] = useState("")
    const [M1q14_correct, setM1q14_correct] = useState("")
    const handleM1q14_NameChange = e => {
        setM1q14Name(e.target.value)
    }
    const handleM1q14_aChange = e => {
        setM1q14_a(e.target.value)
    }
    const handleM1q14_bChange = e => {
        setM1q14_b(e.target.value)
    }
    const handleM1q14_cChange = e => {
        setM1q14_c(e.target.value)
    }
    const handleM1q14_dChange = e => {
        setM1q14_d(e.target.value)
    }
    const handleM1q14_eChange = e => {
        setM1q14_e(e.target.value)
    }
    const handleM1q14_correctChange = e => {
        setM1q14_correct(e.target.value)
    }
    const [M1q15Name, setM1q15Name] = useState("")
    const [M1q15_a, setM1q15_a] = useState("")
    const [M1q15_b, setM1q15_b] = useState("")
    const [M1q15_c, setM1q15_c] = useState("")
    const [M1q15_d, setM1q15_d] = useState("")
    const [M1q15_e, setM1q15_e] = useState("")
    const [M1q15_correct, setM1q15_correct] = useState("")
    const handleM1q15_NameChange = e => {
        setM1q15Name(e.target.value)
    }
    const handleM1q15_aChange = e => {
        setM1q15_a(e.target.value)
    }
    const handleM1q15_bChange = e => {
        setM1q15_b(e.target.value)
    }
    const handleM1q15_cChange = e => {
        setM1q15_c(e.target.value)
    }
    const handleM1q15_dChange = e => {
        setM1q15_d(e.target.value)
    }
    const handleM1q15_eChange = e => {
        setM1q15_e(e.target.value)
    }
    const handleM1q15_correctChange = e => {
        setM1q15_correct(e.target.value)
    }
    const [M1q16Name, setM1q16Name] = useState("")
    const [M1q16_a, setM1q16_a] = useState("")
    const [M1q16_b, setM1q16_b] = useState("")
    const [M1q16_c, setM1q16_c] = useState("")
    const [M1q16_d, setM1q16_d] = useState("")
    const [M1q16_e, setM1q16_e] = useState("")
    const [M1q16_correct, setM1q16_correct] = useState("")
    const handleM1q16_NameChange = e => {
        setM1q16Name(e.target.value)
    }
    const handleM1q16_aChange = e => {
        setM1q16_a(e.target.value)
    }
    const handleM1q16_bChange = e => {
        setM1q16_b(e.target.value)
    }
    const handleM1q16_cChange = e => {
        setM1q16_c(e.target.value)
    }
    const handleM1q16_dChange = e => {
        setM1q16_d(e.target.value)
    }
    const handleM1q16_eChange = e => {
        setM1q16_e(e.target.value)
    }
    const handleM1q16_correctChange = e => {
        setM1q16_correct(e.target.value)
    }
    const [M1q17Name, setM1q17Name] = useState("")
    const [M1q17_a, setM1q17_a] = useState("")
    const [M1q17_b, setM1q17_b] = useState("")
    const [M1q17_c, setM1q17_c] = useState("")
    const [M1q17_d, setM1q17_d] = useState("")
    const [M1q17_e, setM1q17_e] = useState("")
    const [M1q17_correct, setM1q17_correct] = useState("")
    const handleM1q17_NameChange = e => {
        setM1q17Name(e.target.value)
    }
    const handleM1q17_aChange = e => {
        setM1q17_a(e.target.value)
    }
    const handleM1q17_bChange = e => {
        setM1q17_b(e.target.value)
    }
    const handleM1q17_cChange = e => {
        setM1q17_c(e.target.value)
    }
    const handleM1q17_dChange = e => {
        setM1q17_d(e.target.value)
    }
    const handleM1q17_eChange = e => {
        setM1q17_e(e.target.value)
    }
    const handleM1q17_correctChange = e => {
        setM1q17_correct(e.target.value)
    }
    const [M1q18Name, setM1q18Name] = useState("")
    const [M1q18_a, setM1q18_a] = useState("")
    const [M1q18_b, setM1q18_b] = useState("")
    const [M1q18_c, setM1q18_c] = useState("")
    const [M1q18_d, setM1q18_d] = useState("")
    const [M1q18_e, setM1q18_e] = useState("")
    const [M1q18_correct, setM1q18_correct] = useState("")
    const handleM1q18_NameChange = e => {
        setM1q18Name(e.target.value)
    }
    const handleM1q18_aChange = e => {
        setM1q18_a(e.target.value)
    }
    const handleM1q18_bChange = e => {
        setM1q18_b(e.target.value)
    }
    const handleM1q18_cChange = e => {
        setM1q18_c(e.target.value)
    }
    const handleM1q18_dChange = e => {
        setM1q18_d(e.target.value)
    }
    const handleM1q18_eChange = e => {
        setM1q18_e(e.target.value)
    }
    const handleM1q18_correctChange = e => {
        setM1q18_correct(e.target.value)
    }

    const [M1q19Name, setM1q19Name] = useState("")
    const [M1q19_a, setM1q19_a] = useState("")
    const [M1q19_b, setM1q19_b] = useState("")
    const [M1q19_c, setM1q19_c] = useState("")
    const [M1q19_d, setM1q19_d] = useState("")
    const [M1q19_e, setM1q19_e] = useState("")
    const [M1q19_correct, setM1q19_correct] = useState("")
    const handleM1q19_NameChange = e => {
        setM1q19Name(e.target.value)
    }
    const handleM1q19_aChange = e => {
        setM1q19_a(e.target.value)
    }
    const handleM1q19_bChange = e => {
        setM1q19_b(e.target.value)
    }
    const handleM1q19_cChange = e => {
        setM1q19_c(e.target.value)
    }
    const handleM1q19_dChange = e => {
        setM1q19_d(e.target.value)
    }
    const handleM1q19_eChange = e => {
        setM1q19_e(e.target.value)
    }
    const handleM1q19_correctChange = e => {
        setM1q19_correct(e.target.value)
    }
    const [M1q20Name, setM1q20Name] = useState("")
    const [M1q20_a, setM1q20_a] = useState("")
    const [M1q20_b, setM1q20_b] = useState("")
    const [M1q20_c, setM1q20_c] = useState("")
    const [M1q20_d, setM1q20_d] = useState("")
    const [M1q20_e, setM1q20_e] = useState("")
    const [M1q20_correct, setM1q20_correct] = useState("")
    const handleM1q20_NameChange = e => {
        setM1q20Name(e.target.value)
    }
    const handleM1q20_aChange = e => {
        setM1q20_a(e.target.value)
    }
    const handleM1q20_bChange = e => {
        setM1q20_b(e.target.value)
    }
    const handleM1q20_cChange = e => {
        setM1q20_c(e.target.value)
    }
    const handleM1q20_dChange = e => {
        setM1q20_d(e.target.value)
    }
    const handleM1q20_eChange = e => {
        setM1q20_e(e.target.value)
    }
    const handleM1q20_correctChange = e => {
        setM1q20_correct(e.target.value)
    }
    const [M1q21Name, setM1q21Name] = useState("")
    const [M1q21_a, setM1q21_a] = useState("")
    const [M1q21_b, setM1q21_b] = useState("")
    const [M1q21_c, setM1q21_c] = useState("")
    const [M1q21_d, setM1q21_d] = useState("")
    const [M1q21_e, setM1q21_e] = useState("")
    const [M1q21_correct, setM1q21_correct] = useState("")
    const handleM1q21_NameChange = e => {
        setM1q21Name(e.target.value)
    }
    const handleM1q21_aChange = e => {
        setM1q21_a(e.target.value)
    }
    const handleM1q21_bChange = e => {
        setM1q21_b(e.target.value)
    }
    const handleM1q21_cChange = e => {
        setM1q21_c(e.target.value)
    }
    const handleM1q21_dChange = e => {
        setM1q21_d(e.target.value)
    }
    const handleM1q21_eChange = e => {
        setM1q21_e(e.target.value)
    }
    const handleM1q21_correctChange = e => {
        setM1q21_correct(e.target.value)
    }
    const [M1q22Name, setM1q22Name] = useState("")
    const [M1q22_a, setM1q22_a] = useState("")
    const [M1q22_b, setM1q22_b] = useState("")
    const [M1q22_c, setM1q22_c] = useState("")
    const [M1q22_d, setM1q22_d] = useState("")
    const [M1q22_e, setM1q22_e] = useState("")
    const [M1q22_correct, setM1q22_correct] = useState("")
    const handleM1q22_NameChange = e => {
        setM1q22Name(e.target.value)
    }
    const handleM1q22_aChange = e => {
        setM1q22_a(e.target.value)
    }
    const handleM1q22_bChange = e => {
        setM1q22_b(e.target.value)
    }
    const handleM1q22_cChange = e => {
        setM1q22_c(e.target.value)
    }
    const handleM1q22_dChange = e => {
        setM1q22_d(e.target.value)
    }
    const handleM1q22_eChange = e => {
        setM1q22_e(e.target.value)
    }
    const handleM1q22_correctChange = e => {
        setM1q22_correct(e.target.value)
    }
    const [M1q23Name, setM1q23Name] = useState("")
    const [M1q23_a, setM1q23_a] = useState("")
    const [M1q23_b, setM1q23_b] = useState("")
    const [M1q23_c, setM1q23_c] = useState("")
    const [M1q23_d, setM1q23_d] = useState("")
    const [M1q23_e, setM1q23_e] = useState("")
    const [M1q23_correct, setM1q23_correct] = useState("")
    const handleM1q23_NameChange = e => {
        setM1q23Name(e.target.value)
    }
    const handleM1q23_aChange = e => {
        setM1q23_a(e.target.value)
    }
    const handleM1q23_bChange = e => {
        setM1q23_b(e.target.value)
    }
    const handleM1q23_cChange = e => {
        setM1q23_c(e.target.value)
    }
    const handleM1q23_dChange = e => {
        setM1q23_d(e.target.value)
    }
    const handleM1q23_eChange = e => {
        setM1q23_e(e.target.value)
    }
    const handleM1q23_correctChange = e => {
        setM1q23_correct(e.target.value)
    }
    const [M1q24Name, setM1q24Name] = useState("")
    const [M1q24_a, setM1q24_a] = useState("")
    const [M1q24_b, setM1q24_b] = useState("")
    const [M1q24_c, setM1q24_c] = useState("")
    const [M1q24_d, setM1q24_d] = useState("")
    const [M1q24_e, setM1q24_e] = useState("")
    const [M1q24_correct, setM1q24_correct] = useState("")
    const handleM1q24_NameChange = e => {
        setM1q24Name(e.target.value)
    }
    const handleM1q24_aChange = e => {
        setM1q24_a(e.target.value)
    }
    const handleM1q24_bChange = e => {
        setM1q24_b(e.target.value)
    }
    const handleM1q24_cChange = e => {
        setM1q24_c(e.target.value)
    }
    const handleM1q24_dChange = e => {
        setM1q24_d(e.target.value)
    }
    const handleM1q24_eChange = e => {
        setM1q24_e(e.target.value)
    }
    const handleM1q24_correctChange = e => {
        setM1q24_correct(e.target.value)
    }

    const [M1q25Name, setM1q25Name] = useState("")
    const [M1q25_a, setM1q25_a] = useState("")
    const [M1q25_b, setM1q25_b] = useState("")
    const [M1q25_c, setM1q25_c] = useState("")
    const [M1q25_d, setM1q25_d] = useState("")
    const [M1q25_e, setM1q25_e] = useState("")
    const [M1q25_correct, setM1q25_correct] = useState("")
    const handleM1q25_NameChange = e => {
        setM1q25Name(e.target.value)
    }
    const handleM1q25_aChange = e => {
        setM1q25_a(e.target.value)
    }
    const handleM1q25_bChange = e => {
        setM1q25_b(e.target.value)
    }
    const handleM1q25_cChange = e => {
        setM1q25_c(e.target.value)
    }
    const handleM1q25_dChange = e => {
        setM1q25_d(e.target.value)
    }
    const handleM1q25_eChange = e => {
        setM1q25_e(e.target.value)
    }
    const handleM1q25_correctChange = e => {
        setM1q25_correct(e.target.value)
    }



    //Math 2
    const [M2q1Name, setM2q1Name] = useState("")
    const [M2q1_a, setM2q1_a] = useState("")
    const [M2q1_b, setM2q1_b] = useState("")
    const [M2q1_c, setM2q1_c] = useState("")
    const [M2q1_d, setM2q1_d] = useState("")
    const [M2q1_e, setM2q1_e] = useState("")
    const [M2q1_correct, setM2q1_correct] = useState("")
    const handleM2q1_NameChange = e => {
        setM2q1Name(e.target.value)
    }
    const handleM2q1_aChange = e => {
        setM2q1_a(e.target.value)
    }
    const handleM2q1_bChange = e => {
        setM2q1_b(e.target.value)
    }
    const handleM2q1_cChange = e => {
        setM2q1_c(e.target.value)
    }
    const handleM2q1_dChange = e => {
        setM2q1_d(e.target.value)
    }
    const handleM2q1_eChange = e => {
        setM2q1_e(e.target.value)
    }
    const handleM2q1_correctChange = e => {
        setM2q1_correct(e.target.value)
    }
    const [M2q2Name, setM2q2Name] = useState("")
    const [M2q2_a, setM2q2_a] = useState("")
    const [M2q2_b, setM2q2_b] = useState("")
    const [M2q2_c, setM2q2_c] = useState("")
    const [M2q2_d, setM2q2_d] = useState("")
    const [M2q2_e, setM2q2_e] = useState("")
    const [M2q2_correct, setM2q2_correct] = useState("")
    const handleM2q2_NameChange = e => {
        setM2q2Name(e.target.value)
    }
    const handleM2q2_aChange = e => {
        setM2q2_a(e.target.value)
    }
    const handleM2q2_bChange = e => {
        setM2q2_b(e.target.value)
    }
    const handleM2q2_cChange = e => {
        setM2q2_c(e.target.value)
    }
    const handleM2q2_dChange = e => {
        setM2q2_d(e.target.value)
    }
    const handleM2q2_eChange = e => {
        setM2q2_e(e.target.value)
    }
    const handleM2q2_correctChange = e => {
        setM2q2_correct(e.target.value)
    }
    const [M2q3Name, setM2q3Name] = useState("")
    const [M2q3_a, setM2q3_a] = useState("")
    const [M2q3_b, setM2q3_b] = useState("")
    const [M2q3_c, setM2q3_c] = useState("")
    const [M2q3_d, setM2q3_d] = useState("")
    const [M2q3_e, setM2q3_e] = useState("")
    const [M2q3_correct, setM2q3_correct] = useState("")
    const handleM2q3_NameChange = e => {
        setM2q3Name(e.target.value)
    }
    const handleM2q3_aChange = e => {
        setM2q3_a(e.target.value)
    }
    const handleM2q3_bChange = e => {
        setM2q3_b(e.target.value)
    }
    const handleM2q3_cChange = e => {
        setM2q3_c(e.target.value)
    }
    const handleM2q3_dChange = e => {
        setM2q3_d(e.target.value)
    }
    const handleM2q3_eChange = e => {
        setM2q3_e(e.target.value)
    }
    const handleM2q3_correctChange = e => {
        setM2q3_correct(e.target.value)
    }
    const [M2q4Name, setM2q4Name] = useState("")
    const [M2q4_a, setM2q4_a] = useState("")
    const [M2q4_b, setM2q4_b] = useState("")
    const [M2q4_c, setM2q4_c] = useState("")
    const [M2q4_d, setM2q4_d] = useState("")
    const [M2q4_e, setM2q4_e] = useState("")
    const [M2q4_correct, setM2q4_correct] = useState("")
    const handleM2q4_NameChange = e => {
        setM2q4Name(e.target.value)
    }
    const handleM2q4_aChange = e => {
        setM2q4_a(e.target.value)
    }
    const handleM2q4_bChange = e => {
        setM2q4_b(e.target.value)
    }
    const handleM2q4_cChange = e => {
        setM2q4_c(e.target.value)
    }
    const handleM2q4_dChange = e => {
        setM2q4_d(e.target.value)
    }
    const handleM2q4_eChange = e => {
        setM2q4_e(e.target.value)
    }
    const handleM2q4_correctChange = e => {
        setM2q4_correct(e.target.value)
    }
    const [M2q5Name, setM2q5Name] = useState("")
    const [M2q5_a, setM2q5_a] = useState("")
    const [M2q5_b, setM2q5_b] = useState("")
    const [M2q5_c, setM2q5_c] = useState("")
    const [M2q5_d, setM2q5_d] = useState("")
    const [M2q5_e, setM2q5_e] = useState("")
    const [M2q5_correct, setM2q5_correct] = useState("")
    const handleM2q5_NameChange = e => {
        setM2q5Name(e.target.value)
    }
    const handleM2q5_aChange = e => {
        setM2q5_a(e.target.value)
    }
    const handleM2q5_bChange = e => {
        setM2q5_b(e.target.value)
    }
    const handleM2q5_cChange = e => {
        setM2q5_c(e.target.value)
    }
    const handleM2q5_dChange = e => {
        setM2q5_d(e.target.value)
    }
    const handleM2q5_eChange = e => {
        setM2q5_e(e.target.value)
    }
    const handleM2q5_correctChange = e => {
        setM2q5_correct(e.target.value)
    }
    const [M2q6Name, setM2q6Name] = useState("")
    const [M2q6_a, setM2q6_a] = useState("")
    const [M2q6_b, setM2q6_b] = useState("")
    const [M2q6_c, setM2q6_c] = useState("")
    const [M2q6_d, setM2q6_d] = useState("")
    const [M2q6_e, setM2q6_e] = useState("")
    const [M2q6_correct, setM2q6_correct] = useState("")
    const handleM2q6_NameChange = e => {
        setM2q6Name(e.target.value)
    }
    const handleM2q6_aChange = e => {
        setM2q6_a(e.target.value)
    }
    const handleM2q6_bChange = e => {
        setM2q6_b(e.target.value)
    }
    const handleM2q6_cChange = e => {
        setM2q6_c(e.target.value)
    }
    const handleM2q6_dChange = e => {
        setM2q6_d(e.target.value)
    }
    const handleM2q6_eChange = e => {
        setM2q6_e(e.target.value)
    }
    const handleM2q6_correctChange = e => {
        setM2q6_correct(e.target.value)
    }

    const [M2q7Name, setM2q7Name] = useState("")
    const [M2q7_a, setM2q7_a] = useState("")
    const [M2q7_b, setM2q7_b] = useState("")
    const [M2q7_c, setM2q7_c] = useState("")
    const [M2q7_d, setM2q7_d] = useState("")
    const [M2q7_e, setM2q7_e] = useState("")
    const [M2q7_correct, setM2q7_correct] = useState("")
    const handleM2q7_NameChange = e => {
        setM2q7Name(e.target.value)
    }
    const handleM2q7_aChange = e => {
        setM2q7_a(e.target.value)
    }
    const handleM2q7_bChange = e => {
        setM2q7_b(e.target.value)
    }
    const handleM2q7_cChange = e => {
        setM2q7_c(e.target.value)
    }
    const handleM2q7_dChange = e => {
        setM2q7_d(e.target.value)
    }
    const handleM2q7_eChange = e => {
        setM2q7_e(e.target.value)
    }
    const handleM2q7_correctChange = e => {
        setM2q7_correct(e.target.value)
    }
    const [M2q8Name, setM2q8Name] = useState("")
    const [M2q8_a, setM2q8_a] = useState("")
    const [M2q8_b, setM2q8_b] = useState("")
    const [M2q8_c, setM2q8_c] = useState("")
    const [M2q8_d, setM2q8_d] = useState("")
    const [M2q8_e, setM2q8_e] = useState("")
    const [M2q8_correct, setM2q8_correct] = useState("")
    const handleM2q8_NameChange = e => {
        setM2q8Name(e.target.value)
    }
    const handleM2q8_aChange = e => {
        setM2q8_a(e.target.value)
    }
    const handleM2q8_bChange = e => {
        setM2q8_b(e.target.value)
    }
    const handleM2q8_cChange = e => {
        setM2q8_c(e.target.value)
    }
    const handleM2q8_dChange = e => {
        setM2q8_d(e.target.value)
    }
    const handleM2q8_eChange = e => {
        setM2q8_e(e.target.value)
    }
    const handleM2q8_correctChange = e => {
        setM2q8_correct(e.target.value)
    }
    const [M2q9Name, setM2q9Name] = useState("")
    const [M2q9_a, setM2q9_a] = useState("")
    const [M2q9_b, setM2q9_b] = useState("")
    const [M2q9_c, setM2q9_c] = useState("")
    const [M2q9_d, setM2q9_d] = useState("")
    const [M2q9_e, setM2q9_e] = useState("")
    const [M2q9_correct, setM2q9_correct] = useState("")
    const handleM2q9_NameChange = e => {
        setM2q9Name(e.target.value)
    }
    const handleM2q9_aChange = e => {
        setM2q9_a(e.target.value)
    }
    const handleM2q9_bChange = e => {
        setM2q9_b(e.target.value)
    }
    const handleM2q9_cChange = e => {
        setM2q9_c(e.target.value)
    }
    const handleM2q9_dChange = e => {
        setM2q9_d(e.target.value)
    }
    const handleM2q9_eChange = e => {
        setM2q9_e(e.target.value)
    }
    const handleM2q9_correctChange = e => {
        setM2q9_correct(e.target.value)
    }
    const [M2q10Name, setM2q10Name] = useState("")
    const [M2q10_a, setM2q10_a] = useState("")
    const [M2q10_b, setM2q10_b] = useState("")
    const [M2q10_c, setM2q10_c] = useState("")
    const [M2q10_d, setM2q10_d] = useState("")
    const [M2q10_e, setM2q10_e] = useState("")
    const [M2q10_correct, setM2q10_correct] = useState("")
    const handleM2q10_NameChange = e => {
        setM2q10Name(e.target.value)
    }
    const handleM2q10_aChange = e => {
        setM2q10_a(e.target.value)
    }
    const handleM2q10_bChange = e => {
        setM2q10_b(e.target.value)
    }
    const handleM2q10_cChange = e => {
        setM2q10_c(e.target.value)
    }
    const handleM2q10_dChange = e => {
        setM2q10_d(e.target.value)
    }
    const handleM2q10_eChange = e => {
        setM2q10_e(e.target.value)
    }
    const handleM2q10_correctChange = e => {
        setM2q10_correct(e.target.value)
    }
    const [M2q11Name, setM2q11Name] = useState("")
    const [M2q11_a, setM2q11_a] = useState("")
    const [M2q11_b, setM2q11_b] = useState("")
    const [M2q11_c, setM2q11_c] = useState("")
    const [M2q11_d, setM2q11_d] = useState("")
    const [M2q11_e, setM2q11_e] = useState("")
    const [M2q11_correct, setM2q11_correct] = useState("")
    const handleM2q11_NameChange = e => {
        setM2q11Name(e.target.value)
    }
    const handleM2q11_aChange = e => {
        setM2q11_a(e.target.value)
    }
    const handleM2q11_bChange = e => {
        setM2q11_b(e.target.value)
    }
    const handleM2q11_cChange = e => {
        setM2q11_c(e.target.value)
    }
    const handleM2q11_dChange = e => {
        setM2q11_d(e.target.value)
    }
    const handleM2q11_eChange = e => {
        setM2q11_e(e.target.value)
    }
    const handleM2q11_correctChange = e => {
        setM2q11_correct(e.target.value)
    }
    const [M2q12Name, setM2q12Name] = useState("")
    const [M2q12_a, setM2q12_a] = useState("")
    const [M2q12_b, setM2q12_b] = useState("")
    const [M2q12_c, setM2q12_c] = useState("")
    const [M2q12_d, setM2q12_d] = useState("")
    const [M2q12_e, setM2q12_e] = useState("")
    const [M2q12_correct, setM2q12_correct] = useState("")
    const handleM2q12_NameChange = e => {
        setM2q12Name(e.target.value)
    }
    const handleM2q12_aChange = e => {
        setM2q12_a(e.target.value)
    }
    const handleM2q12_bChange = e => {
        setM2q12_b(e.target.value)
    }
    const handleM2q12_cChange = e => {
        setM2q12_c(e.target.value)
    }
    const handleM2q12_dChange = e => {
        setM2q12_d(e.target.value)
    }
    const handleM2q12_eChange = e => {
        setM2q12_e(e.target.value)
    }
    const handleM2q12_correctChange = e => {
        setM2q12_correct(e.target.value)
    }

    const [M2q13Name, setM2q13Name] = useState("")
    const [M2q13_a, setM2q13_a] = useState("")
    const [M2q13_b, setM2q13_b] = useState("")
    const [M2q13_c, setM2q13_c] = useState("")
    const [M2q13_d, setM2q13_d] = useState("")
    const [M2q13_e, setM2q13_e] = useState("")
    const [M2q13_correct, setM2q13_correct] = useState("")
    const handleM2q13_NameChange = e => {
        setM2q13Name(e.target.value)
    }
    const handleM2q13_aChange = e => {
        setM2q13_a(e.target.value)
    }
    const handleM2q13_bChange = e => {
        setM2q13_b(e.target.value)
    }
    const handleM2q13_cChange = e => {
        setM2q13_c(e.target.value)
    }
    const handleM2q13_dChange = e => {
        setM2q13_d(e.target.value)
    }
    const handleM2q13_eChange = e => {
        setM2q13_e(e.target.value)
    }
    const handleM2q13_correctChange = e => {
        setM2q13_correct(e.target.value)
    }
    const [M2q14Name, setM2q14Name] = useState("")
    const [M2q14_a, setM2q14_a] = useState("")
    const [M2q14_b, setM2q14_b] = useState("")
    const [M2q14_c, setM2q14_c] = useState("")
    const [M2q14_d, setM2q14_d] = useState("")
    const [M2q14_e, setM2q14_e] = useState("")
    const [M2q14_correct, setM2q14_correct] = useState("")
    const handleM2q14_NameChange = e => {
        setM2q14Name(e.target.value)
    }
    const handleM2q14_aChange = e => {
        setM2q14_a(e.target.value)
    }
    const handleM2q14_bChange = e => {
        setM2q14_b(e.target.value)
    }
    const handleM2q14_cChange = e => {
        setM2q14_c(e.target.value)
    }
    const handleM2q14_dChange = e => {
        setM2q14_d(e.target.value)
    }
    const handleM2q14_eChange = e => {
        setM2q14_e(e.target.value)
    }
    const handleM2q14_correctChange = e => {
        setM2q14_correct(e.target.value)
    }
    const [M2q15Name, setM2q15Name] = useState("")
    const [M2q15_a, setM2q15_a] = useState("")
    const [M2q15_b, setM2q15_b] = useState("")
    const [M2q15_c, setM2q15_c] = useState("")
    const [M2q15_d, setM2q15_d] = useState("")
    const [M2q15_e, setM2q15_e] = useState("")
    const [M2q15_correct, setM2q15_correct] = useState("")
    const handleM2q15_NameChange = e => {
        setM2q15Name(e.target.value)
    }
    const handleM2q15_aChange = e => {
        setM2q15_a(e.target.value)
    }
    const handleM2q15_bChange = e => {
        setM2q15_b(e.target.value)
    }
    const handleM2q15_cChange = e => {
        setM2q15_c(e.target.value)
    }
    const handleM2q15_dChange = e => {
        setM2q15_d(e.target.value)
    }
    const handleM2q15_eChange = e => {
        setM2q15_e(e.target.value)
    }
    const handleM2q15_correctChange = e => {
        setM2q15_correct(e.target.value)
    }
    const [M2q16Name, setM2q16Name] = useState("")
    const [M2q16_a, setM2q16_a] = useState("")
    const [M2q16_b, setM2q16_b] = useState("")
    const [M2q16_c, setM2q16_c] = useState("")
    const [M2q16_d, setM2q16_d] = useState("")
    const [M2q16_e, setM2q16_e] = useState("")
    const [M2q16_correct, setM2q16_correct] = useState("")
    const handleM2q16_NameChange = e => {
        setM2q16Name(e.target.value)
    }
    const handleM2q16_aChange = e => {
        setM2q16_a(e.target.value)
    }
    const handleM2q16_bChange = e => {
        setM2q16_b(e.target.value)
    }
    const handleM2q16_cChange = e => {
        setM2q16_c(e.target.value)
    }
    const handleM2q16_dChange = e => {
        setM2q16_d(e.target.value)
    }
    const handleM2q16_eChange = e => {
        setM2q16_e(e.target.value)
    }
    const handleM2q16_correctChange = e => {
        setM2q16_correct(e.target.value)
    }
    const [M2q17Name, setM2q17Name] = useState("")
    const [M2q17_a, setM2q17_a] = useState("")
    console.log(M2q17_a)
    const [M2q17_b, setM2q17_b] = useState("")
    const [M2q17_c, setM2q17_c] = useState("")
    const [M2q17_d, setM2q17_d] = useState("")
    const [M2q17_e, setM2q17_e] = useState("")
    const [M2q17_correct, setM2q17_correct] = useState("")
    const handleM2q17_NameChange = e => {
        setM2q17Name(e.target.value)
    }
    const handleM2q17_aChange = e => {
        setM2q17_a(e.target.value)
    }
    const handleM2q17_bChange = e => {
        setM2q17_b(e.target.value)
    }
    const handleM2q17_cChange = e => {
        setM2q17_c(e.target.value)
    }
    const handleM2q17_dChange = e => {
        setM2q17_d(e.target.value)
    }
    const handleM2q17_eChange = e => {
        setM2q17_e(e.target.value)
    }
    const handleM2q17_correctChange = e => {
        setM2q17_correct(e.target.value)
    }
    const [M2q18Name, setM2q18Name] = useState("")
    const [M2q18_a, setM2q18_a] = useState("")
    const [M2q18_b, setM2q18_b] = useState("")
    const [M2q18_c, setM2q18_c] = useState("")
    const [M2q18_d, setM2q18_d] = useState("")
    const [M2q18_e, setM2q18_e] = useState("")
    const [M2q18_correct, setM2q18_correct] = useState("")
    const handleM2q18_NameChange = e => {
        setM2q18Name(e.target.value)
    }
    const handleM2q18_aChange = e => {
        setM2q18_a(e.target.value)
    }
    const handleM2q18_bChange = e => {
        setM2q18_b(e.target.value)
    }
    const handleM2q18_cChange = e => {
        setM2q18_c(e.target.value)
    }
    const handleM2q18_dChange = e => {
        setM2q18_d(e.target.value)
    }
    const handleM2q18_eChange = e => {
        setM2q18_e(e.target.value)
    }
    const handleM2q18_correctChange = e => {
        setM2q18_correct(e.target.value)
    }

    const [M2q19Name, setM2q19Name] = useState("")
    const [M2q19_a, setM2q19_a] = useState("")
    const [M2q19_b, setM2q19_b] = useState("")
    const [M2q19_c, setM2q19_c] = useState("")
    const [M2q19_d, setM2q19_d] = useState("")
    const [M2q19_e, setM2q19_e] = useState("")
    const [M2q19_correct, setM2q19_correct] = useState("")
    const handleM2q19_NameChange = e => {
        setM2q19Name(e.target.value)
    }
    const handleM2q19_aChange = e => {
        setM2q19_a(e.target.value)
    }
    const handleM2q19_bChange = e => {
        setM2q19_b(e.target.value)
    }
    const handleM2q19_cChange = e => {
        setM2q19_c(e.target.value)
    }
    const handleM2q19_dChange = e => {
        setM2q19_d(e.target.value)
    }
    const handleM2q19_eChange = e => {
        setM2q19_e(e.target.value)
    }
    const handleM2q19_correctChange = e => {
        setM2q19_correct(e.target.value)
    }
    const [M2q20Name, setM2q20Name] = useState("")
    const [M2q20_a, setM2q20_a] = useState("")
    const [M2q20_b, setM2q20_b] = useState("")
    const [M2q20_c, setM2q20_c] = useState("")
    const [M2q20_d, setM2q20_d] = useState("")
    const [M2q20_e, setM2q20_e] = useState("")
    const [M2q20_correct, setM2q20_correct] = useState("")
    const handleM2q20_NameChange = e => {
        setM2q20Name(e.target.value)
    }
    const handleM2q20_aChange = e => {
        setM2q20_a(e.target.value)
    }
    const handleM2q20_bChange = e => {
        setM2q20_b(e.target.value)
    }
    const handleM2q20_cChange = e => {
        setM2q20_c(e.target.value)
    }
    const handleM2q20_dChange = e => {
        setM2q20_d(e.target.value)
    }
    const handleM2q20_eChange = e => {
        setM2q20_e(e.target.value)
    }
    const handleM2q20_correctChange = e => {
        setM2q20_correct(e.target.value)
    }
    const [M2q21Name, setM2q21Name] = useState("")
    const [M2q21_a, setM2q21_a] = useState("")
    const [M2q21_b, setM2q21_b] = useState("")
    const [M2q21_c, setM2q21_c] = useState("")
    const [M2q21_d, setM2q21_d] = useState("")
    const [M2q21_e, setM2q21_e] = useState("")
    const [M2q21_correct, setM2q21_correct] = useState("")
    const handleM2q21_NameChange = e => {
        setM2q21Name(e.target.value)
    }
    const handleM2q21_aChange = e => {
        setM2q21_a(e.target.value)
    }
    const handleM2q21_bChange = e => {
        setM2q21_b(e.target.value)
    }
    const handleM2q21_cChange = e => {
        setM2q21_c(e.target.value)
    }
    const handleM2q21_dChange = e => {
        setM2q21_d(e.target.value)
    }
    const handleM2q21_eChange = e => {
        setM2q21_e(e.target.value)
    }
    const handleM2q21_correctChange = e => {
        setM2q21_correct(e.target.value)
    }
    const [M2q22Name, setM2q22Name] = useState("")
    const [M2q22_a, setM2q22_a] = useState("")
    const [M2q22_b, setM2q22_b] = useState("")
    const [M2q22_c, setM2q22_c] = useState("")
    const [M2q22_d, setM2q22_d] = useState("")
    const [M2q22_e, setM2q22_e] = useState("")
    const [M2q22_correct, setM2q22_correct] = useState("")
    const handleM2q22_NameChange = e => {
        setM2q22Name(e.target.value)
    }
    const handleM2q22_aChange = e => {
        setM2q22_a(e.target.value)
    }
    const handleM2q22_bChange = e => {
        setM2q22_b(e.target.value)
    }
    const handleM2q22_cChange = e => {
        setM2q22_c(e.target.value)
    }
    const handleM2q22_dChange = e => {
        setM2q22_d(e.target.value)
    }
    const handleM2q22_eChange = e => {
        setM2q22_e(e.target.value)
    }
    const handleM2q22_correctChange = e => {
        setM2q22_correct(e.target.value)
    }
    const [M2q23Name, setM2q23Name] = useState("")
    const [M2q23_a, setM2q23_a] = useState("")
    const [M2q23_b, setM2q23_b] = useState("")
    const [M2q23_c, setM2q23_c] = useState("")
    const [M2q23_d, setM2q23_d] = useState("")
    const [M2q23_e, setM2q23_e] = useState("")
    const [M2q23_correct, setM2q23_correct] = useState("")
    const handleM2q23_NameChange = e => {
        setM2q23Name(e.target.value)
    }
    const handleM2q23_aChange = e => {
        setM2q23_a(e.target.value)
    }
    const handleM2q23_bChange = e => {
        setM2q23_b(e.target.value)
    }
    const handleM2q23_cChange = e => {
        setM2q23_c(e.target.value)
    }
    const handleM2q23_dChange = e => {
        setM2q23_d(e.target.value)
    }
    const handleM2q23_eChange = e => {
        setM2q23_e(e.target.value)
    }
    const handleM2q23_correctChange = e => {
        setM2q23_correct(e.target.value)
    }
    const [M2q24Name, setM2q24Name] = useState("")
    const [M2q24_a, setM2q24_a] = useState("")
    const [M2q24_b, setM2q24_b] = useState("")
    const [M2q24_c, setM2q24_c] = useState("")
    const [M2q24_d, setM2q24_d] = useState("")
    const [M2q24_e, setM2q24_e] = useState("")
    const [M2q24_correct, setM2q24_correct] = useState("")
    const handleM2q24_NameChange = e => {
        setM2q24Name(e.target.value)
    }
    const handleM2q24_aChange = e => {
        setM2q24_a(e.target.value)
    }
    const handleM2q24_bChange = e => {
        setM2q24_b(e.target.value)
    }
    const handleM2q24_cChange = e => {
        setM2q24_c(e.target.value)
    }
    const handleM2q24_dChange = e => {
        setM2q24_d(e.target.value)
    }
    const handleM2q24_eChange = e => {
        setM2q24_e(e.target.value)
    }
    const handleM2q24_correctChange = e => {
        setM2q24_correct(e.target.value)
    }

    const [M2q25Name, setM2q25Name] = useState("")
    const [M2q25_a, setM2q25_a] = useState("")
    const [M2q25_b, setM2q25_b] = useState("")
    const [M2q25_c, setM2q25_c] = useState("")
    const [M2q25_d, setM2q25_d] = useState("")
    const [M2q25_e, setM2q25_e] = useState("")
    const [M2q25_correct, setM2q25_correct] = useState("")
    const handleM2q25_NameChange = e => {
        setM2q25Name(e.target.value)
    }
    const handleM2q25_aChange = e => {
        setM2q25_a(e.target.value)
    }
    const handleM2q25_bChange = e => {
        setM2q25_b(e.target.value)
    }
    const handleM2q25_cChange = e => {
        setM2q25_c(e.target.value)
    }
    const handleM2q25_dChange = e => {
        setM2q25_d(e.target.value)
    }
    const handleM2q25_eChange = e => {
        setM2q25_e(e.target.value)
    }
    const handleM2q25_correctChange = e => {
        setM2q25_correct(e.target.value)
    }

    //Reading
    const [paragraphName_1, setParagraphName_1] = useState("")
    const paragraphName_1_Change = e => {
        setParagraphName_1(e.target.value)
    }
    const [paragraphName_2, setParagraphName_2] = useState("")
    const paragraphName_2_Change = e => {
        setParagraphName_2(e.target.value)
    }
    const [paragraphName_3, setParagraphName_3] = useState("")
    const paragraphName_3_Change = e => {
        setParagraphName_3(e.target.value)
    }
    const [paragraphName_4, setParagraphName_4] = useState("")
    const paragraphName_4_Change = e => {
        setParagraphName_4(e.target.value)
    }
    const [paragraphName_5, setParagraphName_5] = useState("")
    const paragraphName_5_Change = e => {
        setParagraphName_5(e.target.value)
    }
    const [paragraphName_6, setParagraphName_6] = useState("")
    const paragraphName_6_Change = e => {
        setParagraphName_6(e.target.value)
    }
    const [paragraphName_7, setParagraphName_7] = useState("")
    const paragraphName_7_Change = e => {
        setParagraphName_7(e.target.value)
    }
    const [paragraphName_8, setParagraphName_8] = useState("")
    const paragraphName_8_Change = e => {
        setParagraphName_8(e.target.value)
    }
const [Readq1Name, setReadq1Name] = useState("")
const [Readq1_a, setReadq1_a] = useState("")
const [Readq1_b, setReadq1_b] = useState("")
console.log(Readq1_b)
const [Readq1_c, setReadq1_c] = useState("")
const [Readq1_d, setReadq1_d] = useState("")
const [Readq1_e, setReadq1_e] = useState("")
const [Readq1_correct, setReadq1_correct] = useState("")
const handleReadq1_NameChange = e => {
    setReadq1Name(e.target.Readalue)
}
const handleReadq1_aChange = e => {
    setReadq1_a(e.target.Readalue)
}
const handleReadq1_bChange = e => {
    setReadq1_b(e.target.Readalue)
}
const handleReadq1_cChange = e => {
    setReadq1_c(e.target.Readalue)
}
const handleReadq1_dChange = e => {
    setReadq1_d(e.target.Readalue)
}
const handleReadq1_eChange = e => {
    setReadq1_e(e.target.Readalue)
}
const handleReadq1_correctChange = e => {
    setReadq1_correct(e.target.Readalue)
}
const [Readq2Name, setReadq2Name] = useState("")
const [Readq2_a, setReadq2_a] = useState("")
const [Readq2_b, setReadq2_b] = useState("")
const [Readq2_c, setReadq2_c] = useState("")
const [Readq2_d, setReadq2_d] = useState("")
const [Readq2_e, setReadq2_e] = useState("")
const [Readq2_correct, setReadq2_correct] = useState("")
const handleReadq2_NameChange = e => {
    setReadq2Name(e.target.Readalue)
}
const handleReadq2_aChange = e => {
    setReadq2_a(e.target.Readalue)
}
const handleReadq2_bChange = e => {
    setReadq2_b(e.target.Readalue)
}
const handleReadq2_cChange = e => {
    setReadq2_c(e.target.Readalue)
}
const handleReadq2_dChange = e => {
    setReadq2_d(e.target.Readalue)
}
const handleReadq2_eChange = e => {
    setReadq2_e(e.target.Readalue)
}
const handleReadq2_correctChange = e => {
    setReadq2_correct(e.target.Readalue)
}
const [Readq3Name, setReadq3Name] = useState("")
const [Readq3_a, setReadq3_a] = useState("")
const [Readq3_b, setReadq3_b] = useState("")
const [Readq3_c, setReadq3_c] = useState("")
const [Readq3_d, setReadq3_d] = useState("")
const [Readq3_e, setReadq3_e] = useState("")
const [Readq3_correct, setReadq3_correct] = useState("")
const handleReadq3_NameChange = e => {
    setReadq3Name(e.target.Readalue)
}
const handleReadq3_aChange = e => {
    setReadq3_a(e.target.Readalue)
}
const handleReadq3_bChange = e => {
    setReadq3_b(e.target.Readalue)
}
const handleReadq3_cChange = e => {
    setReadq3_c(e.target.Readalue)
}
const handleReadq3_dChange = e => {
    setReadq3_d(e.target.Readalue)
}
const handleReadq3_eChange = e => {
    setReadq3_e(e.target.Readalue)
}
const handleReadq3_correctChange = e => {
    setReadq3_correct(e.target.Readalue)
}
const [Readq4Name, setReadq4Name] = useState("")
const [Readq4_a, setReadq4_a] = useState("")
const [Readq4_b, setReadq4_b] = useState("")
const [Readq4_c, setReadq4_c] = useState("")
const [Readq4_d, setReadq4_d] = useState("")
const [Readq4_e, setReadq4_e] = useState("")
const [Readq4_correct, setReadq4_correct] = useState("")
const handleReadq4_NameChange = e => {
    setReadq4Name(e.target.Readalue)
}
const handleReadq4_aChange = e => {
    setReadq4_a(e.target.Readalue)
}
const handleReadq4_bChange = e => {
    setReadq4_b(e.target.Readalue)
}
const handleReadq4_cChange = e => {
    setReadq4_c(e.target.Readalue)
}
const handleReadq4_dChange = e => {
    setReadq4_d(e.target.Readalue)
}
const handleReadq4_eChange = e => {
    setReadq4_e(e.target.Readalue)
}
const handleReadq4_correctChange = e => {
    setReadq4_correct(e.target.Readalue)
}
const [Readq5Name, setReadq5Name] = useState("")
const [Readq5_a, setReadq5_a] = useState("")
const [Readq5_b, setReadq5_b] = useState("")
const [Readq5_c, setReadq5_c] = useState("")
const [Readq5_d, setReadq5_d] = useState("")
const [Readq5_e, setReadq5_e] = useState("")
const [Readq5_correct, setReadq5_correct] = useState("")
const handleReadq5_NameChange = e => {
    setReadq5Name(e.target.Readalue)
}
const handleReadq5_aChange = e => {
    setReadq5_a(e.target.Readalue)
}
const handleReadq5_bChange = e => {
    setReadq5_b(e.target.Readalue)
}
const handleReadq5_cChange = e => {
    setReadq5_c(e.target.Readalue)
}
const handleReadq5_dChange = e => {
    setReadq5_d(e.target.Readalue)
}
const handleReadq5_eChange = e => {
    setReadq5_e(e.target.Readalue)
}
const handleReadq5_correctChange = e => {
    setReadq5_correct(e.target.Readalue)
}
const [Readq6Name, setReadq6Name] = useState("")
const [Readq6_a, setReadq6_a] = useState("")
const [Readq6_b, setReadq6_b] = useState("")
const [Readq6_c, setReadq6_c] = useState("")
const [Readq6_d, setReadq6_d] = useState("")
const [Readq6_e, setReadq6_e] = useState("")
const [Readq6_correct, setReadq6_correct] = useState("")
const handleReadq6_NameChange = e => {
    setReadq6Name(e.target.Readalue)
}
const handleReadq6_aChange = e => {
    setReadq6_a(e.target.Readalue)
}
const handleReadq6_bChange = e => {
    setReadq6_b(e.target.Readalue)
}
const handleReadq6_cChange = e => {
    setReadq6_c(e.target.Readalue)
}
const handleReadq6_dChange = e => {
    setReadq6_d(e.target.Readalue)
}
const handleReadq6_eChange = e => {
    setReadq6_e(e.target.Readalue)
}
const handleReadq6_correctChange = e => {
    setReadq6_correct(e.target.Readalue)
}

const [Readq7Name, setReadq7Name] = useState("")
const [Readq7_a, setReadq7_a] = useState("")
const [Readq7_b, setReadq7_b] = useState("")
const [Readq7_c, setReadq7_c] = useState("")
const [Readq7_d, setReadq7_d] = useState("")
const [Readq7_e, setReadq7_e] = useState("")
const [Readq7_correct, setReadq7_correct] = useState("")
const handleReadq7_NameChange = e => {
    setReadq7Name(e.target.Readalue)
}
const handleReadq7_aChange = e => {
    setReadq7_a(e.target.Readalue)
}
const handleReadq7_bChange = e => {
    setReadq7_b(e.target.Readalue)
}
const handleReadq7_cChange = e => {
    setReadq7_c(e.target.Readalue)
}
const handleReadq7_dChange = e => {
    setReadq7_d(e.target.Readalue)
}
const handleReadq7_eChange = e => {
    setReadq7_e(e.target.Readalue)
}
const handleReadq7_correctChange = e => {
    setReadq7_correct(e.target.Readalue)
}
const [Readq8Name, setReadq8Name] = useState("")
const [Readq8_a, setReadq8_a] = useState("")
const [Readq8_b, setReadq8_b] = useState("")
const [Readq8_c, setReadq8_c] = useState("")
const [Readq8_d, setReadq8_d] = useState("")
const [Readq8_e, setReadq8_e] = useState("")
const [Readq8_correct, setReadq8_correct] = useState("")
const handleReadq8_NameChange = e => {
    setReadq8Name(e.target.Readalue)
}
const handleReadq8_aChange = e => {
    setReadq8_a(e.target.Readalue)
}
const handleReadq8_bChange = e => {
    setReadq8_b(e.target.Readalue)
}
const handleReadq8_cChange = e => {
    setReadq8_c(e.target.Readalue)
}
const handleReadq8_dChange = e => {
    setReadq8_d(e.target.Readalue)
}
const handleReadq8_eChange = e => {
    setReadq8_e(e.target.Readalue)
}
const handleReadq8_correctChange = e => {
    setReadq8_correct(e.target.Readalue)
}
const [Readq9Name, setReadq9Name] = useState("")
const [Readq9_a, setReadq9_a] = useState("")
const [Readq9_b, setReadq9_b] = useState("")
const [Readq9_c, setReadq9_c] = useState("")
const [Readq9_d, setReadq9_d] = useState("")
const [Readq9_e, setReadq9_e] = useState("")
const [Readq9_correct, setReadq9_correct] = useState("")
const handleReadq9_NameChange = e => {
    setReadq9Name(e.target.Readalue)
}
const handleReadq9_aChange = e => {
    setReadq9_a(e.target.Readalue)
}
const handleReadq9_bChange = e => {
    setReadq9_b(e.target.Readalue)
}
const handleReadq9_cChange = e => {
    setReadq9_c(e.target.Readalue)
}
const handleReadq9_dChange = e => {
    setReadq9_d(e.target.Readalue)
}
const handleReadq9_eChange = e => {
    setReadq9_e(e.target.Readalue)
}
const handleReadq9_correctChange = e => {
    setReadq9_correct(e.target.Readalue)
}
const [Readq10Name, setReadq10Name] = useState("")
const [Readq10_a, setReadq10_a] = useState("")
const [Readq10_b, setReadq10_b] = useState("")
const [Readq10_c, setReadq10_c] = useState("")
const [Readq10_d, setReadq10_d] = useState("")
const [Readq10_e, setReadq10_e] = useState("")
const [Readq10_correct, setReadq10_correct] = useState("")
const handleReadq10_NameChange = e => {
    setReadq10Name(e.target.Readalue)
}
const handleReadq10_aChange = e => {
    setReadq10_a(e.target.Readalue)
}
const handleReadq10_bChange = e => {
    setReadq10_b(e.target.Readalue)
}
const handleReadq10_cChange = e => {
    setReadq10_c(e.target.Readalue)
}
const handleReadq10_dChange = e => {
    setReadq10_d(e.target.Readalue)
}
const handleReadq10_eChange = e => {
    setReadq10_e(e.target.Readalue)
}
const handleReadq10_correctChange = e => {
    setReadq10_correct(e.target.Readalue)
}
const [Readq11Name, setReadq11Name] = useState("")
const [Readq11_a, setReadq11_a] = useState("")
const [Readq11_b, setReadq11_b] = useState("")
const [Readq11_c, setReadq11_c] = useState("")
const [Readq11_d, setReadq11_d] = useState("")
const [Readq11_e, setReadq11_e] = useState("")
const [Readq11_correct, setReadq11_correct] = useState("")
const handleReadq11_NameChange = e => {
    setReadq11Name(e.target.Readalue)
}
const handleReadq11_aChange = e => {
    setReadq11_a(e.target.Readalue)
}
const handleReadq11_bChange = e => {
    setReadq11_b(e.target.Readalue)
}
const handleReadq11_cChange = e => {
    setReadq11_c(e.target.Readalue)
}
const handleReadq11_dChange = e => {
    setReadq11_d(e.target.Readalue)
}
const handleReadq11_eChange = e => {
    setReadq11_e(e.target.Readalue)
}
const handleReadq11_correctChange = e => {
    setReadq11_correct(e.target.Readalue)
}
const [Readq12Name, setReadq12Name] = useState("")
const [Readq12_a, setReadq12_a] = useState("")
const [Readq12_b, setReadq12_b] = useState("")
const [Readq12_c, setReadq12_c] = useState("")
const [Readq12_d, setReadq12_d] = useState("")
const [Readq12_e, setReadq12_e] = useState("")
const [Readq12_correct, setReadq12_correct] = useState("")
const handleReadq12_NameChange = e => {
    setReadq12Name(e.target.Readalue)
}
const handleReadq12_aChange = e => {
    setReadq12_a(e.target.Readalue)
}
const handleReadq12_bChange = e => {
    setReadq12_b(e.target.Readalue)
}
const handleReadq12_cChange = e => {
    setReadq12_c(e.target.Readalue)
}
const handleReadq12_dChange = e => {
    setReadq12_d(e.target.Readalue)
}
const handleReadq12_eChange = e => {
    setReadq12_e(e.target.Readalue)
}
const handleReadq12_correctChange = e => {
    setReadq12_correct(e.target.Readalue)
}

const [Readq13Name, setReadq13Name] = useState("")
const [Readq13_a, setReadq13_a] = useState("")
const [Readq13_b, setReadq13_b] = useState("")
const [Readq13_c, setReadq13_c] = useState("")
const [Readq13_d, setReadq13_d] = useState("")
const [Readq13_e, setReadq13_e] = useState("")
const [Readq13_correct, setReadq13_correct] = useState("")
const handleReadq13_NameChange = e => {
    setReadq13Name(e.target.Readalue)
}
const handleReadq13_aChange = e => {
    setReadq13_a(e.target.Readalue)
}
const handleReadq13_bChange = e => {
    setReadq13_b(e.target.Readalue)
}
const handleReadq13_cChange = e => {
    setReadq13_c(e.target.Readalue)
}
const handleReadq13_dChange = e => {
    setReadq13_d(e.target.Readalue)
}
const handleReadq13_eChange = e => {
    setReadq13_e(e.target.Readalue)
}
const handleReadq13_correctChange = e => {
    setReadq13_correct(e.target.Readalue)
}
const [Readq14Name, setReadq14Name] = useState("")
const [Readq14_a, setReadq14_a] = useState("")
const [Readq14_b, setReadq14_b] = useState("")
const [Readq14_c, setReadq14_c] = useState("")
const [Readq14_d, setReadq14_d] = useState("")
const [Readq14_e, setReadq14_e] = useState("")
const [Readq14_correct, setReadq14_correct] = useState("")
const handleReadq14_NameChange = e => {
    setReadq14Name(e.target.Readalue)
}
const handleReadq14_aChange = e => {
    setReadq14_a(e.target.Readalue)
}
const handleReadq14_bChange = e => {
    setReadq14_b(e.target.Readalue)
}
const handleReadq14_cChange = e => {
    setReadq14_c(e.target.Readalue)
}
const handleReadq14_dChange = e => {
    setReadq14_d(e.target.Readalue)
}
const handleReadq14_eChange = e => {
    setReadq14_e(e.target.Readalue)
}
const handleReadq14_correctChange = e => {
    setReadq14_correct(e.target.Readalue)
}
const [Readq15Name, setReadq15Name] = useState("")
const [Readq15_a, setReadq15_a] = useState("")
const [Readq15_b, setReadq15_b] = useState("")
const [Readq15_c, setReadq15_c] = useState("")
const [Readq15_d, setReadq15_d] = useState("")
const [Readq15_e, setReadq15_e] = useState("")
const [Readq15_correct, setReadq15_correct] = useState("")
const handleReadq15_NameChange = e => {
    setReadq15Name(e.target.Readalue)
}
const handleReadq15_aChange = e => {
    setReadq15_a(e.target.Readalue)
}
const handleReadq15_bChange = e => {
    setReadq15_b(e.target.Readalue)
}
const handleReadq15_cChange = e => {
    setReadq15_c(e.target.Readalue)
}
const handleReadq15_dChange = e => {
    setReadq15_d(e.target.Readalue)
}
const handleReadq15_eChange = e => {
    setReadq15_e(e.target.Readalue)
}
const handleReadq15_correctChange = e => {
    setReadq15_correct(e.target.Readalue)
}
const [Readq16Name, setReadq16Name] = useState("")
const [Readq16_a, setReadq16_a] = useState("")
const [Readq16_b, setReadq16_b] = useState("")
const [Readq16_c, setReadq16_c] = useState("")
const [Readq16_d, setReadq16_d] = useState("")
const [Readq16_e, setReadq16_e] = useState("")
const [Readq16_correct, setReadq16_correct] = useState("")
const handleReadq16_NameChange = e => {
    setReadq16Name(e.target.Readalue)
}
const handleReadq16_aChange = e => {
    setReadq16_a(e.target.Readalue)
}
const handleReadq16_bChange = e => {
    setReadq16_b(e.target.Readalue)
}
const handleReadq16_cChange = e => {
    setReadq16_c(e.target.Readalue)
}
const handleReadq16_dChange = e => {
    setReadq16_d(e.target.Readalue)
}
const handleReadq16_eChange = e => {
    setReadq16_e(e.target.Readalue)
}
const handleReadq16_correctChange = e => {
    setReadq16_correct(e.target.Readalue)
}
const [Readq17Name, setReadq17Name] = useState("")
const [Readq17_a, setReadq17_a] = useState("")
const [Readq17_b, setReadq17_b] = useState("")
const [Readq17_c, setReadq17_c] = useState("")
const [Readq17_d, setReadq17_d] = useState("")
const [Readq17_e, setReadq17_e] = useState("")
const [Readq17_correct, setReadq17_correct] = useState("")
const handleReadq17_NameChange = e => {
    setReadq17Name(e.target.Readalue)
}
const handleReadq17_aChange = e => {
    setReadq17_a(e.target.Readalue)
}
const handleReadq17_bChange = e => {
    setReadq17_b(e.target.Readalue)
}
const handleReadq17_cChange = e => {
    setReadq17_c(e.target.Readalue)
}
const handleReadq17_dChange = e => {
    setReadq17_d(e.target.Readalue)
}
const handleReadq17_eChange = e => {
    setReadq17_e(e.target.Readalue)
}
const handleReadq17_correctChange = e => {
    setReadq17_correct(e.target.Readalue)
}
const [Readq18Name, setReadq18Name] = useState("")
const [Readq18_a, setReadq18_a] = useState("")
const [Readq18_b, setReadq18_b] = useState("")
const [Readq18_c, setReadq18_c] = useState("")
const [Readq18_d, setReadq18_d] = useState("")
const [Readq18_e, setReadq18_e] = useState("")
const [Readq18_correct, setReadq18_correct] = useState("")
const handleReadq18_NameChange = e => {
    setReadq18Name(e.target.Readalue)
}
const handleReadq18_aChange = e => {
    setReadq18_a(e.target.Readalue)
}
const handleReadq18_bChange = e => {
    setReadq18_b(e.target.Readalue)
}
const handleReadq18_cChange = e => {
    setReadq18_c(e.target.Readalue)
}
const handleReadq18_dChange = e => {
    setReadq18_d(e.target.Readalue)
}
const handleReadq18_eChange = e => {
    setReadq18_e(e.target.Readalue)
}
const handleReadq18_correctChange = e => {
    setReadq18_correct(e.target.Readalue)
}

const [Readq19Name, setReadq19Name] = useState("")
const [Readq19_a, setReadq19_a] = useState("")
const [Readq19_b, setReadq19_b] = useState("")
const [Readq19_c, setReadq19_c] = useState("")
const [Readq19_d, setReadq19_d] = useState("")
const [Readq19_e, setReadq19_e] = useState("")
const [Readq19_correct, setReadq19_correct] = useState("")
const handleReadq19_NameChange = e => {
    setReadq19Name(e.target.Readalue)
}
const handleReadq19_aChange = e => {
    setReadq19_a(e.target.Readalue)
}
const handleReadq19_bChange = e => {
    setReadq19_b(e.target.Readalue)
}
const handleReadq19_cChange = e => {
    setReadq19_c(e.target.Readalue)
}
const handleReadq19_dChange = e => {
    setReadq19_d(e.target.Readalue)
}
const handleReadq19_eChange = e => {
    setReadq19_e(e.target.Readalue)
}
const handleReadq19_correctChange = e => {
    setReadq19_correct(e.target.Readalue)
}
const [Readq20Name, setReadq20Name] = useState("")
const [Readq20_a, setReadq20_a] = useState("")
const [Readq20_b, setReadq20_b] = useState("")
const [Readq20_c, setReadq20_c] = useState("")
const [Readq20_d, setReadq20_d] = useState("")
const [Readq20_e, setReadq20_e] = useState("")
const [Readq20_correct, setReadq20_correct] = useState("")
const handleReadq20_NameChange = e => {
    setReadq20Name(e.target.Readalue)
}
const handleReadq20_aChange = e => {
    setReadq20_a(e.target.Readalue)
}
const handleReadq20_bChange = e => {
    setReadq20_b(e.target.Readalue)
}
const handleReadq20_cChange = e => {
    setReadq20_c(e.target.Readalue)
}
const handleReadq20_dChange = e => {
    setReadq20_d(e.target.Readalue)
}
const handleReadq20_eChange = e => {
    setReadq20_e(e.target.Readalue)
}
const handleReadq20_correctChange = e => {
    setReadq20_correct(e.target.Readalue)
}
const [Readq21Name, setReadq21Name] = useState("")
const [Readq21_a, setReadq21_a] = useState("")
const [Readq21_b, setReadq21_b] = useState("")
const [Readq21_c, setReadq21_c] = useState("")
const [Readq21_d, setReadq21_d] = useState("")
const [Readq21_e, setReadq21_e] = useState("")
const [Readq21_correct, setReadq21_correct] = useState("")
const handleReadq21_NameChange = e => {
    setReadq21Name(e.target.Readalue)
}
const handleReadq21_aChange = e => {
    setReadq21_a(e.target.Readalue)
}
const handleReadq21_bChange = e => {
    setReadq21_b(e.target.Readalue)
}
const handleReadq21_cChange = e => {
    setReadq21_c(e.target.Readalue)
}
const handleReadq21_dChange = e => {
    setReadq21_d(e.target.Readalue)
}
const handleReadq21_eChange = e => {
    setReadq21_e(e.target.Readalue)
}
const handleReadq21_correctChange = e => {
    setReadq21_correct(e.target.Readalue)
}
const [Readq22Name, setReadq22Name] = useState("")
const [Readq22_a, setReadq22_a] = useState("")
const [Readq22_b, setReadq22_b] = useState("")
const [Readq22_c, setReadq22_c] = useState("")
const [Readq22_d, setReadq22_d] = useState("")
const [Readq22_e, setReadq22_e] = useState("")
const [Readq22_correct, setReadq22_correct] = useState("")
const handleReadq22_NameChange = e => {
    setReadq22Name(e.target.Readalue)
}
const handleReadq22_aChange = e => {
    setReadq22_a(e.target.Readalue)
}
const handleReadq22_bChange = e => {
    setReadq22_b(e.target.Readalue)
}
const handleReadq22_cChange = e => {
    setReadq22_c(e.target.Readalue)
}
const handleReadq22_dChange = e => {
    setReadq22_d(e.target.Readalue)
}
const handleReadq22_eChange = e => {
    setReadq22_e(e.target.Readalue)
}
const handleReadq22_correctChange = e => {
    setReadq22_correct(e.target.Readalue)
}
const [Readq23Name, setReadq23Name] = useState("")
const [Readq23_a, setReadq23_a] = useState("")
const [Readq23_b, setReadq23_b] = useState("")
const [Readq23_c, setReadq23_c] = useState("")
const [Readq23_d, setReadq23_d] = useState("")
const [Readq23_e, setReadq23_e] = useState("")
const [Readq23_correct, setReadq23_correct] = useState("")
const handleReadq23_NameChange = e => {
    setReadq23Name(e.target.Readalue)
}
const handleReadq23_aChange = e => {
    setReadq23_a(e.target.Readalue)
}
const handleReadq23_bChange = e => {
    setReadq23_b(e.target.Readalue)
}
const handleReadq23_cChange = e => {
    setReadq23_c(e.target.Readalue)
}
const handleReadq23_dChange = e => {
    setReadq23_d(e.target.Readalue)
}
const handleReadq23_eChange = e => {
    setReadq23_e(e.target.Readalue)
}
const handleReadq23_correctChange = e => {
    setReadq23_correct(e.target.Readalue)
}
const [Readq24Name, setReadq24Name] = useState("")
const [Readq24_a, setReadq24_a] = useState("")
const [Readq24_b, setReadq24_b] = useState("")
const [Readq24_c, setReadq24_c] = useState("")
const [Readq24_d, setReadq24_d] = useState("")
const [Readq24_e, setReadq24_e] = useState("")
const [Readq24_correct, setReadq24_correct] = useState("")
const handleReadq24_NameChange = e => {
    setReadq24Name(e.target.Readalue)
}
const handleReadq24_aChange = e => {
    setReadq24_a(e.target.Readalue)
}
const handleReadq24_bChange = e => {
    setReadq24_b(e.target.Readalue)
}
const handleReadq24_cChange = e => {
    setReadq24_c(e.target.Readalue)
}
const handleReadq24_dChange = e => {
    setReadq24_d(e.target.Readalue)
}
const handleReadq24_eChange = e => {
    setReadq24_e(e.target.Readalue)
}
const handleReadq24_correctChange = e => {
    setReadq24_correct(e.target.Readalue)
}

const [Readq25Name, setReadq25Name] = useState("")
const [Readq25_a, setReadq25_a] = useState("")
const [Readq25_b, setReadq25_b] = useState("")
const [Readq25_c, setReadq25_c] = useState("")
const [Readq25_d, setReadq25_d] = useState("")
const [Readq25_e, setReadq25_e] = useState("")
const [Readq25_correct, setReadq25_correct] = useState("")
const handleReadq25_NameChange = e => {
    setReadq25Name(e.target.Readalue)
}
const handleReadq25_aChange = e => {
    setReadq25_a(e.target.Readalue)
}
const handleReadq25_bChange = e => {
    setReadq25_b(e.target.Readalue)
}
const handleReadq25_cChange = e => {
    setReadq25_c(e.target.Readalue)
}
const handleReadq25_dChange = e => {
    setReadq25_d(e.target.Readalue)
}
const handleReadq25_eChange = e => {
    setReadq25_e(e.target.Readalue)
}
const handleReadq25_correctChange = e => {
    setReadq25_correct(e.target.Readalue)
}
const [Readq26Name, setReadq26Name] = useState("")
const [Readq26_a, setReadq26_a] = useState("")
const [Readq26_b, setReadq26_b] = useState("")
const [Readq26_c, setReadq26_c] = useState("")
const [Readq26_d, setReadq26_d] = useState("")
const [Readq26_e, setReadq26_e] = useState("")
const [Readq26_correct, setReadq26_correct] = useState("")
const handleReadq26_NameChange = e => {
    setReadq26Name(e.target.Readalue)
}
const handleReadq26_aChange = e => {
    setReadq26_a(e.target.Readalue)
}
const handleReadq26_bChange = e => {
    setReadq26_b(e.target.Readalue)
}
const handleReadq26_cChange = e => {
    setReadq26_c(e.target.Readalue)
}
const handleReadq26_dChange = e => {
    setReadq26_d(e.target.Readalue)
}
const handleReadq26_eChange = e => {
    setReadq26_e(e.target.Readalue)
}
const handleReadq26_correctChange = e => {
    setReadq26_correct(e.target.Readalue)
}
const [Readq27Name, setReadq27Name] = useState("")
const [Readq27_a, setReadq27_a] = useState("")
const [Readq27_b, setReadq27_b] = useState("")
const [Readq27_c, setReadq27_c] = useState("")
const [Readq27_d, setReadq27_d] = useState("")
const [Readq27_e, setReadq27_e] = useState("")
const [Readq27_correct, setReadq27_correct] = useState("")
const handleReadq27_NameChange = e => {
    setReadq27Name(e.target.Readalue)
}
const handleReadq27_aChange = e => {
    setReadq27_a(e.target.Readalue)
}
const handleReadq27_bChange = e => {
    setReadq27_b(e.target.Readalue)
}
const handleReadq27_cChange = e => {
    setReadq27_c(e.target.Readalue)
}
const handleReadq27_dChange = e => {
    setReadq27_d(e.target.Readalue)
}
const handleReadq27_eChange = e => {
    setReadq27_e(e.target.Readalue)
}
const handleReadq27_correctChange = e => {
    setReadq27_correct(e.target.Readalue)
}
const [Readq28Name, setReadq28Name] = useState("")
const [Readq28_a, setReadq28_a] = useState("")
const [Readq28_b, setReadq28_b] = useState("")
const [Readq28_c, setReadq28_c] = useState("")
const [Readq28_d, setReadq28_d] = useState("")
const [Readq28_e, setReadq28_e] = useState("")
const [Readq28_correct, setReadq28_correct] = useState("")
const handleReadq28_NameChange = e => {
    setReadq28Name(e.target.Readalue)
}
const handleReadq28_aChange = e => {
    setReadq28_a(e.target.Readalue)
}
const handleReadq28_bChange = e => {
    setReadq28_b(e.target.Readalue)
}
const handleReadq28_cChange = e => {
    setReadq28_c(e.target.Readalue)
}
const handleReadq28_dChange = e => {
    setReadq28_d(e.target.Readalue)
}
const handleReadq28_eChange = e => {
    setReadq28_e(e.target.Readalue)
}
const handleReadq28_correctChange = e => {
    setReadq28_correct(e.target.Readalue)
}
const [Readq29Name, setReadq29Name] = useState("")
const [Readq29_a, setReadq29_a] = useState("")
const [Readq29_b, setReadq29_b] = useState("")
const [Readq29_c, setReadq29_c] = useState("")
const [Readq29_d, setReadq29_d] = useState("")
const [Readq29_e, setReadq29_e] = useState("")
const [Readq29_correct, setReadq29_correct] = useState("")
const handleReadq29_NameChange = e => {
    setReadq29Name(e.target.Readalue)
}
const handleReadq29_aChange = e => {
    setReadq29_a(e.target.Readalue)
}
const handleReadq29_bChange = e => {
    setReadq29_b(e.target.Readalue)
}
const handleReadq29_cChange = e => {
    setReadq29_c(e.target.Readalue)
}
const handleReadq29_dChange = e => {
    setReadq29_d(e.target.Readalue)
}
const handleReadq29_eChange = e => {
    setReadq29_e(e.target.Readalue)
}
const handleReadq29_correctChange = e => {
    setReadq29_correct(e.target.Readalue)
}
const [Readq30Name, setReadq30Name] = useState("")
const [Readq30_a, setReadq30_a] = useState("")
const [Readq30_b, setReadq30_b] = useState("")
const [Readq30_c, setReadq30_c] = useState("")
const [Readq30_d, setReadq30_d] = useState("")
const [Readq30_e, setReadq30_e] = useState("")
const [Readq30_correct, setReadq30_correct] = useState("")
const handleReadq30_NameChange = e => {
    setReadq30Name(e.target.Readalue)
}
const handleReadq30_aChange = e => {
    setReadq30_a(e.target.Readalue)
}
const handleReadq30_bChange = e => {
    setReadq30_b(e.target.Readalue)
}
const handleReadq30_cChange = e => {
    setReadq30_c(e.target.Readalue)
}
const handleReadq30_dChange = e => {
    setReadq30_d(e.target.Readalue)
}
const handleReadq30_eChange = e => {
    setReadq30_e(e.target.Readalue)
}
const handleReadq30_correctChange = e => {
    setReadq30_correct(e.target.Readalue)
}
const [Readq31Name, setReadq31Name] = useState("")
const [Readq31_a, setReadq31_a] = useState("")
const [Readq31_b, setReadq31_b] = useState("")
const [Readq31_c, setReadq31_c] = useState("")
const [Readq31_d, setReadq31_d] = useState("")
const [Readq31_e, setReadq31_e] = useState("")
const [Readq31_correct, setReadq31_correct] = useState("")
const handleReadq31_NameChange = e => {
    setReadq31Name(e.target.Readalue)
}
const handleReadq31_aChange = e => {
    setReadq31_a(e.target.Readalue)
}
const handleReadq31_bChange = e => {
    setReadq31_b(e.target.Readalue)
}
const handleReadq31_cChange = e => {
    setReadq31_c(e.target.Readalue)
}
const handleReadq31_dChange = e => {
    setReadq31_d(e.target.Readalue)
}
const handleReadq31_eChange = e => {
    setReadq31_e(e.target.Readalue)
}
const handleReadq31_correctChange = e => {
    setReadq31_correct(e.target.Readalue)
}
const [Readq32Name, setReadq32Name] = useState("")
const [Readq32_a, setReadq32_a] = useState("")
const [Readq32_b, setReadq32_b] = useState("")
const [Readq32_c, setReadq32_c] = useState("")
const [Readq32_d, setReadq32_d] = useState("")
const [Readq32_e, setReadq32_e] = useState("")
const [Readq32_correct, setReadq32_correct] = useState("")
const handleReadq32_NameChange = e => {
    setReadq32Name(e.target.Readalue)
}
const handleReadq32_aChange = e => {
    setReadq32_a(e.target.Readalue)
}
const handleReadq32_bChange = e => {
    setReadq32_b(e.target.Readalue)
}
const handleReadq32_cChange = e => {
    setReadq32_c(e.target.Readalue)
}
const handleReadq32_dChange = e => {
    setReadq32_d(e.target.Readalue)
}
const handleReadq32_eChange = e => {
    setReadq32_e(e.target.Readalue)
}
const handleReadq32_correctChange = e => {
    setReadq32_correct(e.target.Readalue)
}
const [Readq33Name, setReadq33Name] = useState("")
const [Readq33_a, setReadq33_a] = useState("")
const [Readq33_b, setReadq33_b] = useState("")
const [Readq33_c, setReadq33_c] = useState("")
const [Readq33_d, setReadq33_d] = useState("")
const [Readq33_e, setReadq33_e] = useState("")
const [Readq33_correct, setReadq33_correct] = useState("")
const handleReadq33_NameChange = e => {
    setReadq33Name(e.target.Readalue)
}
const handleReadq33_aChange = e => {
    setReadq33_a(e.target.Readalue)
}
const handleReadq33_bChange = e => {
    setReadq33_b(e.target.Readalue)
}
const handleReadq33_cChange = e => {
    setReadq33_c(e.target.Readalue)
}
const handleReadq33_dChange = e => {
    setReadq33_d(e.target.Readalue)
}
const handleReadq33_eChange = e => {
    setReadq33_e(e.target.Readalue)
}
const handleReadq33_correctChange = e => {
    setReadq33_correct(e.target.Readalue)
}
const [Readq34Name, setReadq34Name] = useState("")
const [Readq34_a, setReadq34_a] = useState("")
const [Readq34_b, setReadq34_b] = useState("")
const [Readq34_c, setReadq34_c] = useState("")
const [Readq34_d, setReadq34_d] = useState("")
const [Readq34_e, setReadq34_e] = useState("")
const [Readq34_correct, setReadq34_correct] = useState("")
const handleReadq34_NameChange = e => {
    setReadq34Name(e.target.Readalue)
}
const handleReadq34_aChange = e => {
    setReadq34_a(e.target.Readalue)
}
const handleReadq34_bChange = e => {
    setReadq34_b(e.target.Readalue)
}
const handleReadq34_cChange = e => {
    setReadq34_c(e.target.Readalue)
}
const handleReadq34_dChange = e => {
    setReadq34_d(e.target.Readalue)
}
const handleReadq34_eChange = e => {
    setReadq34_e(e.target.Readalue)
}
const handleReadq34_correctChange = e => {
    setReadq34_correct(e.target.Readalue)
}
const [Readq35Name, setReadq35Name] = useState("")
const [Readq35_a, setReadq35_a] = useState("")
const [Readq35_b, setReadq35_b] = useState("")
const [Readq35_c, setReadq35_c] = useState("")
const [Readq35_d, setReadq35_d] = useState("")
const [Readq35_e, setReadq35_e] = useState("")
const [Readq35_correct, setReadq35_correct] = useState("")
const handleReadq35_NameChange = e => {
    setReadq35Name(e.target.Readalue)
}
const handleReadq35_aChange = e => {
    setReadq35_a(e.target.Readalue)
}
const handleReadq35_bChange = e => {
    setReadq35_b(e.target.Readalue)
}
const handleReadq35_cChange = e => {
    setReadq35_c(e.target.Readalue)
}
const handleReadq35_dChange = e => {
    setReadq35_d(e.target.Readalue)
}
const handleReadq35_eChange = e => {
    setReadq35_e(e.target.Readalue)
}
const handleReadq35_correctChange = e => {
    setReadq35_correct(e.target.Readalue)
}
const [Readq36Name, setReadq36Name] = useState("")
const [Readq36_a, setReadq36_a] = useState("")
const [Readq36_b, setReadq36_b] = useState("")
const [Readq36_c, setReadq36_c] = useState("")
const [Readq36_d, setReadq36_d] = useState("")
const [Readq36_e, setReadq36_e] = useState("")
const [Readq36_correct, setReadq36_correct] = useState("")
const handleReadq36_NameChange = e => {
    setReadq36Name(e.target.Readalue)
}
const handleReadq36_aChange = e => {
    setReadq36_a(e.target.Readalue)
}
const handleReadq36_bChange = e => {
    setReadq36_b(e.target.Readalue)
}
const handleReadq36_cChange = e => {
    setReadq36_c(e.target.Readalue)
}
const handleReadq36_dChange = e => {
    setReadq36_d(e.target.Readalue)
}
const handleReadq36_eChange = e => {
    setReadq36_e(e.target.Readalue)
}
const handleReadq36_correctChange = e => {
    setReadq36_correct(e.target.Readalue)
}

const [Readq37Name, setReadq37Name] = useState("")
const [Readq37_a, setReadq37_a] = useState("")
const [Readq37_b, setReadq37_b] = useState("")
const [Readq37_c, setReadq37_c] = useState("")
const [Readq37_d, setReadq37_d] = useState("")
const [Readq37_e, setReadq37_e] = useState("")
const [Readq37_correct, setReadq37_correct] = useState("")
const handleReadq37_NameChange = e => {
    setReadq37Name(e.target.Readalue)
}
const handleReadq37_aChange = e => {
    setReadq37_a(e.target.Readalue)
}
const handleReadq37_bChange = e => {
    setReadq37_b(e.target.Readalue)
}
const handleReadq37_cChange = e => {
    setReadq37_c(e.target.Readalue)
}
const handleReadq37_dChange = e => {
    setReadq37_d(e.target.Readalue)
}
const handleReadq37_eChange = e => {
    setReadq37_e(e.target.Readalue)
}
const handleReadq37_correctChange = e => {
    setReadq37_correct(e.target.Readalue)
}
const [Readq38Name, setReadq38Name] = useState("")
const [Readq38_a, setReadq38_a] = useState("")
const [Readq38_b, setReadq38_b] = useState("")
const [Readq38_c, setReadq38_c] = useState("")
const [Readq38_d, setReadq38_d] = useState("")
const [Readq38_e, setReadq38_e] = useState("")
const [Readq38_correct, setReadq38_correct] = useState("")
const handleReadq38_NameChange = e => {
    setReadq38Name(e.target.Readalue)
}
const handleReadq38_aChange = e => {
    setReadq38_a(e.target.Readalue)
}
const handleReadq38_bChange = e => {
    setReadq38_b(e.target.Readalue)
}
const handleReadq38_cChange = e => {
    setReadq38_c(e.target.Readalue)
}
const handleReadq38_dChange = e => {
    setReadq38_d(e.target.Readalue)
}
const handleReadq38_eChange = e => {
    setReadq38_e(e.target.Readalue)
}
const handleReadq38_correctChange = e => {
    setReadq38_correct(e.target.Readalue)
}
const [Readq39Name, setReadq39Name] = useState("")
const [Readq39_a, setReadq39_a] = useState("")
const [Readq39_b, setReadq39_b] = useState("")
const [Readq39_c, setReadq39_c] = useState("")
const [Readq39_d, setReadq39_d] = useState("")
const [Readq39_e, setReadq39_e] = useState("")
const [Readq39_correct, setReadq39_correct] = useState("")
const handleReadq39_NameChange = e => {
    setReadq39Name(e.target.Readalue)
}
const handleReadq39_aChange = e => {
    setReadq39_a(e.target.Readalue)
}
const handleReadq39_bChange = e => {
    setReadq39_b(e.target.Readalue)
}
const handleReadq39_cChange = e => {
    setReadq39_c(e.target.Readalue)
}
const handleReadq39_dChange = e => {
    setReadq39_d(e.target.Readalue)
}
const handleReadq39_eChange = e => {
    setReadq39_e(e.target.Readalue)
}
const handleReadq39_correctChange = e => {
    setReadq39_correct(e.target.Readalue)
}
const [Readq40Name, setReadq40Name] = useState("")
const [Readq40_a, setReadq40_a] = useState("")
const [Readq40_b, setReadq40_b] = useState("")
const [Readq40_c, setReadq40_c] = useState("")
const [Readq40_d, setReadq40_d] = useState("")
const [Readq40_e, setReadq40_e] = useState("")
const [Readq40_correct, setReadq40_correct] = useState("")
const handleReadq40_NameChange = e => {
    setReadq40Name(e.target.Readalue)
}
const handleReadq40_aChange = e => {
    setReadq40_a(e.target.Readalue)
}
const handleReadq40_bChange = e => {
    setReadq40_b(e.target.Readalue)
}
const handleReadq40_cChange = e => {
    setReadq40_c(e.target.Readalue)
}
const handleReadq40_dChange = e => {
    setReadq40_d(e.target.Readalue)
}
const handleReadq40_eChange = e => {
    setReadq40_e(e.target.Readalue)
}
const handleReadq40_correctChange = e => {
    setReadq40_correct(e.target.Readalue)
}
const [Readq41Name, setReadq41Name] = useState("")
const [Readq41_a, setReadq41_a] = useState("")
const [Readq41_b, setReadq41_b] = useState("")
const [Readq41_c, setReadq41_c] = useState("")
const [Readq41_d, setReadq41_d] = useState("")
const [Readq41_e, setReadq41_e] = useState("")
const [Readq41_correct, setReadq41_correct] = useState("")
const handleReadq41_NameChange = e => {
    setReadq41Name(e.target.Readalue)
}
const handleReadq41_aChange = e => {
    setReadq41_a(e.target.Readalue)
}
const handleReadq41_bChange = e => {
    setReadq41_b(e.target.Readalue)
}
const handleReadq41_cChange = e => {
    setReadq41_c(e.target.Readalue)
}
const handleReadq41_dChange = e => {
    setReadq41_d(e.target.Readalue)
}
const handleReadq41_eChange = e => {
    setReadq41_e(e.target.Readalue)
}
const handleReadq41_correctChange = e => {
    setReadq41_correct(e.target.Readalue)
}
const [Readq42Name, setReadq42Name] = useState("")
const [Readq42_a, setReadq42_a] = useState("")
const [Readq42_b, setReadq42_b] = useState("")
const [Readq42_c, setReadq42_c] = useState("")
const [Readq42_d, setReadq42_d] = useState("")
const [Readq42_e, setReadq42_e] = useState("")
const [Readq42_correct, setReadq42_correct] = useState("")
const handleReadq42_NameChange = e => {
    setReadq42Name(e.target.Readalue)
}
const handleReadq42_aChange = e => {
    setReadq42_a(e.target.Readalue)
}
const handleReadq42_bChange = e => {
    setReadq42_b(e.target.Readalue)
}
const handleReadq42_cChange = e => {
    setReadq42_c(e.target.Readalue)
}
const handleReadq42_dChange = e => {
    setReadq42_d(e.target.Readalue)
}
const handleReadq42_eChange = e => {
    setReadq42_e(e.target.Readalue)
}
const handleReadq42_correctChange = e => {
    setReadq42_correct(e.target.Readalue)
}

const [Readq43Name, setReadq43Name] = useState("")
const [Readq43_a, setReadq43_a] = useState("")
const [Readq43_b, setReadq43_b] = useState("")
const [Readq43_c, setReadq43_c] = useState("")
const [Readq43_d, setReadq43_d] = useState("")
const [Readq43_e, setReadq43_e] = useState("")
const [Readq43_correct, setReadq43_correct] = useState("")
const handleReadq43_NameChange = e => {
    setReadq43Name(e.target.Readalue)
}
const handleReadq43_aChange = e => {
    setReadq43_a(e.target.Readalue)
}
const handleReadq43_bChange = e => {
    setReadq43_b(e.target.Readalue)
}
const handleReadq43_cChange = e => {
    setReadq43_c(e.target.Readalue)
}
const handleReadq43_dChange = e => {
    setReadq43_d(e.target.Readalue)
}
const handleReadq43_eChange = e => {
    setReadq43_e(e.target.Readalue)
}
const handleReadq43_correctChange = e => {
    setReadq43_correct(e.target.Readalue)
}
const [Readq44Name, setReadq44Name] = useState("")
const [Readq44_a, setReadq44_a] = useState("")
const [Readq44_b, setReadq44_b] = useState("")
const [Readq44_c, setReadq44_c] = useState("")
const [Readq44_d, setReadq44_d] = useState("")
const [Readq44_e, setReadq44_e] = useState("")
const [Readq44_correct, setReadq44_correct] = useState("")
const handleReadq44_NameChange = e => {
    setReadq44Name(e.target.Readalue)
}
const handleReadq44_aChange = e => {
    setReadq44_a(e.target.Readalue)
}
const handleReadq44_bChange = e => {
    setReadq44_b(e.target.Readalue)
}
const handleReadq44_cChange = e => {
    setReadq44_c(e.target.Readalue)
}
const handleReadq44_dChange = e => {
    setReadq44_d(e.target.Readalue)
}
const handleReadq44_eChange = e => {
    setReadq44_e(e.target.Readalue)
}
const handleReadq44_correctChange = e => {
    setReadq44_correct(e.target.Readalue)
}
const [Readq45Name, setReadq45Name] = useState("")
const [Readq45_a, setReadq45_a] = useState("")
const [Readq45_b, setReadq45_b] = useState("")
const [Readq45_c, setReadq45_c] = useState("")
const [Readq45_d, setReadq45_d] = useState("")
const [Readq45_e, setReadq45_e] = useState("")
const [Readq45_correct, setReadq45_correct] = useState("")
const handleReadq45_NameChange = e => {
    setReadq45Name(e.target.Readalue)
}
const handleReadq45_aChange = e => {
    setReadq45_a(e.target.Readalue)
}
const handleReadq45_bChange = e => {
    setReadq45_b(e.target.Readalue)
}
const handleReadq45_cChange = e => {
    setReadq45_c(e.target.Readalue)
}
const handleReadq45_dChange = e => {
    setReadq45_d(e.target.Readalue)
}
const handleReadq45_eChange = e => {
    setReadq45_e(e.target.Readalue)
}
const handleReadq45_correctChange = e => {
    setReadq45_correct(e.target.Readalue)
}
const [Readq46Name, setReadq46Name] = useState("")
const [Readq46_a, setReadq46_a] = useState("")
const [Readq46_b, setReadq46_b] = useState("")
const [Readq46_c, setReadq46_c] = useState("")
const [Readq46_d, setReadq46_d] = useState("")
const [Readq46_e, setReadq46_e] = useState("")
const [Readq46_correct, setReadq46_correct] = useState("")
const handleReadq46_NameChange = e => {
    setReadq46Name(e.target.Readalue)
}
const handleReadq46_aChange = e => {
    setReadq46_a(e.target.Readalue)
}
const handleReadq46_bChange = e => {
    setReadq46_b(e.target.Readalue)
}
const handleReadq46_cChange = e => {
    setReadq46_c(e.target.Readalue)
}
const handleReadq46_dChange = e => {
    setReadq46_d(e.target.Readalue)
}
const handleReadq46_eChange = e => {
    setReadq46_e(e.target.Readalue)
}
const handleReadq46_correctChange = e => {
    setReadq46_correct(e.target.Readalue)
}
const [Readq47Name, setReadq47Name] = useState("")
const [Readq47_a, setReadq47_a] = useState("")
const [Readq47_b, setReadq47_b] = useState("")
const [Readq47_c, setReadq47_c] = useState("")
const [Readq47_d, setReadq47_d] = useState("")
const [Readq47_e, setReadq47_e] = useState("")
const [Readq47_correct, setReadq47_correct] = useState("")
const handleReadq47_NameChange = e => {
    setReadq47Name(e.target.Readalue)
}
const handleReadq47_aChange = e => {
    setReadq47_a(e.target.Readalue)
}
const handleReadq47_bChange = e => {
    setReadq47_b(e.target.Readalue)
}
const handleReadq47_cChange = e => {
    setReadq47_c(e.target.Readalue)
}
const handleReadq47_dChange = e => {
    setReadq47_d(e.target.Readalue)
}
const handleReadq47_eChange = e => {
    setReadq47_e(e.target.Readalue)
}
const handleReadq47_correctChange = e => {
    setReadq47_correct(e.target.Readalue)
}
const [Readq48Name, setReadq48Name] = useState("")
const [Readq48_a, setReadq48_a] = useState("")
const [Readq48_b, setReadq48_b] = useState("")
const [Readq48_c, setReadq48_c] = useState("")
const [Readq48_d, setReadq48_d] = useState("")
const [Readq48_e, setReadq48_e] = useState("")
const [Readq48_correct, setReadq48_correct] = useState("")
const handleReadq48_NameChange = e => {
    setReadq48Name(e.target.Readalue)
}
const handleReadq48_aChange = e => {
    setReadq48_a(e.target.Readalue)
}
const handleReadq48_bChange = e => {
    setReadq48_b(e.target.Readalue)
}
const handleReadq48_cChange = e => {
    setReadq48_c(e.target.Readalue)
}
const handleReadq48_dChange = e => {
    setReadq48_d(e.target.Readalue)
}
const handleReadq48_eChange = e => {
    setReadq48_e(e.target.Readalue)
}
const handleReadq48_correctChange = e => {
    setReadq48_correct(e.target.Readalue)
}

    // Verbal
    const [Vq1Name, setVq1Name] = useState("")
    const [Vq1_a, setVq1_a] = useState("")
    const [Vq1_b, setVq1_b] = useState("")
    const [Vq1_c, setVq1_c] = useState("")
    const [Vq1_d, setVq1_d] = useState("")
    const [Vq1_e, setVq1_e] = useState("")
    const [Vq1_correct, setVq1_correct] = useState("")
    const handleVq1_NameChange = e => {
        setVq1Name(e.target.value)
    }
    const handleVq1_aChange = e => {
        setVq1_a(e.target.value)
    }
    const handleVq1_bChange = e => {
        setVq1_b(e.target.value)
    }
    const handleVq1_cChange = e => {
        setVq1_c(e.target.value)
    }
    const handleVq1_dChange = e => {
        setVq1_d(e.target.value)
    }
    const handleVq1_eChange = e => {
        setVq1_e(e.target.value)
    }
    const handleVq1_correctChange = e => {
        setVq1_correct(e.target.value)
    }
    const [Vq2Name, setVq2Name] = useState("")
    const [Vq2_a, setVq2_a] = useState("")
    const [Vq2_b, setVq2_b] = useState("")
    const [Vq2_c, setVq2_c] = useState("")
    const [Vq2_d, setVq2_d] = useState("")
    const [Vq2_e, setVq2_e] = useState("")
    const [Vq2_correct, setVq2_correct] = useState("")
    const handleVq2_NameChange = e => {
        setVq2Name(e.target.value)
    }
    const handleVq2_aChange = e => {
        setVq2_a(e.target.value)
    }
    const handleVq2_bChange = e => {
        setVq2_b(e.target.value)
    }
    const handleVq2_cChange = e => {
        setVq2_c(e.target.value)
    }
    const handleVq2_dChange = e => {
        setVq2_d(e.target.value)
    }
    const handleVq2_eChange = e => {
        setVq2_e(e.target.value)
    }
    const handleVq2_correctChange = e => {
        setVq2_correct(e.target.value)
    }
    const [Vq3Name, setVq3Name] = useState("")
    const [Vq3_a, setVq3_a] = useState("")
    const [Vq3_b, setVq3_b] = useState("")
    const [Vq3_c, setVq3_c] = useState("")
    const [Vq3_d, setVq3_d] = useState("")
    const [Vq3_e, setVq3_e] = useState("")
    const [Vq3_correct, setVq3_correct] = useState("")
    const handleVq3_NameChange = e => {
        setVq3Name(e.target.value)
    }
    const handleVq3_aChange = e => {
        setVq3_a(e.target.value)
    }
    const handleVq3_bChange = e => {
        setVq3_b(e.target.value)
    }
    const handleVq3_cChange = e => {
        setVq3_c(e.target.value)
    }
    const handleVq3_dChange = e => {
        setVq3_d(e.target.value)
    }
    const handleVq3_eChange = e => {
        setVq3_e(e.target.value)
    }
    const handleVq3_correctChange = e => {
        setVq3_correct(e.target.value)
    }
    const [Vq4Name, setVq4Name] = useState("")
    const [Vq4_a, setVq4_a] = useState("")
    const [Vq4_b, setVq4_b] = useState("")
    const [Vq4_c, setVq4_c] = useState("")
    const [Vq4_d, setVq4_d] = useState("")
    const [Vq4_e, setVq4_e] = useState("")
    const [Vq4_correct, setVq4_correct] = useState("")
    const handleVq4_NameChange = e => {
        setVq4Name(e.target.value)
    }
    const handleVq4_aChange = e => {
        setVq4_a(e.target.value)
    }
    const handleVq4_bChange = e => {
        setVq4_b(e.target.value)
    }
    const handleVq4_cChange = e => {
        setVq4_c(e.target.value)
    }
    const handleVq4_dChange = e => {
        setVq4_d(e.target.value)
    }
    const handleVq4_eChange = e => {
        setVq4_e(e.target.value)
    }
    const handleVq4_correctChange = e => {
        setVq4_correct(e.target.value)
    }
    const [Vq5Name, setVq5Name] = useState("")
    const [Vq5_a, setVq5_a] = useState("")
    const [Vq5_b, setVq5_b] = useState("")
    const [Vq5_c, setVq5_c] = useState("")
    const [Vq5_d, setVq5_d] = useState("")
    const [Vq5_e, setVq5_e] = useState("")
    const [Vq5_correct, setVq5_correct] = useState("")
    const handleVq5_NameChange = e => {
        setVq5Name(e.target.value)
    }
    const handleVq5_aChange = e => {
        setVq5_a(e.target.value)
    }
    const handleVq5_bChange = e => {
        setVq5_b(e.target.value)
    }
    const handleVq5_cChange = e => {
        setVq5_c(e.target.value)
    }
    const handleVq5_dChange = e => {
        setVq5_d(e.target.value)
    }
    const handleVq5_eChange = e => {
        setVq5_e(e.target.value)
    }
    const handleVq5_correctChange = e => {
        setVq5_correct(e.target.value)
    }
    const [Vq6Name, setVq6Name] = useState("")
    const [Vq6_a, setVq6_a] = useState("")
    const [Vq6_b, setVq6_b] = useState("")
    const [Vq6_c, setVq6_c] = useState("")
    const [Vq6_d, setVq6_d] = useState("")
    const [Vq6_e, setVq6_e] = useState("")
    const [Vq6_correct, setVq6_correct] = useState("")
    const handleVq6_NameChange = e => {
        setVq6Name(e.target.value)
    }
    const handleVq6_aChange = e => {
        setVq6_a(e.target.value)
    }
    const handleVq6_bChange = e => {
        setVq6_b(e.target.value)
    }
    const handleVq6_cChange = e => {
        setVq6_c(e.target.value)
    }
    const handleVq6_dChange = e => {
        setVq6_d(e.target.value)
    }
    const handleVq6_eChange = e => {
        setVq6_e(e.target.value)
    }
    const handleVq6_correctChange = e => {
        setVq6_correct(e.target.value)
    }

    const [Vq7Name, setVq7Name] = useState("")
    const [Vq7_a, setVq7_a] = useState("")
    const [Vq7_b, setVq7_b] = useState("")
    const [Vq7_c, setVq7_c] = useState("")
    const [Vq7_d, setVq7_d] = useState("")
    const [Vq7_e, setVq7_e] = useState("")
    const [Vq7_correct, setVq7_correct] = useState("")
    const handleVq7_NameChange = e => {
        setVq7Name(e.target.value)
    }
    const handleVq7_aChange = e => {
        setVq7_a(e.target.value)
    }
    const handleVq7_bChange = e => {
        setVq7_b(e.target.value)
    }
    const handleVq7_cChange = e => {
        setVq7_c(e.target.value)
    }
    const handleVq7_dChange = e => {
        setVq7_d(e.target.value)
    }
    const handleVq7_eChange = e => {
        setVq7_e(e.target.value)
    }
    const handleVq7_correctChange = e => {
        setVq7_correct(e.target.value)
    }
    const [Vq8Name, setVq8Name] = useState("")
    const [Vq8_a, setVq8_a] = useState("")
    const [Vq8_b, setVq8_b] = useState("")
    const [Vq8_c, setVq8_c] = useState("")
    const [Vq8_d, setVq8_d] = useState("")
    const [Vq8_e, setVq8_e] = useState("")
    const [Vq8_correct, setVq8_correct] = useState("")
    const handleVq8_NameChange = e => {
        setVq8Name(e.target.value)
    }
    const handleVq8_aChange = e => {
        setVq8_a(e.target.value)
    }
    const handleVq8_bChange = e => {
        setVq8_b(e.target.value)
    }
    const handleVq8_cChange = e => {
        setVq8_c(e.target.value)
    }
    const handleVq8_dChange = e => {
        setVq8_d(e.target.value)
    }
    const handleVq8_eChange = e => {
        setVq8_e(e.target.value)
    }
    const handleVq8_correctChange = e => {
        setVq8_correct(e.target.value)
    }
    const [Vq9Name, setVq9Name] = useState("")
    const [Vq9_a, setVq9_a] = useState("")
    const [Vq9_b, setVq9_b] = useState("")
    const [Vq9_c, setVq9_c] = useState("")
    const [Vq9_d, setVq9_d] = useState("")
    const [Vq9_e, setVq9_e] = useState("")
    const [Vq9_correct, setVq9_correct] = useState("")
    const handleVq9_NameChange = e => {
        setVq9Name(e.target.value)
    }
    const handleVq9_aChange = e => {
        setVq9_a(e.target.value)
    }
    const handleVq9_bChange = e => {
        setVq9_b(e.target.value)
    }
    const handleVq9_cChange = e => {
        setVq9_c(e.target.value)
    }
    const handleVq9_dChange = e => {
        setVq9_d(e.target.value)
    }
    const handleVq9_eChange = e => {
        setVq9_e(e.target.value)
    }
    const handleVq9_correctChange = e => {
        setVq9_correct(e.target.value)
    }
    const [Vq10Name, setVq10Name] = useState("")
    const [Vq10_a, setVq10_a] = useState("")
    const [Vq10_b, setVq10_b] = useState("")
    const [Vq10_c, setVq10_c] = useState("")
    const [Vq10_d, setVq10_d] = useState("")
    const [Vq10_e, setVq10_e] = useState("")
    const [Vq10_correct, setVq10_correct] = useState("")
    const handleVq10_NameChange = e => {
        setVq10Name(e.target.value)
    }
    const handleVq10_aChange = e => {
        setVq10_a(e.target.value)
    }
    const handleVq10_bChange = e => {
        setVq10_b(e.target.value)
    }
    const handleVq10_cChange = e => {
        setVq10_c(e.target.value)
    }
    const handleVq10_dChange = e => {
        setVq10_d(e.target.value)
    }
    const handleVq10_eChange = e => {
        setVq10_e(e.target.value)
    }
    const handleVq10_correctChange = e => {
        setVq10_correct(e.target.value)
    }
    const [Vq11Name, setVq11Name] = useState("")
    const [Vq11_a, setVq11_a] = useState("")
    const [Vq11_b, setVq11_b] = useState("")
    const [Vq11_c, setVq11_c] = useState("")
    const [Vq11_d, setVq11_d] = useState("")
    const [Vq11_e, setVq11_e] = useState("")
    const [Vq11_correct, setVq11_correct] = useState("")
    const handleVq11_NameChange = e => {
        setVq11Name(e.target.value)
    }
    const handleVq11_aChange = e => {
        setVq11_a(e.target.value)
    }
    const handleVq11_bChange = e => {
        setVq11_b(e.target.value)
    }
    const handleVq11_cChange = e => {
        setVq11_c(e.target.value)
    }
    const handleVq11_dChange = e => {
        setVq11_d(e.target.value)
    }
    const handleVq11_eChange = e => {
        setVq11_e(e.target.value)
    }
    const handleVq11_correctChange = e => {
        setVq11_correct(e.target.value)
    }
    const [Vq12Name, setVq12Name] = useState("")
    const [Vq12_a, setVq12_a] = useState("")
    const [Vq12_b, setVq12_b] = useState("")
    const [Vq12_c, setVq12_c] = useState("")
    const [Vq12_d, setVq12_d] = useState("")
    const [Vq12_e, setVq12_e] = useState("")
    const [Vq12_correct, setVq12_correct] = useState("")
    const handleVq12_NameChange = e => {
        setVq12Name(e.target.value)
    }
    const handleVq12_aChange = e => {
        setVq12_a(e.target.value)
    }
    const handleVq12_bChange = e => {
        setVq12_b(e.target.value)
    }
    const handleVq12_cChange = e => {
        setVq12_c(e.target.value)
    }
    const handleVq12_dChange = e => {
        setVq12_d(e.target.value)
    }
    const handleVq12_eChange = e => {
        setVq12_e(e.target.value)
    }
    const handleVq12_correctChange = e => {
        setVq12_correct(e.target.value)
    }

    const [Vq13Name, setVq13Name] = useState("")
    const [Vq13_a, setVq13_a] = useState("")
    const [Vq13_b, setVq13_b] = useState("")
    const [Vq13_c, setVq13_c] = useState("")
    const [Vq13_d, setVq13_d] = useState("")
    const [Vq13_e, setVq13_e] = useState("")
    const [Vq13_correct, setVq13_correct] = useState("")
    const handleVq13_NameChange = e => {
        setVq13Name(e.target.value)
    }
    const handleVq13_aChange = e => {
        setVq13_a(e.target.value)
    }
    const handleVq13_bChange = e => {
        setVq13_b(e.target.value)
    }
    const handleVq13_cChange = e => {
        setVq13_c(e.target.value)
    }
    const handleVq13_dChange = e => {
        setVq13_d(e.target.value)
    }
    const handleVq13_eChange = e => {
        setVq13_e(e.target.value)
    }
    const handleVq13_correctChange = e => {
        setVq13_correct(e.target.value)
    }
    const [Vq14Name, setVq14Name] = useState("")
    const [Vq14_a, setVq14_a] = useState("")
    const [Vq14_b, setVq14_b] = useState("")
    const [Vq14_c, setVq14_c] = useState("")
    const [Vq14_d, setVq14_d] = useState("")
    const [Vq14_e, setVq14_e] = useState("")
    const [Vq14_correct, setVq14_correct] = useState("")
    const handleVq14_NameChange = e => {
        setVq14Name(e.target.value)
    }
    const handleVq14_aChange = e => {
        setVq14_a(e.target.value)
    }
    const handleVq14_bChange = e => {
        setVq14_b(e.target.value)
    }
    const handleVq14_cChange = e => {
        setVq14_c(e.target.value)
    }
    const handleVq14_dChange = e => {
        setVq14_d(e.target.value)
    }
    const handleVq14_eChange = e => {
        setVq14_e(e.target.value)
    }
    const handleVq14_correctChange = e => {
        setVq14_correct(e.target.value)
    }
    const [Vq15Name, setVq15Name] = useState("")
    const [Vq15_a, setVq15_a] = useState("")
    const [Vq15_b, setVq15_b] = useState("")
    const [Vq15_c, setVq15_c] = useState("")
    const [Vq15_d, setVq15_d] = useState("")
    const [Vq15_e, setVq15_e] = useState("")
    const [Vq15_correct, setVq15_correct] = useState("")
    const handleVq15_NameChange = e => {
        setVq15Name(e.target.value)
    }
    const handleVq15_aChange = e => {
        setVq15_a(e.target.value)
    }
    const handleVq15_bChange = e => {
        setVq15_b(e.target.value)
    }
    const handleVq15_cChange = e => {
        setVq15_c(e.target.value)
    }
    const handleVq15_dChange = e => {
        setVq15_d(e.target.value)
    }
    const handleVq15_eChange = e => {
        setVq15_e(e.target.value)
    }
    const handleVq15_correctChange = e => {
        setVq15_correct(e.target.value)
    }
    const [Vq16Name, setVq16Name] = useState("")
    const [Vq16_a, setVq16_a] = useState("")
    const [Vq16_b, setVq16_b] = useState("")
    const [Vq16_c, setVq16_c] = useState("")
    const [Vq16_d, setVq16_d] = useState("")
    const [Vq16_e, setVq16_e] = useState("")
    const [Vq16_correct, setVq16_correct] = useState("")
    const handleVq16_NameChange = e => {
        setVq16Name(e.target.value)
    }
    const handleVq16_aChange = e => {
        setVq16_a(e.target.value)
    }
    const handleVq16_bChange = e => {
        setVq16_b(e.target.value)
    }
    const handleVq16_cChange = e => {
        setVq16_c(e.target.value)
    }
    const handleVq16_dChange = e => {
        setVq16_d(e.target.value)
    }
    const handleVq16_eChange = e => {
        setVq16_e(e.target.value)
    }
    const handleVq16_correctChange = e => {
        setVq16_correct(e.target.value)
    }
    const [Vq17Name, setVq17Name] = useState("")
    const [Vq17_a, setVq17_a] = useState("")
    const [Vq17_b, setVq17_b] = useState("")
    const [Vq17_c, setVq17_c] = useState("")
    const [Vq17_d, setVq17_d] = useState("")
    const [Vq17_e, setVq17_e] = useState("")
    const [Vq17_correct, setVq17_correct] = useState("")
    const handleVq17_NameChange = e => {
        setVq17Name(e.target.value)
    }
    const handleVq17_aChange = e => {
        setVq17_a(e.target.value)
    }
    const handleVq17_bChange = e => {
        setVq17_b(e.target.value)
    }
    const handleVq17_cChange = e => {
        setVq17_c(e.target.value)
    }
    const handleVq17_dChange = e => {
        setVq17_d(e.target.value)
    }
    const handleVq17_eChange = e => {
        setVq17_e(e.target.value)
    }
    const handleVq17_correctChange = e => {
        setVq17_correct(e.target.value)
    }
    const [Vq18Name, setVq18Name] = useState("")
    const [Vq18_a, setVq18_a] = useState("")
    const [Vq18_b, setVq18_b] = useState("")
    const [Vq18_c, setVq18_c] = useState("")
    const [Vq18_d, setVq18_d] = useState("")
    const [Vq18_e, setVq18_e] = useState("")
    const [Vq18_correct, setVq18_correct] = useState("")
    const handleVq18_NameChange = e => {
        setVq18Name(e.target.value)
    }
    const handleVq18_aChange = e => {
        setVq18_a(e.target.value)
    }
    const handleVq18_bChange = e => {
        setVq18_b(e.target.value)
    }
    const handleVq18_cChange = e => {
        setVq18_c(e.target.value)
    }
    const handleVq18_dChange = e => {
        setVq18_d(e.target.value)
    }
    const handleVq18_eChange = e => {
        setVq18_e(e.target.value)
    }
    const handleVq18_correctChange = e => {
        setVq18_correct(e.target.value)
    }

    const [Vq19Name, setVq19Name] = useState("")
    const [Vq19_a, setVq19_a] = useState("")
    const [Vq19_b, setVq19_b] = useState("")
    const [Vq19_c, setVq19_c] = useState("")
    const [Vq19_d, setVq19_d] = useState("")
    const [Vq19_e, setVq19_e] = useState("")
    const [Vq19_correct, setVq19_correct] = useState("")
    const handleVq19_NameChange = e => {
        setVq19Name(e.target.value)
    }
    const handleVq19_aChange = e => {
        setVq19_a(e.target.value)
    }
    const handleVq19_bChange = e => {
        setVq19_b(e.target.value)
    }
    const handleVq19_cChange = e => {
        setVq19_c(e.target.value)
    }
    const handleVq19_dChange = e => {
        setVq19_d(e.target.value)
    }
    const handleVq19_eChange = e => {
        setVq19_e(e.target.value)
    }
    const handleVq19_correctChange = e => {
        setVq19_correct(e.target.value)
    }
    const [Vq20Name, setVq20Name] = useState("")
    const [Vq20_a, setVq20_a] = useState("")
    const [Vq20_b, setVq20_b] = useState("")
    const [Vq20_c, setVq20_c] = useState("")
    const [Vq20_d, setVq20_d] = useState("")
    const [Vq20_e, setVq20_e] = useState("")
    const [Vq20_correct, setVq20_correct] = useState("")
    const handleVq20_NameChange = e => {
        setVq20Name(e.target.value)
    }
    const handleVq20_aChange = e => {
        setVq20_a(e.target.value)
    }
    const handleVq20_bChange = e => {
        setVq20_b(e.target.value)
    }
    const handleVq20_cChange = e => {
        setVq20_c(e.target.value)
    }
    const handleVq20_dChange = e => {
        setVq20_d(e.target.value)
    }
    const handleVq20_eChange = e => {
        setVq20_e(e.target.value)
    }
    const handleVq20_correctChange = e => {
        setVq20_correct(e.target.value)
    }
    const [Vq21Name, setVq21Name] = useState("")
    const [Vq21_a, setVq21_a] = useState("")
    const [Vq21_b, setVq21_b] = useState("")
    const [Vq21_c, setVq21_c] = useState("")
    const [Vq21_d, setVq21_d] = useState("")
    const [Vq21_e, setVq21_e] = useState("")
    const [Vq21_correct, setVq21_correct] = useState("")
    const handleVq21_NameChange = e => {
        setVq21Name(e.target.value)
    }
    const handleVq21_aChange = e => {
        setVq21_a(e.target.value)
    }
    const handleVq21_bChange = e => {
        setVq21_b(e.target.value)
    }
    const handleVq21_cChange = e => {
        setVq21_c(e.target.value)
    }
    const handleVq21_dChange = e => {
        setVq21_d(e.target.value)
    }
    const handleVq21_eChange = e => {
        setVq21_e(e.target.value)
    }
    const handleVq21_correctChange = e => {
        setVq21_correct(e.target.value)
    }
    const [Vq22Name, setVq22Name] = useState("")
    const [Vq22_a, setVq22_a] = useState("")
    const [Vq22_b, setVq22_b] = useState("")
    const [Vq22_c, setVq22_c] = useState("")
    const [Vq22_d, setVq22_d] = useState("")
    const [Vq22_e, setVq22_e] = useState("")
    const [Vq22_correct, setVq22_correct] = useState("")
    const handleVq22_NameChange = e => {
        setVq22Name(e.target.value)
    }
    const handleVq22_aChange = e => {
        setVq22_a(e.target.value)
    }
    const handleVq22_bChange = e => {
        setVq22_b(e.target.value)
    }
    const handleVq22_cChange = e => {
        setVq22_c(e.target.value)
    }
    const handleVq22_dChange = e => {
        setVq22_d(e.target.value)
    }
    const handleVq22_eChange = e => {
        setVq22_e(e.target.value)
    }
    const handleVq22_correctChange = e => {
        setVq22_correct(e.target.value)
    }
    const [Vq23Name, setVq23Name] = useState("")
    const [Vq23_a, setVq23_a] = useState("")
    const [Vq23_b, setVq23_b] = useState("")
    const [Vq23_c, setVq23_c] = useState("")
    const [Vq23_d, setVq23_d] = useState("")
    const [Vq23_e, setVq23_e] = useState("")
    const [Vq23_correct, setVq23_correct] = useState("")
    const handleVq23_NameChange = e => {
        setVq23Name(e.target.value)
    }
    const handleVq23_aChange = e => {
        setVq23_a(e.target.value)
    }
    const handleVq23_bChange = e => {
        setVq23_b(e.target.value)
    }
    const handleVq23_cChange = e => {
        setVq23_c(e.target.value)
    }
    const handleVq23_dChange = e => {
        setVq23_d(e.target.value)
    }
    const handleVq23_eChange = e => {
        setVq23_e(e.target.value)
    }
    const handleVq23_correctChange = e => {
        setVq23_correct(e.target.value)
    }
    const [Vq24Name, setVq24Name] = useState("")
    const [Vq24_a, setVq24_a] = useState("")
    const [Vq24_b, setVq24_b] = useState("")
    const [Vq24_c, setVq24_c] = useState("")
    const [Vq24_d, setVq24_d] = useState("")
    const [Vq24_e, setVq24_e] = useState("")
    const [Vq24_correct, setVq24_correct] = useState("")
    const handleVq24_NameChange = e => {
        setVq24Name(e.target.value)
    }
    const handleVq24_aChange = e => {
        setVq24_a(e.target.value)
    }
    const handleVq24_bChange = e => {
        setVq24_b(e.target.value)
    }
    const handleVq24_cChange = e => {
        setVq24_c(e.target.value)
    }
    const handleVq24_dChange = e => {
        setVq24_d(e.target.value)
    }
    const handleVq24_eChange = e => {
        setVq24_e(e.target.value)
    }
    const handleVq24_correctChange = e => {
        setVq24_correct(e.target.value)
    }

    const [Vq25Name, setVq25Name] = useState("")
    const [Vq25_a, setVq25_a] = useState("")
    const [Vq25_b, setVq25_b] = useState("")
    const [Vq25_c, setVq25_c] = useState("")
    const [Vq25_d, setVq25_d] = useState("")
    const [Vq25_e, setVq25_e] = useState("")
    const [Vq25_correct, setVq25_correct] = useState("")
    const handleVq25_NameChange = e => {
        setVq25Name(e.target.value)
    }
    const handleVq25_aChange = e => {
        setVq25_a(e.target.value)
    }
    const handleVq25_bChange = e => {
        setVq25_b(e.target.value)
    }
    const handleVq25_cChange = e => {
        setVq25_c(e.target.value)
    }
    const handleVq25_dChange = e => {
        setVq25_d(e.target.value)
    }
    const handleVq25_eChange = e => {
        setVq25_e(e.target.value)
    }
    const handleVq25_correctChange = e => {
        setVq25_correct(e.target.value)
    }
    const [Vq26Name, setVq26Name] = useState("")
    const [Vq26_a, setVq26_a] = useState("")
    const [Vq26_b, setVq26_b] = useState("")
    const [Vq26_c, setVq26_c] = useState("")
    const [Vq26_d, setVq26_d] = useState("")
    const [Vq26_e, setVq26_e] = useState("")
    const [Vq26_correct, setVq26_correct] = useState("")
    const handleVq26_NameChange = e => {
        setVq26Name(e.target.value)
    }
    const handleVq26_aChange = e => {
        setVq26_a(e.target.value)
    }
    const handleVq26_bChange = e => {
        setVq26_b(e.target.value)
    }
    const handleVq26_cChange = e => {
        setVq26_c(e.target.value)
    }
    const handleVq26_dChange = e => {
        setVq26_d(e.target.value)
    }
    const handleVq26_eChange = e => {
        setVq26_e(e.target.value)
    }
    const handleVq26_correctChange = e => {
        setVq26_correct(e.target.value)
    }
    const [Vq27Name, setVq27Name] = useState("")
    const [Vq27_a, setVq27_a] = useState("")
    const [Vq27_b, setVq27_b] = useState("")
    const [Vq27_c, setVq27_c] = useState("")
    const [Vq27_d, setVq27_d] = useState("")
    const [Vq27_e, setVq27_e] = useState("")
    const [Vq27_correct, setVq27_correct] = useState("")
    const handleVq27_NameChange = e => {
        setVq27Name(e.target.value)
    }
    const handleVq27_aChange = e => {
        setVq27_a(e.target.value)
    }
    const handleVq27_bChange = e => {
        setVq27_b(e.target.value)
    }
    const handleVq27_cChange = e => {
        setVq27_c(e.target.value)
    }
    const handleVq27_dChange = e => {
        setVq27_d(e.target.value)
    }
    const handleVq27_eChange = e => {
        setVq27_e(e.target.value)
    }
    const handleVq27_correctChange = e => {
        setVq27_correct(e.target.value)
    }
    const [Vq28Name, setVq28Name] = useState("")
    const [Vq28_a, setVq28_a] = useState("")
    const [Vq28_b, setVq28_b] = useState("")
    const [Vq28_c, setVq28_c] = useState("")
    const [Vq28_d, setVq28_d] = useState("")
    const [Vq28_e, setVq28_e] = useState("")
    const [Vq28_correct, setVq28_correct] = useState("")
    const handleVq28_NameChange = e => {
        setVq28Name(e.target.value)
    }
    const handleVq28_aChange = e => {
        setVq28_a(e.target.value)
    }
    const handleVq28_bChange = e => {
        setVq28_b(e.target.value)
    }
    const handleVq28_cChange = e => {
        setVq28_c(e.target.value)
    }
    const handleVq28_dChange = e => {
        setVq28_d(e.target.value)
    }
    const handleVq28_eChange = e => {
        setVq28_e(e.target.value)
    }
    const handleVq28_correctChange = e => {
        setVq28_correct(e.target.value)
    }
    const [Vq29Name, setVq29Name] = useState("")
    const [Vq29_a, setVq29_a] = useState("")
    const [Vq29_b, setVq29_b] = useState("")
    const [Vq29_c, setVq29_c] = useState("")
    const [Vq29_d, setVq29_d] = useState("")
    const [Vq29_e, setVq29_e] = useState("")
    const [Vq29_correct, setVq29_correct] = useState("")
    const handleVq29_NameChange = e => {
        setVq29Name(e.target.value)
    }
    const handleVq29_aChange = e => {
        setVq29_a(e.target.value)
    }
    const handleVq29_bChange = e => {
        setVq29_b(e.target.value)
    }
    const handleVq29_cChange = e => {
        setVq29_c(e.target.value)
    }
    const handleVq29_dChange = e => {
        setVq29_d(e.target.value)
    }
    const handleVq29_eChange = e => {
        setVq29_e(e.target.value)
    }
    const handleVq29_correctChange = e => {
        setVq29_correct(e.target.value)
    }
    const [Vq30Name, setVq30Name] = useState("")
    const [Vq30_a, setVq30_a] = useState("")
    const [Vq30_b, setVq30_b] = useState("")
    const [Vq30_c, setVq30_c] = useState("")
    const [Vq30_d, setVq30_d] = useState("")
    const [Vq30_e, setVq30_e] = useState("")
    const [Vq30_correct, setVq30_correct] = useState("")
    const handleVq30_NameChange = e => {
        setVq30Name(e.target.value)
    }
    const handleVq30_aChange = e => {
        setVq30_a(e.target.value)
    }
    const handleVq30_bChange = e => {
        setVq30_b(e.target.value)
    }
    const handleVq30_cChange = e => {
        setVq30_c(e.target.value)
    }
    const handleVq30_dChange = e => {
        setVq30_d(e.target.value)
    }
    const handleVq30_eChange = e => {
        setVq30_e(e.target.value)
    }
    const handleVq30_correctChange = e => {
        setVq30_correct(e.target.value)
    }
    const [Vq31Name, setVq31Name] = useState("")
    const [Vq31_a, setVq31_a] = useState("")
    const [Vq31_b, setVq31_b] = useState("")
    const [Vq31_c, setVq31_c] = useState("")
    const [Vq31_d, setVq31_d] = useState("")
    const [Vq31_e, setVq31_e] = useState("")
    const [Vq31_correct, setVq31_correct] = useState("")
    const handleVq31_NameChange = e => {
        setVq31Name(e.target.value)
    }
    const handleVq31_aChange = e => {
        setVq31_a(e.target.value)
    }
    const handleVq31_bChange = e => {
        setVq31_b(e.target.value)
    }
    const handleVq31_cChange = e => {
        setVq31_c(e.target.value)
    }
    const handleVq31_dChange = e => {
        setVq31_d(e.target.value)
    }
    const handleVq31_eChange = e => {
        setVq31_e(e.target.value)
    }
    const handleVq31_correctChange = e => {
        setVq31_correct(e.target.value)
    }
    const [Vq32Name, setVq32Name] = useState("")
    const [Vq32_a, setVq32_a] = useState("")
    const [Vq32_b, setVq32_b] = useState("")
    const [Vq32_c, setVq32_c] = useState("")
    const [Vq32_d, setVq32_d] = useState("")
    const [Vq32_e, setVq32_e] = useState("")
    const [Vq32_correct, setVq32_correct] = useState("")
    const handleVq32_NameChange = e => {
        setVq32Name(e.target.value)
    }
    const handleVq32_aChange = e => {
        setVq32_a(e.target.value)
    }
    const handleVq32_bChange = e => {
        setVq32_b(e.target.value)
    }
    const handleVq32_cChange = e => {
        setVq32_c(e.target.value)
    }
    const handleVq32_dChange = e => {
        setVq32_d(e.target.value)
    }
    const handleVq32_eChange = e => {
        setVq32_e(e.target.value)
    }
    const handleVq32_correctChange = e => {
        setVq32_correct(e.target.value)
    }
    const [Vq33Name, setVq33Name] = useState("")
    const [Vq33_a, setVq33_a] = useState("")
    const [Vq33_b, setVq33_b] = useState("")
    const [Vq33_c, setVq33_c] = useState("")
    const [Vq33_d, setVq33_d] = useState("")
    const [Vq33_e, setVq33_e] = useState("")
    const [Vq33_correct, setVq33_correct] = useState("")
    const handleVq33_NameChange = e => {
        setVq33Name(e.target.value)
    }
    const handleVq33_aChange = e => {
        setVq33_a(e.target.value)
    }
    const handleVq33_bChange = e => {
        setVq33_b(e.target.value)
    }
    const handleVq33_cChange = e => {
        setVq33_c(e.target.value)
    }
    const handleVq33_dChange = e => {
        setVq33_d(e.target.value)
    }
    const handleVq33_eChange = e => {
        setVq33_e(e.target.value)
    }
    const handleVq33_correctChange = e => {
        setVq33_correct(e.target.value)
    }
    const [Vq34Name, setVq34Name] = useState("")
    const [Vq34_a, setVq34_a] = useState("")
    const [Vq34_b, setVq34_b] = useState("")
    const [Vq34_c, setVq34_c] = useState("")
    const [Vq34_d, setVq34_d] = useState("")
    const [Vq34_e, setVq34_e] = useState("")
    const [Vq34_correct, setVq34_correct] = useState("")
    const handleVq34_NameChange = e => {
        setVq34Name(e.target.value)
    }
    const handleVq34_aChange = e => {
        setVq34_a(e.target.value)
    }
    const handleVq34_bChange = e => {
        setVq34_b(e.target.value)
    }
    const handleVq34_cChange = e => {
        setVq34_c(e.target.value)
    }
    const handleVq34_dChange = e => {
        setVq34_d(e.target.value)
    }
    const handleVq34_eChange = e => {
        setVq34_e(e.target.value)
    }
    const handleVq34_correctChange = e => {
        setVq34_correct(e.target.value)
    }
    const [Vq35Name, setVq35Name] = useState("")
    const [Vq35_a, setVq35_a] = useState("")
    const [Vq35_b, setVq35_b] = useState("")
    const [Vq35_c, setVq35_c] = useState("")
    const [Vq35_d, setVq35_d] = useState("")
    const [Vq35_e, setVq35_e] = useState("")
    const [Vq35_correct, setVq35_correct] = useState("")
    const handleVq35_NameChange = e => {
        setVq35Name(e.target.value)
    }
    const handleVq35_aChange = e => {
        setVq35_a(e.target.value)
    }
    const handleVq35_bChange = e => {
        setVq35_b(e.target.value)
    }
    const handleVq35_cChange = e => {
        setVq35_c(e.target.value)
    }
    const handleVq35_dChange = e => {
        setVq35_d(e.target.value)
    }
    const handleVq35_eChange = e => {
        setVq35_e(e.target.value)
    }
    const handleVq35_correctChange = e => {
        setVq35_correct(e.target.value)
    }
    const [Vq36Name, setVq36Name] = useState("")
    const [Vq36_a, setVq36_a] = useState("")
    const [Vq36_b, setVq36_b] = useState("")
    const [Vq36_c, setVq36_c] = useState("")
    const [Vq36_d, setVq36_d] = useState("")
    const [Vq36_e, setVq36_e] = useState("")
    const [Vq36_correct, setVq36_correct] = useState("")
    const handleVq36_NameChange = e => {
        setVq36Name(e.target.value)
    }
    const handleVq36_aChange = e => {
        setVq36_a(e.target.value)
    }
    const handleVq36_bChange = e => {
        setVq36_b(e.target.value)
    }
    const handleVq36_cChange = e => {
        setVq36_c(e.target.value)
    }
    const handleVq36_dChange = e => {
        setVq36_d(e.target.value)
    }
    const handleVq36_eChange = e => {
        setVq36_e(e.target.value)
    }
    const handleVq36_correctChange = e => {
        setVq36_correct(e.target.value)
    }

    const [Vq37Name, setVq37Name] = useState("")
    const [Vq37_a, setVq37_a] = useState("")
    const [Vq37_b, setVq37_b] = useState("")
    const [Vq37_c, setVq37_c] = useState("")
    const [Vq37_d, setVq37_d] = useState("")
    const [Vq37_e, setVq37_e] = useState("")
    const [Vq37_correct, setVq37_correct] = useState("")
    const handleVq37_NameChange = e => {
        setVq37Name(e.target.value)
    }
    const handleVq37_aChange = e => {
        setVq37_a(e.target.value)
    }
    const handleVq37_bChange = e => {
        setVq37_b(e.target.value)
    }
    const handleVq37_cChange = e => {
        setVq37_c(e.target.value)
    }
    const handleVq37_dChange = e => {
        setVq37_d(e.target.value)
    }
    const handleVq37_eChange = e => {
        setVq37_e(e.target.value)
    }
    const handleVq37_correctChange = e => {
        setVq37_correct(e.target.value)
    }
    const [Vq38Name, setVq38Name] = useState("")
    const [Vq38_a, setVq38_a] = useState("")
    const [Vq38_b, setVq38_b] = useState("")
    const [Vq38_c, setVq38_c] = useState("")
    const [Vq38_d, setVq38_d] = useState("")
    const [Vq38_e, setVq38_e] = useState("")
    const [Vq38_correct, setVq38_correct] = useState("")
    const handleVq38_NameChange = e => {
        setVq38Name(e.target.value)
    }
    const handleVq38_aChange = e => {
        setVq38_a(e.target.value)
    }
    const handleVq38_bChange = e => {
        setVq38_b(e.target.value)
    }
    const handleVq38_cChange = e => {
        setVq38_c(e.target.value)
    }
    const handleVq38_dChange = e => {
        setVq38_d(e.target.value)
    }
    const handleVq38_eChange = e => {
        setVq38_e(e.target.value)
    }
    const handleVq38_correctChange = e => {
        setVq38_correct(e.target.value)
    }
    const [Vq39Name, setVq39Name] = useState("")
    const [Vq39_a, setVq39_a] = useState("")
    const [Vq39_b, setVq39_b] = useState("")
    const [Vq39_c, setVq39_c] = useState("")
    const [Vq39_d, setVq39_d] = useState("")
    const [Vq39_e, setVq39_e] = useState("")
    const [Vq39_correct, setVq39_correct] = useState("")
    const handleVq39_NameChange = e => {
        setVq39Name(e.target.value)
    }
    const handleVq39_aChange = e => {
        setVq39_a(e.target.value)
    }
    const handleVq39_bChange = e => {
        setVq39_b(e.target.value)
    }
    const handleVq39_cChange = e => {
        setVq39_c(e.target.value)
    }
    const handleVq39_dChange = e => {
        setVq39_d(e.target.value)
    }
    const handleVq39_eChange = e => {
        setVq39_e(e.target.value)
    }
    const handleVq39_correctChange = e => {
        setVq39_correct(e.target.value)
    }
    const [Vq40Name, setVq40Name] = useState("")
    const [Vq40_a, setVq40_a] = useState("")
    const [Vq40_b, setVq40_b] = useState("")
    const [Vq40_c, setVq40_c] = useState("")
    const [Vq40_d, setVq40_d] = useState("")
    const [Vq40_e, setVq40_e] = useState("")
    const [Vq40_correct, setVq40_correct] = useState("")
    const handleVq40_NameChange = e => {
        setVq40Name(e.target.value)
    }
    const handleVq40_aChange = e => {
        setVq40_a(e.target.value)
    }
    const handleVq40_bChange = e => {
        setVq40_b(e.target.value)
    }
    const handleVq40_cChange = e => {
        setVq40_c(e.target.value)
    }
    const handleVq40_dChange = e => {
        setVq40_d(e.target.value)
    }
    const handleVq40_eChange = e => {
        setVq40_e(e.target.value)
    }
    const handleVq40_correctChange = e => {
        setVq40_correct(e.target.value)
    }
    const [Vq41Name, setVq41Name] = useState("")
    const [Vq41_a, setVq41_a] = useState("")
    const [Vq41_b, setVq41_b] = useState("")
    const [Vq41_c, setVq41_c] = useState("")
    const [Vq41_d, setVq41_d] = useState("")
    const [Vq41_e, setVq41_e] = useState("")
    const [Vq41_correct, setVq41_correct] = useState("")
    const handleVq41_NameChange = e => {
        setVq41Name(e.target.value)
    }
    const handleVq41_aChange = e => {
        setVq41_a(e.target.value)
    }
    const handleVq41_bChange = e => {
        setVq41_b(e.target.value)
    }
    const handleVq41_cChange = e => {
        setVq41_c(e.target.value)
    }
    const handleVq41_dChange = e => {
        setVq41_d(e.target.value)
    }
    const handleVq41_eChange = e => {
        setVq41_e(e.target.value)
    }
    const handleVq41_correctChange = e => {
        setVq41_correct(e.target.value)
    }
    const [Vq42Name, setVq42Name] = useState("")
    const [Vq42_a, setVq42_a] = useState("")
    const [Vq42_b, setVq42_b] = useState("")
    const [Vq42_c, setVq42_c] = useState("")
    const [Vq42_d, setVq42_d] = useState("")
    const [Vq42_e, setVq42_e] = useState("")
    const [Vq42_correct, setVq42_correct] = useState("")
    const handleVq42_NameChange = e => {
        setVq42Name(e.target.value)
    }
    const handleVq42_aChange = e => {
        setVq42_a(e.target.value)
    }
    const handleVq42_bChange = e => {
        setVq42_b(e.target.value)
    }
    const handleVq42_cChange = e => {
        setVq42_c(e.target.value)
    }
    const handleVq42_dChange = e => {
        setVq42_d(e.target.value)
    }
    const handleVq42_eChange = e => {
        setVq42_e(e.target.value)
    }
    const handleVq42_correctChange = e => {
        setVq42_correct(e.target.value)
    }

    const [Vq43Name, setVq43Name] = useState("")
    const [Vq43_a, setVq43_a] = useState("")
    const [Vq43_b, setVq43_b] = useState("")
    const [Vq43_c, setVq43_c] = useState("")
    const [Vq43_d, setVq43_d] = useState("")
    const [Vq43_e, setVq43_e] = useState("")
    const [Vq43_correct, setVq43_correct] = useState("")
    const handleVq43_NameChange = e => {
        setVq43Name(e.target.value)
    }
    const handleVq43_aChange = e => {
        setVq43_a(e.target.value)
    }
    const handleVq43_bChange = e => {
        setVq43_b(e.target.value)
    }
    const handleVq43_cChange = e => {
        setVq43_c(e.target.value)
    }
    const handleVq43_dChange = e => {
        setVq43_d(e.target.value)
    }
    const handleVq43_eChange = e => {
        setVq43_e(e.target.value)
    }
    const handleVq43_correctChange = e => {
        setVq43_correct(e.target.value)
    }
    const [Vq44Name, setVq44Name] = useState("")
    const [Vq44_a, setVq44_a] = useState("")
    const [Vq44_b, setVq44_b] = useState("")
    const [Vq44_c, setVq44_c] = useState("")
    const [Vq44_d, setVq44_d] = useState("")
    const [Vq44_e, setVq44_e] = useState("")
    const [Vq44_correct, setVq44_correct] = useState("")
    const handleVq44_NameChange = e => {
        setVq44Name(e.target.value)
    }
    const handleVq44_aChange = e => {
        setVq44_a(e.target.value)
    }
    const handleVq44_bChange = e => {
        setVq44_b(e.target.value)
    }
    const handleVq44_cChange = e => {
        setVq44_c(e.target.value)
    }
    const handleVq44_dChange = e => {
        setVq44_d(e.target.value)
    }
    const handleVq44_eChange = e => {
        setVq44_e(e.target.value)
    }
    const handleVq44_correctChange = e => {
        setVq44_correct(e.target.value)
    }
    const [Vq45Name, setVq45Name] = useState("")
    const [Vq45_a, setVq45_a] = useState("")
    const [Vq45_b, setVq45_b] = useState("")
    const [Vq45_c, setVq45_c] = useState("")
    const [Vq45_d, setVq45_d] = useState("")
    const [Vq45_e, setVq45_e] = useState("")
    const [Vq45_correct, setVq45_correct] = useState("")
    const handleVq45_NameChange = e => {
        setVq45Name(e.target.value)
    }
    const handleVq45_aChange = e => {
        setVq45_a(e.target.value)
    }
    const handleVq45_bChange = e => {
        setVq45_b(e.target.value)
    }
    const handleVq45_cChange = e => {
        setVq45_c(e.target.value)
    }
    const handleVq45_dChange = e => {
        setVq45_d(e.target.value)
    }
    const handleVq45_eChange = e => {
        setVq45_e(e.target.value)
    }
    const handleVq45_correctChange = e => {
        setVq45_correct(e.target.value)
    }
    const [Vq46Name, setVq46Name] = useState("")
    const [Vq46_a, setVq46_a] = useState("")
    const [Vq46_b, setVq46_b] = useState("")
    const [Vq46_c, setVq46_c] = useState("")
    const [Vq46_d, setVq46_d] = useState("")
    const [Vq46_e, setVq46_e] = useState("")
    const [Vq46_correct, setVq46_correct] = useState("")
    const handleVq46_NameChange = e => {
        setVq46Name(e.target.value)
    }
    const handleVq46_aChange = e => {
        setVq46_a(e.target.value)
    }
    const handleVq46_bChange = e => {
        setVq46_b(e.target.value)
    }
    const handleVq46_cChange = e => {
        setVq46_c(e.target.value)
    }
    const handleVq46_dChange = e => {
        setVq46_d(e.target.value)
    }
    const handleVq46_eChange = e => {
        setVq46_e(e.target.value)
    }
    const handleVq46_correctChange = e => {
        setVq46_correct(e.target.value)
    }
    const [Vq47Name, setVq47Name] = useState("")
    const [Vq47_a, setVq47_a] = useState("")
    const [Vq47_b, setVq47_b] = useState("")
    const [Vq47_c, setVq47_c] = useState("")
    const [Vq47_d, setVq47_d] = useState("")
    const [Vq47_e, setVq47_e] = useState("")
    const [Vq47_correct, setVq47_correct] = useState("")
    const handleVq47_NameChange = e => {
        setVq47Name(e.target.value)
    }
    const handleVq47_aChange = e => {
        setVq47_a(e.target.value)
    }
    const handleVq47_bChange = e => {
        setVq47_b(e.target.value)
    }
    const handleVq47_cChange = e => {
        setVq47_c(e.target.value)
    }
    const handleVq47_dChange = e => {
        setVq47_d(e.target.value)
    }
    const handleVq47_eChange = e => {
        setVq47_e(e.target.value)
    }
    const handleVq47_correctChange = e => {
        setVq47_correct(e.target.value)
    }
    const [Vq48Name, setVq48Name] = useState("")
    const [Vq48_a, setVq48_a] = useState("")
    const [Vq48_b, setVq48_b] = useState("")
    const [Vq48_c, setVq48_c] = useState("")
    const [Vq48_d, setVq48_d] = useState("")
    const [Vq48_e, setVq48_e] = useState("")
    const [Vq48_correct, setVq48_correct] = useState("")
    const handleVq48_NameChange = e => {
        setVq48Name(e.target.value)
    }
    const handleVq48_aChange = e => {
        setVq48_a(e.target.value)
    }
    const handleVq48_bChange = e => {
        setVq48_b(e.target.value)
    }
    const handleVq48_cChange = e => {
        setVq48_c(e.target.value)
    }
    const handleVq48_dChange = e => {
        setVq48_d(e.target.value)
    }
    const handleVq48_eChange = e => {
        setVq48_e(e.target.value)
    }
    const handleVq48_correctChange = e => {
        setVq48_correct(e.target.value)
    }

    const [Vq49Name, setVq49Name] = useState("")
    const [Vq49_a, setVq49_a] = useState("")
    const [Vq49_b, setVq49_b] = useState("")
    const [Vq49_c, setVq49_c] = useState("")
    const [Vq49_d, setVq49_d] = useState("")
    const [Vq49_e, setVq49_e] = useState("")
    const [Vq49_correct, setVq49_correct] = useState("")
    const handleVq49_NameChange = e => {
        setVq49Name(e.target.value)
    }
    const handleVq49_aChange = e => {
        setVq49_a(e.target.value)
    }
    const handleVq49_bChange = e => {
        setVq49_b(e.target.value)
    }
    const handleVq49_cChange = e => {
        setVq49_c(e.target.value)
    }
    const handleVq49_dChange = e => {
        setVq49_d(e.target.value)
    }
    const handleVq49_eChange = e => {
        setVq49_e(e.target.value)
    }
    const handleVq49_correctChange = e => {
        setVq49_correct(e.target.value)
    }
    const [Vq50Name, setVq50Name] = useState("")
    const [Vq50_a, setVq50_a] = useState("")
    const [Vq50_b, setVq50_b] = useState("")
    const [Vq50_c, setVq50_c] = useState("")
    const [Vq50_d, setVq50_d] = useState("")
    const [Vq50_e, setVq50_e] = useState("")
    const [Vq50_correct, setVq50_correct] = useState("")
    const handleVq50_NameChange = e => {
        setVq50Name(e.target.value)
    }
    const handleVq50_aChange = e => {
        setVq50_a(e.target.value)
    }
    const handleVq50_bChange = e => {
        setVq50_b(e.target.value)
    }
    const handleVq50_cChange = e => {
        setVq50_c(e.target.value)
    }
    const handleVq50_dChange = e => {
        setVq50_d(e.target.value)
    }
    const handleVq50_eChange = e => {
        setVq50_e(e.target.value)
    }
    const handleVq50_correctChange = e => {
        setVq50_correct(e.target.value)
    }
    const [Vq51Name, setVq51Name] = useState("")
    const [Vq51_a, setVq51_a] = useState("")
    const [Vq51_b, setVq51_b] = useState("")
    const [Vq51_c, setVq51_c] = useState("")
    const [Vq51_d, setVq51_d] = useState("")
    const [Vq51_e, setVq51_e] = useState("")
    const [Vq51_correct, setVq51_correct] = useState("")
    const handleVq51_NameChange = e => {
        setVq51Name(e.target.value)
    }
    const handleVq51_aChange = e => {
        setVq51_a(e.target.value)
    }
    const handleVq51_bChange = e => {
        setVq51_b(e.target.value)
    }
    const handleVq51_cChange = e => {
        setVq51_c(e.target.value)
    }
    const handleVq51_dChange = e => {
        setVq51_d(e.target.value)
    }
    const handleVq51_eChange = e => {
        setVq51_e(e.target.value)
    }
    const handleVq51_correctChange = e => {
        setVq51_correct(e.target.value)
    }
    const [Vq52Name, setVq52Name] = useState("")
    const [Vq52_a, setVq52_a] = useState("")
    const [Vq52_b, setVq52_b] = useState("")
    const [Vq52_c, setVq52_c] = useState("")
    const [Vq52_d, setVq52_d] = useState("")
    const [Vq52_e, setVq52_e] = useState("")
    const [Vq52_correct, setVq52_correct] = useState("")
    const handleVq52_NameChange = e => {
        setVq52Name(e.target.value)
    }
    const handleVq52_aChange = e => {
        setVq52_a(e.target.value)
    }
    const handleVq52_bChange = e => {
        setVq52_b(e.target.value)
    }
    const handleVq52_cChange = e => {
        setVq52_c(e.target.value)
    }
    const handleVq52_dChange = e => {
        setVq52_d(e.target.value)
    }
    const handleVq52_eChange = e => {
        setVq52_e(e.target.value)
    }
    const handleVq52_correctChange = e => {
        setVq52_correct(e.target.value)
    }
    const [Vq53Name, setVq53Name] = useState("")
    const [Vq53_a, setVq53_a] = useState("")
    const [Vq53_b, setVq53_b] = useState("")
    const [Vq53_c, setVq53_c] = useState("")
    const [Vq53_d, setVq53_d] = useState("")
    const [Vq53_e, setVq53_e] = useState("")
    const [Vq53_correct, setVq53_correct] = useState("")
    const handleVq53_NameChange = e => {
        setVq53Name(e.target.value)
    }
    const handleVq53_aChange = e => {
        setVq53_a(e.target.value)
    }
    const handleVq53_bChange = e => {
        setVq53_b(e.target.value)
    }
    const handleVq53_cChange = e => {
        setVq53_c(e.target.value)
    }
    const handleVq53_dChange = e => {
        setVq53_d(e.target.value)
    }
    const handleVq53_eChange = e => {
        setVq53_e(e.target.value)
    }
    const handleVq53_correctChange = e => {
        setVq53_correct(e.target.value)
    }
    const [Vq54Name, setVq54Name] = useState("")
    const [Vq54_a, setVq54_a] = useState("")
    const [Vq54_b, setVq54_b] = useState("")
    const [Vq54_c, setVq54_c] = useState("")
    const [Vq54_d, setVq54_d] = useState("")
    const [Vq54_e, setVq54_e] = useState("")
    const [Vq54_correct, setVq54_correct] = useState("")
    const handleVq54_NameChange = e => {
        setVq54Name(e.target.value)
    }
    const handleVq54_aChange = e => {
        setVq54_a(e.target.value)
    }
    const handleVq54_bChange = e => {
        setVq54_b(e.target.value)
    }
    const handleVq54_cChange = e => {
        setVq54_c(e.target.value)
    }
    const handleVq54_dChange = e => {
        setVq54_d(e.target.value)
    }
    const handleVq54_eChange = e => {
        setVq54_e(e.target.value)
    }
    const handleVq54_correctChange = e => {
        setVq54_correct(e.target.value)
    }

    const [Vq55Name, setVq55Name] = useState("")
    const [Vq55_a, setVq55_a] = useState("")
    const [Vq55_b, setVq55_b] = useState("")
    const [Vq55_c, setVq55_c] = useState("")
    const [Vq55_d, setVq55_d] = useState("")
    const [Vq55_e, setVq55_e] = useState("")
    const [Vq55_correct, setVq55_correct] = useState("")
    const handleVq55_NameChange = e => {
        setVq55Name(e.target.value)
    }
    const handleVq55_aChange = e => {
        setVq55_a(e.target.value)
    }
    const handleVq55_bChange = e => {
        setVq55_b(e.target.value)
    }
    const handleVq55_cChange = e => {
        setVq55_c(e.target.value)
    }
    const handleVq55_dChange = e => {
        setVq55_d(e.target.value)
    }
    const handleVq55_eChange = e => {
        setVq55_e(e.target.value)
    }
    const handleVq55_correctChange = e => {
        setVq55_correct(e.target.value)
    }
    const [Vq56Name, setVq56Name] = useState("")
    const [Vq56_a, setVq56_a] = useState("")
    const [Vq56_b, setVq56_b] = useState("")
    const [Vq56_c, setVq56_c] = useState("")
    const [Vq56_d, setVq56_d] = useState("")
    const [Vq56_e, setVq56_e] = useState("")
    const [Vq56_correct, setVq56_correct] = useState("")
    const handleVq56_NameChange = e => {
        setVq56Name(e.target.value)
    }
    const handleVq56_aChange = e => {
        setVq56_a(e.target.value)
    }
    const handleVq56_bChange = e => {
        setVq56_b(e.target.value)
    }
    const handleVq56_cChange = e => {
        setVq56_c(e.target.value)
    }
    const handleVq56_dChange = e => {
        setVq56_d(e.target.value)
    }
    const handleVq56_eChange = e => {
        setVq56_e(e.target.value)
    }
    const handleVq56_correctChange = e => {
        setVq56_correct(e.target.value)
    }
    const [Vq57Name, setVq57Name] = useState("")
    const [Vq57_a, setVq57_a] = useState("")
    const [Vq57_b, setVq57_b] = useState("")
    const [Vq57_c, setVq57_c] = useState("")
    const [Vq57_d, setVq57_d] = useState("")
    const [Vq57_e, setVq57_e] = useState("")
    const [Vq57_correct, setVq57_correct] = useState("")
    const handleVq57_NameChange = e => {
        setVq57Name(e.target.value)
    }
    const handleVq57_aChange = e => {
        setVq57_a(e.target.value)
    }
    const handleVq57_bChange = e => {
        setVq57_b(e.target.value)
    }
    const handleVq57_cChange = e => {
        setVq57_c(e.target.value)
    }
    const handleVq57_dChange = e => {
        setVq57_d(e.target.value)
    }
    const handleVq57_eChange = e => {
        setVq57_e(e.target.value)
    }
    const handleVq57_correctChange = e => {
        setVq57_correct(e.target.value)
    }
    const [Vq58Name, setVq58Name] = useState("")
    const [Vq58_a, setVq58_a] = useState("")
    const [Vq58_b, setVq58_b] = useState("")
    const [Vq58_c, setVq58_c] = useState("")
    const [Vq58_d, setVq58_d] = useState("")
    const [Vq58_e, setVq58_e] = useState("")
    const [Vq58_correct, setVq58_correct] = useState("")
    const handleVq58_NameChange = e => {
        setVq58Name(e.target.value)
    }
    const handleVq58_aChange = e => {
        setVq58_a(e.target.value)
    }
    const handleVq58_bChange = e => {
        setVq58_b(e.target.value)
    }
    const handleVq58_cChange = e => {
        setVq58_c(e.target.value)
    }
    const handleVq58_dChange = e => {
        setVq58_d(e.target.value)
    }
    const handleVq58_eChange = e => {
        setVq58_e(e.target.value)
    }
    const handleVq58_correctChange = e => {
        setVq58_correct(e.target.value)
    }
    const [Vq59Name, setVq59Name] = useState("")
    const [Vq59_a, setVq59_a] = useState("")
    const [Vq59_b, setVq59_b] = useState("")
    const [Vq59_c, setVq59_c] = useState("")
    const [Vq59_d, setVq59_d] = useState("")
    const [Vq59_e, setVq59_e] = useState("")
    const [Vq59_correct, setVq59_correct] = useState("")
    const handleVq59_NameChange = e => {
        setVq59Name(e.target.value)
    }
    const handleVq59_aChange = e => {
        setVq59_a(e.target.value)
    }
    const handleVq59_bChange = e => {
        setVq59_b(e.target.value)
    }
    const handleVq59_cChange = e => {
        setVq59_c(e.target.value)
    }
    const handleVq59_dChange = e => {
        setVq59_d(e.target.value)
    }
    const handleVq59_eChange = e => {
        setVq59_e(e.target.value)
    }
    const handleVq59_correctChange = e => {
        setVq59_correct(e.target.value)
    }
    const [Vq60Name, setVq60Name] = useState("")
    const [Vq60_a, setVq60_a] = useState("")
    const [Vq60_b, setVq60_b] = useState("")
    const [Vq60_c, setVq60_c] = useState("")
    const [Vq60_d, setVq60_d] = useState("")
    const [Vq60_e, setVq60_e] = useState("")
    const [Vq60_correct, setVq60_correct] = useState("")
    const handleVq60_NameChange = e => {
        setVq60Name(e.target.value)
    }
    const handleVq60_aChange = e => {
        setVq60_a(e.target.value)
    }
    const handleVq60_bChange = e => {
        setVq60_b(e.target.value)
    }
    const handleVq60_cChange = e => {
        setVq60_c(e.target.value)
    }
    const handleVq60_dChange = e => {
        setVq60_d(e.target.value)
    }
    const handleVq60_eChange = e => {
        setVq60_e(e.target.value)
    }
    const handleVq60_correctChange = e => {
        setVq60_correct(e.target.value)
    }





    const handlePost = e => {
        //console.log(questionList)
        axios({
            method: "POST",
            data: {
                title: quizName,
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


    const [quizName, setQuizName] = useState("")
    console.log(quizName)
    const hangleQuizNameChange = e => {
        setQuizName(e.target.value)
    }

    const [showWriting, setShowWriting] = useState(false)
    const handleShowWriting = e => setShowWriting(!showWriting)
    const [showMath1, setShowMath1] = useState(false)
    const handleShowMath1 = e => setShowMath1(!showMath1)
    const [showMath2, setShowMath2] = useState(false)
    const handleShowMath2 = e => setShowMath2(!showMath2)
    const [showVerbal, setShowVerbal] = useState(false)
    const handleShowVerbal = e => setShowVerbal(!showVerbal)
    const [showReading, setShowReading] = useState(false)
    const handleShowReading = e => setShowReading(!showReading)

    return (
        <div>
            <Container className="mx-auto" style={{width:'600px'}}>
                &nbsp;
                <form>
                    <div className="form-group">
                        <label className=""><h5>Quiz name</h5></label>
                        <input className="form-control" onChange={hangleQuizNameChange} placeholder=""/>
                    </div>


                    <div className="text-center"><h5>Writing Section</h5></div>
                    {!showWriting ? 
                        <>
                            <div className="text-right">
                                <Button variant="primary" onClick={handleShowWriting}>Show</Button> 
                            </div>
                        </>
                        : null
                    }
                    {showWriting ? 
                    <>
                    <div className="form-group">
                        <label><h5>Writing title</h5></label>
                        <textarea 
                            className="form-control" 
                            rows="10" 
                            onChange={hangle_writingChange}
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <Button variant="primary" onClick={handleShowWriting}>Hide</Button>
                    </div>
                    </>
                    : null
                    }


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
                        handle_NameChange={handleM1q1_NameChange}
                        handle_aChange={handleM1q1_aChange}
                        handle_bChange={handleM1q1_bChange}
                        handle_cChange={handleM1q1_cChange}
                        handle_dChange={handleM1q1_dChange}
                        handle_eChange={handleM1q1_eChange}
                        handle_correctChange={handleM1q1_correctChange}
                        />
                    <Question
                        num='2'
                        handle_NameChange={handleM1q2_NameChange}
                        handle_aChange={handleM1q2_aChange}
                        handle_bChange={handleM1q2_bChange}
                        handle_cChange={handleM1q2_cChange} 
                        handle_dChange={handleM1q2_dChange}
                        handle_eChange={handleM1q2_eChange}
                        handle_correctChange={handleM1q2_correctChange}
                    />
                    <Question   
                        num='3'
                        handle_NameChange={handleM1q3_NameChange}
                        handle_aChange={handleM1q3_aChange}
                        handle_bChange={handleM1q3_bChange}
                        handle_cChange={handleM1q3_cChange} 
                        handle_dChange={handleM1q3_dChange}
                        handle_eChange={handleM1q3_eChange}
                        handle_correctChange={handleM1q3_correctChange}
                    />
                    <Question   
                        num='4'
                        handle_NameChange={handleM1q4_NameChange}
                        handle_aChange={handleM1q4_aChange}
                        handle_bChange={handleM1q4_bChange}
                        handle_cChange={handleM1q4_cChange} 
                        handle_dChange={handleM1q4_dChange}
                        handle_eChange={handleM1q4_eChange}
                        handle_correctChange={handleM1q4_correctChange}
                    />
                    <Question   
                        num='5'
                        handle_NameChange={handleM1q5_NameChange}
                        handle_aChange={handleM1q5_aChange}
                        handle_bChange={handleM1q5_bChange}
                        handle_cChange={handleM1q5_cChange} 
                        handle_dChange={handleM1q5_dChange}
                        handle_eChange={handleM1q5_eChange}
                        handle_correctChange={handleM1q5_correctChange}
                    />
                    <Question   
                        num='6'
                        handle_NameChange={handleM1q6_NameChange}
                        handle_aChange={handleM1q6_aChange}
                        handle_bChange={handleM1q6_bChange}
                        handle_cChange={handleM1q6_cChange} 
                        handle_dChange={handleM1q6_dChange}
                        handle_eChange={handleM1q6_eChange}
                        handle_correctChange={handleM1q6_correctChange}
                    />
                    <Question 
                        num='7'
                        handle_NameChange={handleM1q7_NameChange}
                        handle_aChange={handleM1q7_aChange}
                        handle_bChange={handleM1q7_bChange}
                        handle_cChange={handleM1q7_cChange} 
                        handle_dChange={handleM1q7_dChange}
                        handle_eChange={handleM1q7_eChange}
                        handle_correctChange={handleM1q7_correctChange}
                    />
                    <Question
                        num='8'
                        handle_NameChange={handleM1q8_NameChange}
                        handle_aChange={handleM1q8_aChange}
                        handle_bChange={handleM1q8_bChange}
                        handle_cChange={handleM1q8_cChange} 
                        handle_dChange={handleM1q8_dChange}
                        handle_eChange={handleM1q8_eChange}
                        handle_correctChange={handleM1q8_correctChange}
                    />
                    <Question   
                        num='9'
                        handle_NameChange={handleM1q9_NameChange}
                        handle_aChange={handleM1q9_aChange}
                        handle_bChange={handleM1q9_bChange}
                        handle_cChange={handleM1q9_cChange} 
                        handle_dChange={handleM1q9_dChange}
                        handle_eChange={handleM1q9_eChange}
                        handle_correctChange={handleM1q9_correctChange}
                    />
                    <Question   
                        num='10'
                        handle_NameChange={handleM1q10_NameChange}
                        handle_aChange={handleM1q10_aChange}
                        handle_bChange={handleM1q10_bChange}
                        handle_cChange={handleM1q10_cChange} 
                        handle_dChange={handleM1q10_dChange}
                        handle_eChange={handleM1q10_eChange}
                        handle_correctChange={handleM1q10_correctChange}
                    />
                    <Question   
                        num='11'
                        handle_NameChange={handleM1q11_NameChange}
                        handle_aChange={handleM1q11_aChange}
                        handle_bChange={handleM1q11_bChange}
                        handle_cChange={handleM1q11_cChange} 
                        handle_dChange={handleM1q11_dChange}
                        handle_eChange={handleM1q11_eChange}
                        handle_correctChange={handleM1q11_correctChange}
                    />
                    <Question   
                        num='12'
                        handle_NameChange={handleM1q12_NameChange}
                        handle_aChange={handleM1q12_aChange}
                        handle_bChange={handleM1q12_bChange}
                        handle_cChange={handleM1q12_cChange} 
                        handle_dChange={handleM1q12_dChange}
                        handle_eChange={handleM1q12_eChange}
                        handle_correctChange={handleM1q12_correctChange}
                    />
                    <Question 
                        num='13'
                        handle_NameChange={handleM1q13_NameChange}
                        handle_aChange={handleM1q13_aChange}
                        handle_bChange={handleM1q13_bChange}
                        handle_cChange={handleM1q13_cChange} 
                        handle_dChange={handleM1q13_dChange}
                        handle_eChange={handleM1q13_eChange}
                        handle_correctChange={handleM1q13_correctChange}
                    />
                    <Question
                        num='14'
                        handle_NameChange={handleM1q14_NameChange}
                        handle_aChange={handleM1q14_aChange}
                        handle_bChange={handleM1q14_bChange}
                        handle_cChange={handleM1q14_cChange} 
                        handle_dChange={handleM1q14_dChange}
                        handle_eChange={handleM1q14_eChange}
                        handle_correctChange={handleM1q14_correctChange}
                    />
                    <Question   
                        num='15'
                        handle_NameChange={handleM1q15_NameChange}
                        handle_aChange={handleM1q15_aChange}
                        handle_bChange={handleM1q15_bChange}
                        handle_cChange={handleM1q15_cChange} 
                        handle_dChange={handleM1q15_dChange}
                        handle_eChange={handleM1q15_eChange}
                        handle_correctChange={handleM1q15_correctChange}
                    />
                    <Question   
                        num='16'
                        handle_NameChange={handleM1q16_NameChange}
                        handle_aChange={handleM1q16_aChange}
                        handle_bChange={handleM1q16_bChange}
                        handle_cChange={handleM1q16_cChange} 
                        handle_dChange={handleM1q16_dChange}
                        handle_eChange={handleM1q16_eChange}
                        handle_correctChange={handleM1q16_correctChange}
                    />
                    <Question   
                        num='17'
                        handle_NameChange={handleM1q17_NameChange}
                        handle_aChange={handleM1q17_aChange}
                        handle_bChange={handleM1q17_bChange}
                        handle_cChange={handleM1q17_cChange} 
                        handle_dChange={handleM1q17_dChange}
                        handle_eChange={handleM1q17_eChange}
                        handle_correctChange={handleM1q17_correctChange}
                    />
                    <Question   
                        num='18'
                        handle_NameChange={handleM1q18_NameChange}
                        handle_aChange={handleM1q18_aChange}
                        handle_bChange={handleM1q18_bChange}
                        handle_cChange={handleM1q18_cChange} 
                        handle_dChange={handleM1q18_dChange}
                        handle_eChange={handleM1q18_eChange}
                        handle_correctChange={handleM1q18_correctChange}
                    />
                    <Question 
                        num='19'
                        handle_NameChange={handleM1q19_NameChange}
                        handle_aChange={handleM1q19_aChange}
                        handle_bChange={handleM1q19_bChange}
                        handle_cChange={handleM1q19_cChange} 
                        handle_dChange={handleM1q19_dChange}
                        handle_eChange={handleM1q19_eChange}
                        handle_correctChange={handleM1q19_correctChange}
                    />
                    <Question
                        num='20'
                        handle_NameChange={handleM1q20_NameChange}
                        handle_aChange={handleM1q20_aChange}
                        handle_bChange={handleM1q20_bChange}
                        handle_cChange={handleM1q20_cChange} 
                        handle_dChange={handleM1q20_dChange}
                        handle_eChange={handleM1q20_eChange}
                        handle_correctChange={handleM1q20_correctChange}
                    />
                    <Question   
                        num='21'
                        handle_NameChange={handleM1q21_NameChange}
                        handle_aChange={handleM1q21_aChange}
                        handle_bChange={handleM1q21_bChange}
                        handle_cChange={handleM1q21_cChange} 
                        handle_dChange={handleM1q21_dChange}
                        handle_eChange={handleM1q21_eChange}
                        handle_correctChange={handleM1q21_correctChange}
                    />
                    <Question   
                        num='22'
                        handle_NameChange={handleM1q22_NameChange}
                        handle_aChange={handleM1q22_aChange}
                        handle_bChange={handleM1q22_bChange}
                        handle_cChange={handleM1q22_cChange} 
                        handle_dChange={handleM1q22_dChange}
                        handle_eChange={handleM1q22_eChange}
                        handle_correctChange={handleM1q22_correctChange}
                    />
                    <Question   
                        num='23'
                        handle_NameChange={handleM1q23_NameChange}
                        handle_aChange={handleM1q23_aChange}
                        handle_bChange={handleM1q23_bChange}
                        handle_cChange={handleM1q23_cChange} 
                        handle_dChange={handleM1q23_dChange}
                        handle_eChange={handleM1q23_eChange}
                        handle_correctChange={handleM1q23_correctChange}
                    />
                    <Question   
                        num='24'
                        handle_NameChange={handleM1q24_NameChange}
                        handle_aChange={handleM1q24_aChange}
                        handle_bChange={handleM1q24_bChange}
                        handle_cChange={handleM1q24_cChange} 
                        handle_dChange={handleM1q24_dChange}
                        handle_eChange={handleM1q24_eChange}
                        handle_correctChange={handleM1q24_correctChange}
                    />
                    <Question 
                        num='25'
                        handle_NameChange={handleM1q25_NameChange}
                        handle_aChange={handleM1q25_aChange}
                        handle_bChange={handleM1q25_bChange}
                        handle_cChange={handleM1q25_cChange} 
                        handle_dChange={handleM1q25_dChange}
                        handle_eChange={handleM1q25_eChange}
                        handle_correctChange={handleM1q25_correctChange}
                    />
                    <div className="text-right">
                        <Button variant="primary" onClick={handleShowMath1}>Hide</Button>
                    </div>
                    </>
                    : null
                    }
                    

                    <div className="text-center"><h5>Reading Section</h5></div>
                    {!showReading ? 
                        <>
                            <div className="text-right">
                                <Button variant="primary" onClick={handleShowReading}>Show</Button> 
                            </div>
                        </>
                        : null
                    }
                    
                    {showReading ? 
                    <>
                    <h4>Paragraph 1</h4>
                    <div className="form-group">
                        <textarea className="form-control" rows="12" onChange={paragraphName_1_Change}></textarea>
                    </div>
                        <Question 
                            num='1'
                            handle_NameChange={handleReadq1_NameChange}
                            handle_aChange={handleReadq1_aChange}
                            handle_bChange={handleReadq1_bChange}
                            handle_cChange={handleReadq1_cChange}
                            handle_dChange={handleReadq1_dChange}
                            handle_eChange={handleReadq1_eChange}
                            handle_correctChange={handleReadq1_correctChange}
                            />
                        <Question
                            num='2'
                            handle_NameChange={handleReadq2_NameChange}
                            handle_aChange={handleReadq2_aChange}
                            handle_bChange={handleReadq2_bChange}
                            handle_cChange={handleReadq2_cChange} 
                            handle_dChange={handleReadq2_dChange}
                            handle_eChange={handleReadq2_eChange}
                            handle_correctChange={handleReadq2_correctChange}
                        />
                        <Question   
                            num='3'
                            handle_NameChange={handleReadq3_NameChange}
                            handle_aChange={handleReadq3_aChange}
                            handle_bChange={handleReadq3_bChange}
                            handle_cChange={handleReadq3_cChange} 
                            handle_dChange={handleReadq3_dChange}
                            handle_eChange={handleReadq3_eChange}
                            handle_correctChange={handleReadq3_correctChange}
                        />
                        <Question   
                            num='4'
                            handle_NameChange={handleReadq4_NameChange}
                            handle_aChange={handleReadq4_aChange}
                            handle_bChange={handleReadq4_bChange}
                            handle_cChange={handleReadq4_cChange} 
                            handle_dChange={handleReadq4_dChange}
                            handle_eChange={handleReadq4_eChange}
                            handle_correctChange={handleReadq4_correctChange}
                        />
                        <Question   
                            num='5'
                            handle_NameChange={handleReadq5_NameChange}
                            handle_aChange={handleReadq5_aChange}
                            handle_bChange={handleReadq5_bChange}
                            handle_cChange={handleReadq5_cChange} 
                            handle_dChange={handleReadq5_dChange}
                            handle_eChange={handleReadq5_eChange}
                            handle_correctChange={handleReadq5_correctChange}
                        />
                        
                        <Question   
                            num='6'
                            handle_NameChange={handleReadq6_NameChange}
                            handle_aChange={handleReadq6_aChange}
                            handle_bChange={handleReadq6_bChange}
                            handle_cChange={handleReadq6_cChange} 
                            handle_dChange={handleReadq6_dChange}
                            handle_eChange={handleReadq6_eChange}
                            handle_correctChange={handleReadq6_correctChange}
                        />
                        <h4>Paragraph 2</h4>
                <div className="form-group">
                    <textarea className="form-control" rows="12" onChange={paragraphName_2_Change}></textarea>
                </div>
                        <Question 
                            num='7'
                            handle_NameChange={handleReadq7_NameChange}
                            handle_aChange={handleReadq7_aChange}
                            handle_bChange={handleReadq7_bChange}
                            handle_cChange={handleReadq7_cChange} 
                            handle_dChange={handleReadq7_dChange}
                            handle_eChange={handleReadq7_eChange}
                            handle_correctChange={handleReadq7_correctChange}
                        />
                        <Question
                            num='8'
                            handle_NameChange={handleReadq8_NameChange}
                            handle_aChange={handleReadq8_aChange}
                            handle_bChange={handleReadq8_bChange}
                            handle_cChange={handleReadq8_cChange} 
                            handle_dChange={handleReadq8_dChange}
                            handle_eChange={handleReadq8_eChange}
                            handle_correctChange={handleReadq8_correctChange}
                        />
                        <Question   
                            num='9'
                            handle_NameChange={handleReadq9_NameChange}
                            handle_aChange={handleReadq9_aChange}
                            handle_bChange={handleReadq9_bChange}
                            handle_cChange={handleReadq9_cChange} 
                            handle_dChange={handleReadq9_dChange}
                            handle_eChange={handleReadq9_eChange}
                            handle_correctChange={handleReadq9_correctChange}
                        />
                        <Question   
                            num='10'
                            handle_NameChange={handleReadq10_NameChange}
                            handle_aChange={handleReadq10_aChange}
                            handle_bChange={handleReadq10_bChange}
                            handle_cChange={handleReadq10_cChange} 
                            handle_dChange={handleReadq10_dChange}
                            handle_eChange={handleReadq10_eChange}
                            handle_correctChange={handleReadq10_correctChange}
                        />
                        <Question   
                            num='11'
                            handle_NameChange={handleReadq11_NameChange}
                            handle_aChange={handleReadq11_aChange}
                            handle_bChange={handleReadq11_bChange}
                            handle_cChange={handleReadq11_cChange} 
                            handle_dChange={handleReadq11_dChange}
                            handle_eChange={handleReadq11_eChange}
                            handle_correctChange={handleReadq11_correctChange}
                        />
                        
                        <Question   
                            num='12'
                            handle_NameChange={handleReadq12_NameChange}
                            handle_aChange={handleReadq12_aChange}
                            handle_bChange={handleReadq12_bChange}
                            handle_cChange={handleReadq12_cChange} 
                            handle_dChange={handleReadq12_dChange}
                            handle_eChange={handleReadq12_eChange}
                            handle_correctChange={handleReadq12_correctChange}
                        />
                        <h4>Paragraph 3</h4>
                <div className="form-group">
                    <textarea className="form-control" rows="12" onChange={paragraphName_3_Change}></textarea>
                </div>
                        <Question 
                            num='13'
                            handle_NameChange={handleReadq13_NameChange}
                            handle_aChange={handleReadq13_aChange}
                            handle_bChange={handleReadq13_bChange}
                            handle_cChange={handleReadq13_cChange} 
                            handle_dChange={handleReadq13_dChange}
                            handle_eChange={handleReadq13_eChange}
                            handle_correctChange={handleReadq13_correctChange}
                        />
                        <Question
                            num='14'
                            handle_NameChange={handleReadq14_NameChange}
                            handle_aChange={handleReadq14_aChange}
                            handle_bChange={handleReadq14_bChange}
                            handle_cChange={handleReadq14_cChange} 
                            handle_dChange={handleReadq14_dChange}
                            handle_eChange={handleReadq14_eChange}
                            handle_correctChange={handleReadq14_correctChange}
                        />
                        <Question   
                            num='15'
                            handle_NameChange={handleReadq15_NameChange}
                            handle_aChange={handleReadq15_aChange}
                            handle_bChange={handleReadq15_bChange}
                            handle_cChange={handleReadq15_cChange} 
                            handle_dChange={handleReadq15_dChange}
                            handle_eChange={handleReadq15_eChange}
                            handle_correctChange={handleReadq15_correctChange}
                        />
                        <Question   
                            num='16'
                            handle_NameChange={handleReadq16_NameChange}
                            handle_aChange={handleReadq16_aChange}
                            handle_bChange={handleReadq16_bChange}
                            handle_cChange={handleReadq16_cChange} 
                            handle_dChange={handleReadq16_dChange}
                            handle_eChange={handleReadq16_eChange}
                            handle_correctChange={handleReadq16_correctChange}
                        />
                        <Question   
                            num='17'
                            handle_NameChange={handleReadq17_NameChange}
                            handle_aChange={handleReadq17_aChange}
                            handle_bChange={handleReadq17_bChange}
                            handle_cChange={handleReadq17_cChange} 
                            handle_dChange={handleReadq17_dChange}
                            handle_eChange={handleReadq17_eChange}
                            handle_correctChange={handleReadq17_correctChange}
                        />
                        
                        <Question   
                            num='18'
                            handle_NameChange={handleReadq18_NameChange}
                            handle_aChange={handleReadq18_aChange}
                            handle_bChange={handleReadq18_bChange}
                            handle_cChange={handleReadq18_cChange} 
                            handle_dChange={handleReadq18_dChange}
                            handle_eChange={handleReadq18_eChange}
                            handle_correctChange={handleReadq18_correctChange}
                        />
                        <h4>Paragraph 4</h4>
                <div className="form-group">
                    <textarea className="form-control" rows="12" onChange={paragraphName_4_Change}></textarea>
                </div>
                        <Question 
                            num='19'
                            handle_NameChange={handleReadq19_NameChange}
                            handle_aChange={handleReadq19_aChange}
                            handle_bChange={handleReadq19_bChange}
                            handle_cChange={handleReadq19_cChange} 
                            handle_dChange={handleReadq19_dChange}
                            handle_eChange={handleReadq19_eChange}
                            handle_correctChange={handleReadq19_correctChange}
                        />
                        <Question
                            num='20'
                            handle_NameChange={handleReadq20_NameChange}
                            handle_aChange={handleReadq20_aChange}
                            handle_bChange={handleReadq20_bChange}
                            handle_cChange={handleReadq20_cChange} 
                            handle_dChange={handleReadq20_dChange}
                            handle_eChange={handleReadq20_eChange}
                            handle_correctChange={handleReadq20_correctChange}
                        />
                        <Question   
                            num='21'
                            handle_NameChange={handleReadq21_NameChange}
                            handle_aChange={handleReadq21_aChange}
                            handle_bChange={handleReadq21_bChange}
                            handle_cChange={handleReadq21_cChange} 
                            handle_dChange={handleReadq21_dChange}
                            handle_eChange={handleReadq21_eChange}
                            handle_correctChange={handleReadq21_correctChange}
                        />
                        <Question   
                            num='22'
                            handle_NameChange={handleReadq22_NameChange}
                            handle_aChange={handleReadq22_aChange}
                            handle_bChange={handleReadq22_bChange}
                            handle_cChange={handleReadq22_cChange} 
                            handle_dChange={handleReadq22_dChange}
                            handle_eChange={handleReadq22_eChange}
                            handle_correctChange={handleReadq22_correctChange}
                        />
                        <Question   
                            num='23'
                            handle_NameChange={handleReadq23_NameChange}
                            handle_aChange={handleReadq23_aChange}
                            handle_bChange={handleReadq23_bChange}
                            handle_cChange={handleReadq23_cChange} 
                            handle_dChange={handleReadq23_dChange}
                            handle_eChange={handleReadq23_eChange}
                            handle_correctChange={handleReadq23_correctChange}
                        />
                        
                        <Question   
                            num='24'
                            handle_NameChange={handleReadq24_NameChange}
                            handle_aChange={handleReadq24_aChange}
                            handle_bChange={handleReadq24_bChange}
                            handle_cChange={handleReadq24_cChange} 
                            handle_dChange={handleReadq24_dChange}
                            handle_eChange={handleReadq24_eChange}
                            handle_correctChange={handleReadq24_correctChange}
                        />
                        <h4>Paragraph 5</h4>
                <div className="form-group">
                    <textarea className="form-control" rows="12" onChange={paragraphName_5_Change}></textarea>
                </div>
                        <Question 
                            num='25'
                            handle_NameChange={handleReadq25_NameChange}
                            handle_aChange={handleReadq25_aChange}
                            handle_bChange={handleReadq25_bChange}
                            handle_cChange={handleReadq25_cChange} 
                            handle_dChange={handleReadq25_dChange}
                            handle_eChange={handleReadq25_eChange}
                            handle_correctChange={handleReadq25_correctChange}
                        />
                        <Question
                            num='26'
                            handle_NameChange={handleReadq26_NameChange}
                            handle_aChange={handleReadq26_aChange}
                            handle_bChange={handleReadq26_bChange}
                            handle_cChange={handleReadq26_cChange} 
                            handle_dChange={handleReadq26_dChange}
                            handle_eChange={handleReadq26_eChange}
                            handle_correctChange={handleReadq26_correctChange}
                        />
                        <Question   
                            num='27'
                            handle_NameChange={handleReadq27_NameChange}
                            handle_aChange={handleReadq27_aChange}
                            handle_bChange={handleReadq27_bChange}
                            handle_cChange={handleReadq27_cChange} 
                            handle_dChange={handleReadq27_dChange}
                            handle_eChange={handleReadq27_eChange}
                            handle_correctChange={handleReadq27_correctChange}
                        />
                        <Question   
                            num='28'
                            handle_NameChange={handleReadq28_NameChange}
                            handle_aChange={handleReadq28_aChange}
                            handle_bChange={handleReadq28_bChange}
                            handle_cChange={handleReadq28_cChange} 
                            handle_dChange={handleReadq28_dChange}
                            handle_eChange={handleReadq28_eChange}
                            handle_correctChange={handleReadq28_correctChange}
                        />
                        <Question   
                            num='29'
                            handle_NameChange={handleReadq29_NameChange}
                            handle_aChange={handleReadq29_aChange}
                            handle_bChange={handleReadq29_bChange}
                            handle_cChange={handleReadq29_cChange} 
                            handle_dChange={handleReadq29_dChange}
                            handle_eChange={handleReadq29_eChange}
                            handle_correctChange={handleReadq29_correctChange}
                        />
                        
                        <Question   
                            num='30'
                            handle_NameChange={handleReadq30_NameChange}
                            handle_aChange={handleReadq30_aChange}
                            handle_bChange={handleReadq30_bChange}
                            handle_cChange={handleReadq30_cChange} 
                            handle_dChange={handleReadq30_dChange}
                            handle_eChange={handleReadq30_eChange}
                            handle_correctChange={handleReadq30_correctChange}
                        />
                        <h4>Paragraph 6</h4>
                <div className="form-group">
                    <textarea className="form-control" rows="12" onChange={paragraphName_6_Change}></textarea>
                </div>
                        <Question 
                            num='31'
                            handle_NameChange={handleReadq31_NameChange}
                            handle_aChange={handleReadq31_aChange}
                            handle_bChange={handleReadq31_bChange}
                            handle_cChange={handleReadq31_cChange}
                            handle_dChange={handleReadq31_dChange}
                            handle_eChange={handleReadq31_eChange}
                            handle_correctChange={handleReadq31_correctChange}
                            />
                        <Question
                            num='32'
                            handle_NameChange={handleReadq32_NameChange}
                            handle_aChange={handleReadq32_aChange}
                            handle_bChange={handleReadq32_bChange}
                            handle_cChange={handleReadq32_cChange} 
                            handle_dChange={handleReadq32_dChange}
                            handle_eChange={handleReadq32_eChange}
                            handle_correctChange={handleReadq32_correctChange}
                        />
                        <Question   
                            num='3'
                            handle_NameChange={handleReadq33_NameChange}
                            handle_aChange={handleReadq33_aChange}
                            handle_bChange={handleReadq33_bChange}
                            handle_cChange={handleReadq33_cChange} 
                            handle_dChange={handleReadq33_dChange}
                            handle_eChange={handleReadq33_eChange}
                            handle_correctChange={handleReadq33_correctChange}
                        />
                        <Question   
                            num='34'
                            handle_NameChange={handleReadq34_NameChange}
                            handle_aChange={handleReadq34_aChange}
                            handle_bChange={handleReadq34_bChange}
                            handle_cChange={handleReadq34_cChange} 
                            handle_dChange={handleReadq34_dChange}
                            handle_eChange={handleReadq34_eChange}
                            handle_correctChange={handleReadq34_correctChange}
                        />
                        <Question   
                            num='35'
                            handle_NameChange={handleReadq35_NameChange}
                            handle_aChange={handleReadq35_aChange}
                            handle_bChange={handleReadq35_bChange}
                            handle_cChange={handleReadq35_cChange} 
                            handle_dChange={handleReadq35_dChange}
                            handle_eChange={handleReadq35_eChange}
                            handle_correctChange={handleReadq35_correctChange}
                        />
                        
                        <Question   
                            num='36'
                            handle_NameChange={handleReadq36_NameChange}
                            handle_aChange={handleReadq36_aChange}
                            handle_bChange={handleReadq36_bChange}
                            handle_cChange={handleReadq36_cChange} 
                            handle_dChange={handleReadq36_dChange}
                            handle_eChange={handleReadq36_eChange}
                            handle_correctChange={handleReadq36_correctChange}
                        />
                        <h4>Paragraph 7</h4>
                <div className="form-group">
                    <textarea className="form-control" rows="12" onChange={paragraphName_7_Change}></textarea>
                </div>
                        <Question 
                            num='37'
                            handle_NameChange={handleReadq37_NameChange}
                            handle_aChange={handleReadq37_aChange}
                            handle_bChange={handleReadq37_bChange}
                            handle_cChange={handleReadq37_cChange} 
                            handle_dChange={handleReadq37_dChange}
                            handle_eChange={handleReadq37_eChange}
                            handle_correctChange={handleReadq37_correctChange}
                        />
                        <Question
                            num='38'
                            handle_NameChange={handleReadq38_NameChange}
                            handle_aChange={handleReadq38_aChange}
                            handle_bChange={handleReadq38_bChange}
                            handle_cChange={handleReadq38_cChange} 
                            handle_dChange={handleReadq38_dChange}
                            handle_eChange={handleReadq38_eChange}
                            handle_correctChange={handleReadq38_correctChange}
                        />
                        <Question   
                            num='39'
                            handle_NameChange={handleReadq39_NameChange}
                            handle_aChange={handleReadq39_aChange}
                            handle_bChange={handleReadq39_bChange}
                            handle_cChange={handleReadq39_cChange} 
                            handle_dChange={handleReadq39_dChange}
                            handle_eChange={handleReadq39_eChange}
                            handle_correctChange={handleReadq39_correctChange}
                        />
                        <Question   
                            num='40'
                            handle_NameChange={handleReadq40_NameChange}
                            handle_aChange={handleReadq40_aChange}
                            handle_bChange={handleReadq40_bChange}
                            handle_cChange={handleReadq40_cChange} 
                            handle_dChange={handleReadq40_dChange}
                            handle_eChange={handleReadq40_eChange}
                            handle_correctChange={handleReadq40_correctChange}
                        />
                        <Question   
                            num='41'
                            handle_NameChange={handleReadq41_NameChange}
                            handle_aChange={handleReadq41_aChange}
                            handle_bChange={handleReadq41_bChange}
                            handle_cChange={handleReadq41_cChange} 
                            handle_dChange={handleReadq41_dChange}
                            handle_eChange={handleReadq41_eChange}
                            handle_correctChange={handleReadq41_correctChange}
                        />
                        
                        <Question   
                            num='42'
                            handle_NameChange={handleReadq42_NameChange}
                            handle_aChange={handleReadq42_aChange}
                            handle_bChange={handleReadq42_bChange}
                            handle_cChange={handleReadq42_cChange} 
                            handle_dChange={handleReadq42_dChange}
                            handle_eChange={handleReadq42_eChange}
                            handle_correctChange={handleReadq42_correctChange}
                        />
                        <h4>Paragraph 8</h4>
                <div className="form-group">
                    <textarea className="form-control" rows="12" onChange={paragraphName_8_Change}></textarea>
                </div>
                        <Question 
                            num='43'
                            handle_NameChange={handleReadq43_NameChange}
                            handle_aChange={handleReadq43_aChange}
                            handle_bChange={handleReadq43_bChange}
                            handle_cChange={handleReadq43_cChange} 
                            handle_dChange={handleReadq43_dChange}
                            handle_eChange={handleReadq43_eChange}
                            handle_correctChange={handleReadq43_correctChange}
                        />
                        <Question
                            num='44'
                            handle_NameChange={handleReadq44_NameChange}
                            handle_aChange={handleReadq44_aChange}
                            handle_bChange={handleReadq44_bChange}
                            handle_cChange={handleReadq44_cChange} 
                            handle_dChange={handleReadq44_dChange}
                            handle_eChange={handleReadq44_eChange}
                            handle_correctChange={handleReadq44_correctChange}
                        />
                        <Question   
                            num='45'
                            handle_NameChange={handleReadq45_NameChange}
                            handle_aChange={handleReadq45_aChange}
                            handle_bChange={handleReadq45_bChange}
                            handle_cChange={handleReadq45_cChange} 
                            handle_dChange={handleReadq45_dChange}
                            handle_eChange={handleReadq45_eChange}
                            handle_correctChange={handleReadq45_correctChange}
                        />
                        <Question   
                            num='46'
                            handle_NameChange={handleReadq46_NameChange}
                            handle_aChange={handleReadq46_aChange}
                            handle_bChange={handleReadq46_bChange}
                            handle_cChange={handleReadq46_cChange} 
                            handle_dChange={handleReadq46_dChange}
                            handle_eChange={handleReadq46_eChange}
                            handle_correctChange={handleReadq46_correctChange}
                        />
                        <Question   
                            num='47'
                            handle_NameChange={handleReadq47_NameChange}
                            handle_aChange={handleReadq47_aChange}
                            handle_bChange={handleReadq47_bChange}
                            handle_cChange={handleReadq47_cChange} 
                            handle_dChange={handleReadq47_dChange}
                            handle_eChange={handleReadq47_eChange}
                            handle_correctChange={handleReadq47_correctChange}
                        />
                        <Question   
                            num='48'
                            handle_NameChange={handleReadq48_NameChange}
                            handle_aChange={handleReadq48_aChange}
                            handle_bChange={handleReadq48_bChange}
                            handle_cChange={handleReadq48_cChange} 
                            handle_dChange={handleReadq48_dChange}
                            handle_eChange={handleReadq48_eChange}
                            handle_correctChange={handleReadq48_correctChange}
                        />
                    <div className="text-right">
                            <Button variant="primary" onClick={handleShowReading}>Hide</Button>
                        </div>
                    </>
                    : null
                    }

                    <div className="text-center"><h5>Verbal Section</h5></div>
                    {!showVerbal ? 
                        <>
                            <div className="text-right">
                                <Button variant="primary" onClick={handleShowVerbal}>Show</Button> 
                            </div>
                        </>
                        : null
                    }
                    
                    {showVerbal ? 
                    <>
                        <Question 
                            num='1'
                            handle_NameChange={handleVq1_NameChange}
                            handle_aChange={handleVq1_aChange}
                            handle_bChange={handleVq1_bChange}
                            handle_cChange={handleVq1_cChange}
                            handle_dChange={handleVq1_dChange}
                            handle_eChange={handleVq1_eChange}
                            handle_correctChange={handleVq1_correctChange}
                            />
                        <Question
                            num='2'
                            handle_NameChange={handleVq2_NameChange}
                            handle_aChange={handleVq2_aChange}
                            handle_bChange={handleVq2_bChange}
                            handle_cChange={handleVq2_cChange} 
                            handle_dChange={handleVq2_dChange}
                            handle_eChange={handleVq2_eChange}
                            handle_correctChange={handleVq2_correctChange}
                        />
                        <Question   
                            num='3'
                            handle_NameChange={handleVq3_NameChange}
                            handle_aChange={handleVq3_aChange}
                            handle_bChange={handleVq3_bChange}
                            handle_cChange={handleVq3_cChange} 
                            handle_dChange={handleVq3_dChange}
                            handle_eChange={handleVq3_eChange}
                            handle_correctChange={handleVq3_correctChange}
                        />
                        <Question   
                            num='4'
                            handle_NameChange={handleVq4_NameChange}
                            handle_aChange={handleVq4_aChange}
                            handle_bChange={handleVq4_bChange}
                            handle_cChange={handleVq4_cChange} 
                            handle_dChange={handleVq4_dChange}
                            handle_eChange={handleVq4_eChange}
                            handle_correctChange={handleVq4_correctChange}
                        />
                        <Question   
                            num='5'
                            handle_NameChange={handleVq5_NameChange}
                            handle_aChange={handleVq5_aChange}
                            handle_bChange={handleVq5_bChange}
                            handle_cChange={handleVq5_cChange} 
                            handle_dChange={handleVq5_dChange}
                            handle_eChange={handleVq5_eChange}
                            handle_correctChange={handleVq5_correctChange}
                        />
                        <Question   
                            num='6'
                            handle_NameChange={handleVq6_NameChange}
                            handle_aChange={handleVq6_aChange}
                            handle_bChange={handleVq6_bChange}
                            handle_cChange={handleVq6_cChange} 
                            handle_dChange={handleVq6_dChange}
                            handle_eChange={handleVq6_eChange}
                            handle_correctChange={handleVq6_correctChange}
                        />
                        <Question 
                            num='7'
                            handle_NameChange={handleVq7_NameChange}
                            handle_aChange={handleVq7_aChange}
                            handle_bChange={handleVq7_bChange}
                            handle_cChange={handleVq7_cChange} 
                            handle_dChange={handleVq7_dChange}
                            handle_eChange={handleVq7_eChange}
                            handle_correctChange={handleVq7_correctChange}
                        />
                        <Question
                            num='8'
                            handle_NameChange={handleVq8_NameChange}
                            handle_aChange={handleVq8_aChange}
                            handle_bChange={handleVq8_bChange}
                            handle_cChange={handleVq8_cChange} 
                            handle_dChange={handleVq8_dChange}
                            handle_eChange={handleVq8_eChange}
                            handle_correctChange={handleVq8_correctChange}
                        />
                        <Question   
                            num='9'
                            handle_NameChange={handleVq9_NameChange}
                            handle_aChange={handleVq9_aChange}
                            handle_bChange={handleVq9_bChange}
                            handle_cChange={handleVq9_cChange} 
                            handle_dChange={handleVq9_dChange}
                            handle_eChange={handleVq9_eChange}
                            handle_correctChange={handleVq9_correctChange}
                        />
                        <Question   
                            num='10'
                            handle_NameChange={handleVq10_NameChange}
                            handle_aChange={handleVq10_aChange}
                            handle_bChange={handleVq10_bChange}
                            handle_cChange={handleVq10_cChange} 
                            handle_dChange={handleVq10_dChange}
                            handle_eChange={handleVq10_eChange}
                            handle_correctChange={handleVq10_correctChange}
                        />
                        <Question   
                            num='11'
                            handle_NameChange={handleVq11_NameChange}
                            handle_aChange={handleVq11_aChange}
                            handle_bChange={handleVq11_bChange}
                            handle_cChange={handleVq11_cChange} 
                            handle_dChange={handleVq11_dChange}
                            handle_eChange={handleVq11_eChange}
                            handle_correctChange={handleVq11_correctChange}
                        />
                        <Question   
                            num='12'
                            handle_NameChange={handleVq12_NameChange}
                            handle_aChange={handleVq12_aChange}
                            handle_bChange={handleVq12_bChange}
                            handle_cChange={handleVq12_cChange} 
                            handle_dChange={handleVq12_dChange}
                            handle_eChange={handleVq12_eChange}
                            handle_correctChange={handleVq12_correctChange}
                        />
                        <Question 
                            num='13'
                            handle_NameChange={handleVq13_NameChange}
                            handle_aChange={handleVq13_aChange}
                            handle_bChange={handleVq13_bChange}
                            handle_cChange={handleVq13_cChange} 
                            handle_dChange={handleVq13_dChange}
                            handle_eChange={handleVq13_eChange}
                            handle_correctChange={handleVq13_correctChange}
                        />
                        <Question
                            num='14'
                            handle_NameChange={handleVq14_NameChange}
                            handle_aChange={handleVq14_aChange}
                            handle_bChange={handleVq14_bChange}
                            handle_cChange={handleVq14_cChange} 
                            handle_dChange={handleVq14_dChange}
                            handle_eChange={handleVq14_eChange}
                            handle_correctChange={handleVq14_correctChange}
                        />
                        <Question   
                            num='15'
                            handle_NameChange={handleVq15_NameChange}
                            handle_aChange={handleVq15_aChange}
                            handle_bChange={handleVq15_bChange}
                            handle_cChange={handleVq15_cChange} 
                            handle_dChange={handleVq15_dChange}
                            handle_eChange={handleVq15_eChange}
                            handle_correctChange={handleVq15_correctChange}
                        />
                        <Question   
                            num='16'
                            handle_NameChange={handleVq16_NameChange}
                            handle_aChange={handleVq16_aChange}
                            handle_bChange={handleVq16_bChange}
                            handle_cChange={handleVq16_cChange} 
                            handle_dChange={handleVq16_dChange}
                            handle_eChange={handleVq16_eChange}
                            handle_correctChange={handleVq16_correctChange}
                        />
                        <Question   
                            num='17'
                            handle_NameChange={handleVq17_NameChange}
                            handle_aChange={handleVq17_aChange}
                            handle_bChange={handleVq17_bChange}
                            handle_cChange={handleVq17_cChange} 
                            handle_dChange={handleVq17_dChange}
                            handle_eChange={handleVq17_eChange}
                            handle_correctChange={handleVq17_correctChange}
                        />
                        <Question   
                            num='18'
                            handle_NameChange={handleVq18_NameChange}
                            handle_aChange={handleVq18_aChange}
                            handle_bChange={handleVq18_bChange}
                            handle_cChange={handleVq18_cChange} 
                            handle_dChange={handleVq18_dChange}
                            handle_eChange={handleVq18_eChange}
                            handle_correctChange={handleVq18_correctChange}
                        />
                        <Question 
                            num='19'
                            handle_NameChange={handleVq19_NameChange}
                            handle_aChange={handleVq19_aChange}
                            handle_bChange={handleVq19_bChange}
                            handle_cChange={handleVq19_cChange} 
                            handle_dChange={handleVq19_dChange}
                            handle_eChange={handleVq19_eChange}
                            handle_correctChange={handleVq19_correctChange}
                        />
                        <Question
                            num='20'
                            handle_NameChange={handleVq20_NameChange}
                            handle_aChange={handleVq20_aChange}
                            handle_bChange={handleVq20_bChange}
                            handle_cChange={handleVq20_cChange} 
                            handle_dChange={handleVq20_dChange}
                            handle_eChange={handleVq20_eChange}
                            handle_correctChange={handleVq20_correctChange}
                        />
                        <Question   
                            num='21'
                            handle_NameChange={handleVq21_NameChange}
                            handle_aChange={handleVq21_aChange}
                            handle_bChange={handleVq21_bChange}
                            handle_cChange={handleVq21_cChange} 
                            handle_dChange={handleVq21_dChange}
                            handle_eChange={handleVq21_eChange}
                            handle_correctChange={handleVq21_correctChange}
                        />
                        <Question   
                            num='22'
                            handle_NameChange={handleVq22_NameChange}
                            handle_aChange={handleVq22_aChange}
                            handle_bChange={handleVq22_bChange}
                            handle_cChange={handleVq22_cChange} 
                            handle_dChange={handleVq22_dChange}
                            handle_eChange={handleVq22_eChange}
                            handle_correctChange={handleVq22_correctChange}
                        />
                        <Question   
                            num='23'
                            handle_NameChange={handleVq23_NameChange}
                            handle_aChange={handleVq23_aChange}
                            handle_bChange={handleVq23_bChange}
                            handle_cChange={handleVq23_cChange} 
                            handle_dChange={handleVq23_dChange}
                            handle_eChange={handleVq23_eChange}
                            handle_correctChange={handleVq23_correctChange}
                        />
                        <Question   
                            num='24'
                            handle_NameChange={handleVq24_NameChange}
                            handle_aChange={handleVq24_aChange}
                            handle_bChange={handleVq24_bChange}
                            handle_cChange={handleVq24_cChange} 
                            handle_dChange={handleVq24_dChange}
                            handle_eChange={handleVq24_eChange}
                            handle_correctChange={handleVq24_correctChange}
                        />
                        <Question 
                            num='25'
                            handle_NameChange={handleVq25_NameChange}
                            handle_aChange={handleVq25_aChange}
                            handle_bChange={handleVq25_bChange}
                            handle_cChange={handleVq25_cChange} 
                            handle_dChange={handleVq25_dChange}
                            handle_eChange={handleVq25_eChange}
                            handle_correctChange={handleVq25_correctChange}
                        />
                        <Question
                            num='26'
                            handle_NameChange={handleVq26_NameChange}
                            handle_aChange={handleVq26_aChange}
                            handle_bChange={handleVq26_bChange}
                            handle_cChange={handleVq26_cChange} 
                            handle_dChange={handleVq26_dChange}
                            handle_eChange={handleVq26_eChange}
                            handle_correctChange={handleVq26_correctChange}
                        />
                        <Question   
                            num='27'
                            handle_NameChange={handleVq27_NameChange}
                            handle_aChange={handleVq27_aChange}
                            handle_bChange={handleVq27_bChange}
                            handle_cChange={handleVq27_cChange} 
                            handle_dChange={handleVq27_dChange}
                            handle_eChange={handleVq27_eChange}
                            handle_correctChange={handleVq27_correctChange}
                        />
                        <Question   
                            num='28'
                            handle_NameChange={handleVq28_NameChange}
                            handle_aChange={handleVq28_aChange}
                            handle_bChange={handleVq28_bChange}
                            handle_cChange={handleVq28_cChange} 
                            handle_dChange={handleVq28_dChange}
                            handle_eChange={handleVq28_eChange}
                            handle_correctChange={handleVq28_correctChange}
                        />
                        <Question   
                            num='29'
                            handle_NameChange={handleVq29_NameChange}
                            handle_aChange={handleVq29_aChange}
                            handle_bChange={handleVq29_bChange}
                            handle_cChange={handleVq29_cChange} 
                            handle_dChange={handleVq29_dChange}
                            handle_eChange={handleVq29_eChange}
                            handle_correctChange={handleVq29_correctChange}
                        />
                        <Question   
                            num='30'
                            handle_NameChange={handleVq30_NameChange}
                            handle_aChange={handleVq30_aChange}
                            handle_bChange={handleVq30_bChange}
                            handle_cChange={handleVq30_cChange} 
                            handle_dChange={handleVq30_dChange}
                            handle_eChange={handleVq30_eChange}
                            handle_correctChange={handleVq30_correctChange}
                        />
                        <Question 
                            num='31'
                            handle_NameChange={handleVq31_NameChange}
                            handle_aChange={handleVq31_aChange}
                            handle_bChange={handleVq31_bChange}
                            handle_cChange={handleVq31_cChange}
                            handle_dChange={handleVq31_dChange}
                            handle_eChange={handleVq31_eChange}
                            handle_correctChange={handleVq31_correctChange}
                            />
                        <Question
                            num='32'
                            handle_NameChange={handleVq32_NameChange}
                            handle_aChange={handleVq32_aChange}
                            handle_bChange={handleVq32_bChange}
                            handle_cChange={handleVq32_cChange} 
                            handle_dChange={handleVq32_dChange}
                            handle_eChange={handleVq32_eChange}
                            handle_correctChange={handleVq32_correctChange}
                        />
                        <Question   
                            num='33'
                            handle_NameChange={handleVq33_NameChange}
                            handle_aChange={handleVq33_aChange}
                            handle_bChange={handleVq33_bChange}
                            handle_cChange={handleVq33_cChange} 
                            handle_dChange={handleVq33_dChange}
                            handle_eChange={handleVq33_eChange}
                            handle_correctChange={handleVq33_correctChange}
                        />
                        <Question   
                            num='34'
                            handle_NameChange={handleVq34_NameChange}
                            handle_aChange={handleVq34_aChange}
                            handle_bChange={handleVq34_bChange}
                            handle_cChange={handleVq34_cChange} 
                            handle_dChange={handleVq34_dChange}
                            handle_eChange={handleVq34_eChange}
                            handle_correctChange={handleVq34_correctChange}
                        />
                        <Question   
                            num='35'
                            handle_NameChange={handleVq35_NameChange}
                            handle_aChange={handleVq35_aChange}
                            handle_bChange={handleVq35_bChange}
                            handle_cChange={handleVq35_cChange} 
                            handle_dChange={handleVq35_dChange}
                            handle_eChange={handleVq35_eChange}
                            handle_correctChange={handleVq35_correctChange}
                        />
                        <Question   
                            num='36'
                            handle_NameChange={handleVq36_NameChange}
                            handle_aChange={handleVq36_aChange}
                            handle_bChange={handleVq36_bChange}
                            handle_cChange={handleVq36_cChange} 
                            handle_dChange={handleVq36_dChange}
                            handle_eChange={handleVq36_eChange}
                            handle_correctChange={handleVq36_correctChange}
                        />
                        <Question 
                            num='37'
                            handle_NameChange={handleVq37_NameChange}
                            handle_aChange={handleVq37_aChange}
                            handle_bChange={handleVq37_bChange}
                            handle_cChange={handleVq37_cChange} 
                            handle_dChange={handleVq37_dChange}
                            handle_eChange={handleVq37_eChange}
                            handle_correctChange={handleVq37_correctChange}
                        />
                        <Question
                            num='38'
                            handle_NameChange={handleVq38_NameChange}
                            handle_aChange={handleVq38_aChange}
                            handle_bChange={handleVq38_bChange}
                            handle_cChange={handleVq38_cChange} 
                            handle_dChange={handleVq38_dChange}
                            handle_eChange={handleVq38_eChange}
                            handle_correctChange={handleVq38_correctChange}
                        />
                        <Question   
                            num='39'
                            handle_NameChange={handleVq39_NameChange}
                            handle_aChange={handleVq39_aChange}
                            handle_bChange={handleVq39_bChange}
                            handle_cChange={handleVq39_cChange} 
                            handle_dChange={handleVq39_dChange}
                            handle_eChange={handleVq39_eChange}
                            handle_correctChange={handleVq39_correctChange}
                        />
                        <Question   
                            num='40'
                            handle_NameChange={handleVq40_NameChange}
                            handle_aChange={handleVq40_aChange}
                            handle_bChange={handleVq40_bChange}
                            handle_cChange={handleVq40_cChange} 
                            handle_dChange={handleVq40_dChange}
                            handle_eChange={handleVq40_eChange}
                            handle_correctChange={handleVq40_correctChange}
                        />
                        <Question   
                            num='41'
                            handle_NameChange={handleVq41_NameChange}
                            handle_aChange={handleVq41_aChange}
                            handle_bChange={handleVq41_bChange}
                            handle_cChange={handleVq41_cChange} 
                            handle_dChange={handleVq41_dChange}
                            handle_eChange={handleVq41_eChange}
                            handle_correctChange={handleVq41_correctChange}
                        />
                        <Question   
                            num='42'
                            handle_NameChange={handleVq42_NameChange}
                            handle_aChange={handleVq42_aChange}
                            handle_bChange={handleVq42_bChange}
                            handle_cChange={handleVq42_cChange} 
                            handle_dChange={handleVq42_dChange}
                            handle_eChange={handleVq42_eChange}
                            handle_correctChange={handleVq42_correctChange}
                        />
                        <Question 
                            num='43'
                            handle_NameChange={handleVq43_NameChange}
                            handle_aChange={handleVq43_aChange}
                            handle_bChange={handleVq43_bChange}
                            handle_cChange={handleVq43_cChange} 
                            handle_dChange={handleVq43_dChange}
                            handle_eChange={handleVq43_eChange}
                            handle_correctChange={handleVq43_correctChange}
                        />
                        <Question
                            num='44'
                            handle_NameChange={handleVq44_NameChange}
                            handle_aChange={handleVq44_aChange}
                            handle_bChange={handleVq44_bChange}
                            handle_cChange={handleVq44_cChange} 
                            handle_dChange={handleVq44_dChange}
                            handle_eChange={handleVq44_eChange}
                            handle_correctChange={handleVq44_correctChange}
                        />
                        <Question   
                            num='45'
                            handle_NameChange={handleVq45_NameChange}
                            handle_aChange={handleVq45_aChange}
                            handle_bChange={handleVq45_bChange}
                            handle_cChange={handleVq45_cChange} 
                            handle_dChange={handleVq45_dChange}
                            handle_eChange={handleVq45_eChange}
                            handle_correctChange={handleVq45_correctChange}
                        />
                        <Question   
                            num='46'
                            handle_NameChange={handleVq46_NameChange}
                            handle_aChange={handleVq46_aChange}
                            handle_bChange={handleVq46_bChange}
                            handle_cChange={handleVq46_cChange} 
                            handle_dChange={handleVq46_dChange}
                            handle_eChange={handleVq46_eChange}
                            handle_correctChange={handleVq46_correctChange}
                        />
                        <Question   
                            num='47'
                            handle_NameChange={handleVq47_NameChange}
                            handle_aChange={handleVq47_aChange}
                            handle_bChange={handleVq47_bChange}
                            handle_cChange={handleVq47_cChange} 
                            handle_dChange={handleVq47_dChange}
                            handle_eChange={handleVq47_eChange}
                            handle_correctChange={handleVq47_correctChange}
                        />
                        <Question   
                            num='48'
                            handle_NameChange={handleVq48_NameChange}
                            handle_aChange={handleVq48_aChange}
                            handle_bChange={handleVq48_bChange}
                            handle_cChange={handleVq48_cChange} 
                            handle_dChange={handleVq48_dChange}
                            handle_eChange={handleVq48_eChange}
                            handle_correctChange={handleVq48_correctChange}
                        />
                        <Question 
                            num='49'
                            handle_NameChange={handleVq49_NameChange}
                            handle_aChange={handleVq49_aChange}
                            handle_bChange={handleVq49_bChange}
                            handle_cChange={handleVq49_cChange} 
                            handle_dChange={handleVq49_dChange}
                            handle_eChange={handleVq49_eChange}
                            handle_correctChange={handleVq49_correctChange}
                        />
                        <Question
                            num='50'
                            handle_NameChange={handleVq50_NameChange}
                            handle_aChange={handleVq50_aChange}
                            handle_bChange={handleVq50_bChange}
                            handle_cChange={handleVq50_cChange} 
                            handle_dChange={handleVq50_dChange}
                            handle_eChange={handleVq50_eChange}
                            handle_correctChange={handleVq50_correctChange}
                        />
                        <Question   
                            num='51'
                            handle_NameChange={handleVq51_NameChange}
                            handle_aChange={handleVq51_aChange}
                            handle_bChange={handleVq51_bChange}
                            handle_cChange={handleVq51_cChange} 
                            handle_dChange={handleVq51_dChange}
                            handle_eChange={handleVq51_eChange}
                            handle_correctChange={handleVq51_correctChange}
                        />
                        <Question   
                            num='52'
                            handle_NameChange={handleVq52_NameChange}
                            handle_aChange={handleVq52_aChange}
                            handle_bChange={handleVq52_bChange}
                            handle_cChange={handleVq52_cChange} 
                            handle_dChange={handleVq52_dChange}
                            handle_eChange={handleVq52_eChange}
                            handle_correctChange={handleVq52_correctChange}
                        />
                        <Question   
                            num='53'
                            handle_NameChange={handleVq53_NameChange}
                            handle_aChange={handleVq53_aChange}
                            handle_bChange={handleVq53_bChange}
                            handle_cChange={handleVq53_cChange} 
                            handle_dChange={handleVq53_dChange}
                            handle_eChange={handleVq53_eChange}
                            handle_correctChange={handleVq53_correctChange}
                        />
                        <Question   
                            num='54'
                            handle_NameChange={handleVq54_NameChange}
                            handle_aChange={handleVq54_aChange}
                            handle_bChange={handleVq54_bChange}
                            handle_cChange={handleVq54_cChange} 
                            handle_dChange={handleVq54_dChange}
                            handle_eChange={handleVq54_eChange}
                            handle_correctChange={handleVq54_correctChange}
                        />
                        <Question 
                            num='55'
                            handle_NameChange={handleVq55_NameChange}
                            handle_aChange={handleVq55_aChange}
                            handle_bChange={handleVq55_bChange}
                            handle_cChange={handleVq55_cChange} 
                            handle_dChange={handleVq55_dChange}
                            handle_eChange={handleVq55_eChange}
                            handle_correctChange={handleVq55_correctChange}
                        />
                        <Question
                            num='56'
                            handle_NameChange={handleVq56_NameChange}
                            handle_aChange={handleVq56_aChange}
                            handle_bChange={handleVq56_bChange}
                            handle_cChange={handleVq56_cChange} 
                            handle_dChange={handleVq56_dChange}
                            handle_eChange={handleVq56_eChange}
                            handle_correctChange={handleVq56_correctChange}
                        />
                        <Question   
                            num='57'
                            handle_NameChange={handleVq57_NameChange}
                            handle_aChange={handleVq57_aChange}
                            handle_bChange={handleVq57_bChange}
                            handle_cChange={handleVq57_cChange} 
                            handle_dChange={handleVq57_dChange}
                            handle_eChange={handleVq57_eChange}
                            handle_correctChange={handleVq57_correctChange}
                        />
                        <Question   
                            num='58'
                            handle_NameChange={handleVq58_NameChange}
                            handle_aChange={handleVq58_aChange}
                            handle_bChange={handleVq58_bChange}
                            handle_cChange={handleVq58_cChange} 
                            handle_dChange={handleVq58_dChange}
                            handle_eChange={handleVq58_eChange}
                            handle_correctChange={handleVq58_correctChange}
                        />
                        <Question   
                            num='59'
                            handle_NameChange={handleVq59_NameChange}
                            handle_aChange={handleVq59_aChange}
                            handle_bChange={handleVq59_bChange}
                            handle_cChange={handleVq59_cChange} 
                            handle_dChange={handleVq59_dChange}
                            handle_eChange={handleVq59_eChange}
                            handle_correctChange={handleVq59_correctChange}
                        />
                        <Question   
                            num='60'
                            handle_NameChange={handleVq60_NameChange}
                            handle_aChange={handleVq60_aChange}
                            handle_bChange={handleVq60_bChange}
                            handle_cChange={handleVq60_cChange} 
                            handle_dChange={handleVq60_dChange}
                            handle_eChange={handleVq60_eChange}
                            handle_correctChange={handleVq60_correctChange}
                        />
                        <div className="text-right">
                            <Button variant="primary" onClick={handleShowVerbal}>Hide</Button>
                        </div>
                    </>
                    : null
                    }

                    <div className="text-center"><h5>Quantitative 2 Section</h5></div>
                    {!showMath2 ? 
                        <>
                            <div className="text-right">
                                <Button variant="primary" onClick={handleShowMath2}>Show</Button> 
                            </div>
                        </>
                        : null
                    }
                    
                    {showMath2 ? 
                    <>
                    <Question 
                        num='1'
                        handle_NameChange={handleM2q1_NameChange}
                        handle_aChange={handleM2q1_aChange}
                        handle_bChange={handleM2q1_bChange}
                        handle_cChange={handleM2q1_cChange}
                        handle_dChange={handleM2q1_dChange}
                        handle_eChange={handleM2q1_eChange}
                        handle_correctChange={handleM2q1_correctChange}
                        />
                    <Question
                        num='2'
                        handle_NameChange={handleM2q2_NameChange}
                        handle_aChange={handleM2q2_aChange}
                        handle_bChange={handleM2q2_bChange}
                        handle_cChange={handleM2q2_cChange} 
                        handle_dChange={handleM2q2_dChange}
                        handle_eChange={handleM2q2_eChange}
                        handle_correctChange={handleM2q2_correctChange}
                    />
                    <Question   
                        num='3'
                        handle_NameChange={handleM2q3_NameChange}
                        handle_aChange={handleM2q3_aChange}
                        handle_bChange={handleM2q3_bChange}
                        handle_cChange={handleM2q3_cChange} 
                        handle_dChange={handleM2q3_dChange}
                        handle_eChange={handleM2q3_eChange}
                        handle_correctChange={handleM2q3_correctChange}
                    />
                    <Question   
                        num='4'
                        handle_NameChange={handleM2q4_NameChange}
                        handle_aChange={handleM2q4_aChange}
                        handle_bChange={handleM2q4_bChange}
                        handle_cChange={handleM2q4_cChange} 
                        handle_dChange={handleM2q4_dChange}
                        handle_eChange={handleM2q4_eChange}
                        handle_correctChange={handleM2q4_correctChange}
                    />
                    <Question   
                        num='5'
                        handle_NameChange={handleM2q5_NameChange}
                        handle_aChange={handleM2q5_aChange}
                        handle_bChange={handleM2q5_bChange}
                        handle_cChange={handleM2q5_cChange} 
                        handle_dChange={handleM2q5_dChange}
                        handle_eChange={handleM2q5_eChange}
                        handle_correctChange={handleM2q5_correctChange}
                    />
                    <Question   
                        num='6'
                        handle_NameChange={handleM2q6_NameChange}
                        handle_aChange={handleM2q6_aChange}
                        handle_bChange={handleM2q6_bChange}
                        handle_cChange={handleM2q6_cChange} 
                        handle_dChange={handleM2q6_dChange}
                        handle_eChange={handleM2q6_eChange}
                        handle_correctChange={handleM2q6_correctChange}
                    />
                    <Question 
                        num='7'
                        handle_NameChange={handleM2q7_NameChange}
                        handle_aChange={handleM2q7_aChange}
                        handle_bChange={handleM2q7_bChange}
                        handle_cChange={handleM2q7_cChange} 
                        handle_dChange={handleM2q7_dChange}
                        handle_eChange={handleM2q7_eChange}
                        handle_correctChange={handleM2q7_correctChange}
                    />
                    <Question
                        num='8'
                        handle_NameChange={handleM2q8_NameChange}
                        handle_aChange={handleM2q8_aChange}
                        handle_bChange={handleM2q8_bChange}
                        handle_cChange={handleM2q8_cChange} 
                        handle_dChange={handleM2q8_dChange}
                        handle_eChange={handleM2q8_eChange}
                        handle_correctChange={handleM2q8_correctChange}
                    />
                    <Question   
                        num='9'
                        handle_NameChange={handleM2q9_NameChange}
                        handle_aChange={handleM2q9_aChange}
                        handle_bChange={handleM2q9_bChange}
                        handle_cChange={handleM2q9_cChange} 
                        handle_dChange={handleM2q9_dChange}
                        handle_eChange={handleM2q9_eChange}
                        handle_correctChange={handleM2q9_correctChange}
                    />
                    <Question   
                        num='10'
                        handle_NameChange={handleM2q10_NameChange}
                        handle_aChange={handleM2q10_aChange}
                        handle_bChange={handleM2q10_bChange}
                        handle_cChange={handleM2q10_cChange} 
                        handle_dChange={handleM2q10_dChange}
                        handle_eChange={handleM2q10_eChange}
                        handle_correctChange={handleM2q10_correctChange}
                    />
                    <Question   
                        num='11'
                        handle_NameChange={handleM2q11_NameChange}
                        handle_aChange={handleM2q11_aChange}
                        handle_bChange={handleM2q11_bChange}
                        handle_cChange={handleM2q11_cChange} 
                        handle_dChange={handleM2q11_dChange}
                        handle_eChange={handleM2q11_eChange}
                        handle_correctChange={handleM2q11_correctChange}
                    />
                    <Question   
                        num='12'
                        handle_NameChange={handleM2q12_NameChange}
                        handle_aChange={handleM2q12_aChange}
                        handle_bChange={handleM2q12_bChange}
                        handle_cChange={handleM2q12_cChange} 
                        handle_dChange={handleM2q12_dChange}
                        handle_eChange={handleM2q12_eChange}
                        handle_correctChange={handleM2q12_correctChange}
                    />
                    <Question 
                        num='13'
                        handle_NameChange={handleM2q13_NameChange}
                        handle_aChange={handleM2q13_aChange}
                        handle_bChange={handleM2q13_bChange}
                        handle_cChange={handleM2q13_cChange} 
                        handle_dChange={handleM2q13_dChange}
                        handle_eChange={handleM2q13_eChange}
                        handle_correctChange={handleM2q13_correctChange}
                    />
                    <Question
                        num='14'
                        handle_NameChange={handleM2q14_NameChange}
                        handle_aChange={handleM2q14_aChange}
                        handle_bChange={handleM2q14_bChange}
                        handle_cChange={handleM2q14_cChange} 
                        handle_dChange={handleM2q14_dChange}
                        handle_eChange={handleM2q14_eChange}
                        handle_correctChange={handleM2q14_correctChange}
                    />
                    <Question   
                        num='15'
                        handle_NameChange={handleM2q15_NameChange}
                        handle_aChange={handleM2q15_aChange}
                        handle_bChange={handleM2q15_bChange}
                        handle_cChange={handleM2q15_cChange} 
                        handle_dChange={handleM2q15_dChange}
                        handle_eChange={handleM2q15_eChange}
                        handle_correctChange={handleM2q15_correctChange}
                    />
                    <Question   
                        num='16'
                        handle_NameChange={handleM2q16_NameChange}
                        handle_aChange={handleM2q16_aChange}
                        handle_bChange={handleM2q16_bChange}
                        handle_cChange={handleM2q16_cChange} 
                        handle_dChange={handleM2q16_dChange}
                        handle_eChange={handleM2q16_eChange}
                        handle_correctChange={handleM2q16_correctChange}
                    />
                    <Question   
                        num='17'
                        handle_NameChange={handleM2q17_NameChange}
                        handle_aChange={handleM2q17_aChange}
                        handle_bChange={handleM2q17_bChange}
                        handle_cChange={handleM2q17_cChange} 
                        handle_dChange={handleM2q17_dChange}
                        handle_eChange={handleM2q17_eChange}
                        handle_correctChange={handleM2q17_correctChange}
                    />
                    <Question   
                        num='18'
                        handle_NameChange={handleM2q18_NameChange}
                        handle_aChange={handleM2q18_aChange}
                        handle_bChange={handleM2q18_bChange}
                        handle_cChange={handleM2q18_cChange} 
                        handle_dChange={handleM2q18_dChange}
                        handle_eChange={handleM2q18_eChange}
                        handle_correctChange={handleM2q18_correctChange}
                    />
                    <Question 
                        num='19'
                        handle_NameChange={handleM2q19_NameChange}
                        handle_aChange={handleM2q19_aChange}
                        handle_bChange={handleM2q19_bChange}
                        handle_cChange={handleM2q19_cChange} 
                        handle_dChange={handleM2q19_dChange}
                        handle_eChange={handleM2q19_eChange}
                        handle_correctChange={handleM2q19_correctChange}
                    />
                    <Question
                        num='20'
                        handle_NameChange={handleM2q20_NameChange}
                        handle_aChange={handleM2q20_aChange}
                        handle_bChange={handleM2q20_bChange}
                        handle_cChange={handleM2q20_cChange} 
                        handle_dChange={handleM2q20_dChange}
                        handle_eChange={handleM2q20_eChange}
                        handle_correctChange={handleM2q20_correctChange}
                    />
                    <Question   
                        num='21'
                        handle_NameChange={handleM2q21_NameChange}
                        handle_aChange={handleM2q21_aChange}
                        handle_bChange={handleM2q21_bChange}
                        handle_cChange={handleM2q21_cChange} 
                        handle_dChange={handleM2q21_dChange}
                        handle_eChange={handleM2q21_eChange}
                        handle_correctChange={handleM2q21_correctChange}
                    />
                    <Question   
                        num='22'
                        handle_NameChange={handleM2q22_NameChange}
                        handle_aChange={handleM2q22_aChange}
                        handle_bChange={handleM2q22_bChange}
                        handle_cChange={handleM2q22_cChange} 
                        handle_dChange={handleM2q22_dChange}
                        handle_eChange={handleM2q22_eChange}
                        handle_correctChange={handleM2q22_correctChange}
                    />
                    <Question   
                        num='23'
                        handle_NameChange={handleM2q23_NameChange}
                        handle_aChange={handleM2q23_aChange}
                        handle_bChange={handleM2q23_bChange}
                        handle_cChange={handleM2q23_cChange} 
                        handle_dChange={handleM2q23_dChange}
                        handle_eChange={handleM2q23_eChange}
                        handle_correctChange={handleM2q23_correctChange}
                    />
                    <Question   
                        num='24'
                        handle_NameChange={handleM2q24_NameChange}
                        handle_aChange={handleM2q24_aChange}
                        handle_bChange={handleM2q24_bChange}
                        handle_cChange={handleM2q24_cChange} 
                        handle_dChange={handleM2q24_dChange}
                        handle_eChange={handleM2q24_eChange}
                        handle_correctChange={handleM2q24_correctChange}
                    />
                    <Question 
                        num='25'
                        handle_NameChange={handleM2q25_NameChange}
                        handle_aChange={handleM2q25_aChange}
                        handle_bChange={handleM2q25_bChange}
                        handle_cChange={handleM2q25_cChange} 
                        handle_dChange={handleM2q25_dChange}
                        handle_eChange={handleM2q25_eChange}
                        handle_correctChange={handleM2q25_correctChange}
                    />
                    
                    <div className="text-right">
                        <Button variant="primary" onClick={handleShowMath2}>Hide</Button>
                    </div>
                    </>
                    : null
                    }

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