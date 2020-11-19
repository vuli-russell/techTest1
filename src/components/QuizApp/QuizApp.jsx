import React, { useState } from "react";
import styles from "./QuizApp.module.scss";
import { useForm } from "react-hook-form";

const QuizApp = () => {
  const { register, handleSubmit, errors} = useForm();

  const onSubmit = data => {
    setResponse(data.answer.match(/kanye/i)? true : data.answer);
  }

  const [response, setResponse] = useState(null)

  return (
    <>
      <main className={styles.quiz}>
        <h1>Genius Quiz 2020</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="answer">Who is the foremost World Genius Right Now?</label>
          <br/>
          <input type="text" name="answer" id="answer" ref={register({required: true})}/>
          {errors.answer && <span>Please enter an answer</span>}
          <br/>
          <input type="submit"/>
        </form>
        {
          response===true ? 
          <div className={`${styles.answer} ${styles.right}`}>
            🌊Correct, Kayne is pretty much god🌊
          </div>
          :
          response ?
          <div className={`${styles.answer} ${styles.wrong}`}>
            {`${response} is not the foremost genius right now - please try again`}
          </div>
          :
          null
        }
      </main>
    </>
  );
};

export default QuizApp;
