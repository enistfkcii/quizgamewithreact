import React, { useEffect, useState } from "react"
import "./Quiz.css"
import { useParams } from "react-router-dom"
import * as api from '../../api/api'
import QuestionCard from "../../components/QuestionCard/QuestionCard"
import Modal from "../../components/modal/Modal.jsx"
const Quiz2 = () => {
    const {difficulty,amount} = useParams()
    const [questionsData,setQuestionsData] = useState([])
    const [score,setScore] = useState(0)
    const [count,setCount] = useState(0)
    const [modal,setModal] = useState(false)

    useEffect(() => {
        const getData = async() => {
            const data = await api.fetchQuizData(difficulty,amount);
            setQuestionsData(data);
            
        }
        getData()   
    },[])

     




    return (
        <div className="quiz">
            {
                modal
                ? <Modal score={score}></Modal> 
                :<QuestionCard
                questionsData={questionsData}
                 score={score}
                 setScore={setScore}
                 count={count}
                 setCount={setCount}
                 modal={modal}
                 setModal={setModal}>               
                </QuestionCard>
            }

        </div>
    )
}
export default Quiz2