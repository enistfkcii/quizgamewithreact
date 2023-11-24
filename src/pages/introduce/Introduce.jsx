import React, { useState } from "react"
import './Introduce.css'
import Dropdown from "../../components/dropdown/Dropdown"
import { useNavigate } from "react-router-dom"

const Introduce = () => {
    const difficulty = ["easy","medium","hard"]
    const [difficultyChange,setDifficultyChange] = useState("easy")
    const totalQuestions = 10
    const navigate = useNavigate()
    const startQuiz = () => {
        if(difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${totalQuestions}`)
        }
    }



    return (
        <div className="introduce">
            <div className="introduce-container">
                <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/11/13/thumbs_b_c_a762ba8814b8eef0ee150598589a4cc4.jpg" alt=""></img>
                <Dropdown data={difficulty} setDifficultyChange = {setDifficultyChange}></Dropdown>
                <div onClick={startQuiz} className="introduce-btn">Quize Başla</div>
            </div>
        </div>
    )
}
export default Introduce