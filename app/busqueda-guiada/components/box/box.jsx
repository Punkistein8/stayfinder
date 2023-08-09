'use client'
import Image from 'next/image'
import { useState } from "react";
export const Box = ({ svg, text, classNameBox, classNameRectangle, classNameSvg, setActualQuestion, actualQuestion, setAnswers, answers, isInServices }) => {

  function handleClick() {
    setActualQuestion(actualQuestion + 1)
    setAnswers([...answers, text])
  }

  function handleClickServices() {
    setselected(!selected)
    if (selected) {
      setAnswers(answers.filter((answer) => answer !== text))
    } else {
      setAnswers([...answers, text])
    }
  }

  const [selected, setselected] = useState(false)

  return (
    <>
      {isInServices ? (
        <div onClick={handleClickServices} className={`select-none cursor-pointer hover:scale-105 transition-all ease-in-out ${classNameBox ? classNameBox : 'w-[210px] h-[256px] border-none'}`}>
          <div className={`bg-[#d9d9d940] rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] ${classNameRectangle ? classNameRectangle : 'h-[256px] w-[210px]'} ${selected && 'bg-[#5DB299]'} hover:bg-[#5DB299] hover:shadow-[0_15px_15px_#00000040] flex flex-col justify-between`} >
            <div className="flex justify-center my-auto">
              <Image src={svg} alt='boton' priority className={`${classNameSvg ? classNameSvg : 'w-32'}`} />
            </div>
            <div className="flex justify-center py-5 text-xl">
              <p>{text}</p>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handleClick} className={`select-none cursor-pointer hover:scale-105 transition-all ease-in-out ${classNameBox ? classNameBox : 'w-[210px] h-[256px] border-none'}`}>
          <div className={`bg-[#d9d9d940] rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] ${classNameRectangle ? classNameRectangle : 'h-[256px] w-[210px]'} hover:bg-[#5DB299] hover:shadow-[0_15px_15px_#00000040] flex flex-col justify-between`} >
            <div className="flex justify-center my-auto">
              <Image src={svg} alt='boton' priority className={`${classNameSvg ? classNameSvg : 'w-32'}`} />
            </div>
            <div className="flex justify-center py-5 text-xl">
              <p>{text}</p>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};
