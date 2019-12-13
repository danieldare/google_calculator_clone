import React from 'react'
import CalculatorButtons from './CalculatorButtons/CalculatorButtons'
import DisplayBox from './DisplayBox/DisplayBox'
import classes from './Calculator.module.css'

function Calculator() {
  return (
    <div className={classes.calculator}>
      <DisplayBox />
      <CalculatorButtons />
    </div>
  )
}

export default Calculator
