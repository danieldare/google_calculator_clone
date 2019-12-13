import React from 'react'
import classes from './CalculatorButtons.module.css'

const CalculatorButtons = () => {
  return (
    <div className={classes.calcultor_buttons}>
      <div className={classes.tri_operations}>
        <button className={classes.btn} value="1">
          Rad
        </button>
        <button className={classes.btn} value="1">
          Deg
        </button>
        <button className={classes.btn} value="1">
          x!
        </button>
        <button className={classes.btn} value="1">
          Inv
        </button>
        <button className={classes.btn} value="1">
          sin
        </button>
        <button className={classes.btn} value="1">
          In
        </button>
        <button className={classes.btn} value="1">
          Pie
        </button>
        <button className={classes.btn} value="1">
          cos
        </button>
        <button className={classes.btn} value="1">
          log
        </button>
        <button className={classes.btn} value="1">
          e
        </button>
        <button className={classes.btn} value="1">
          tan
        </button>
        <button className={classes.btn} value="1">
          sqroot
        </button>
        <button className={classes.btn} value="1">
          Ans
        </button>
        <button className={classes.btn} value="1">
          EXP
        </button>
        <button className={classes.btn} value="1">
          X
        </button>
      </div>
      <div className={classes.basic_operations}>
        <button className={classes.btn} value="1">
          (
        </button>
        <button className={classes.btn} value="1">
          )
        </button>
        <button className={classes.btn} value="1">
          %
        </button>
        <button className={classes.btn} value="1">
          AC
        </button>
        <button className={classes.btn_num} value="1">
          7
        </button>
        <button className={classes.btn_num} value="1">
          8
        </button>
        <button className={classes.btn_num} value="1">
          9
        </button>
        <button className={classes.btn} value="1">
          /
        </button>
        <button className={classes.btn_num} value="1">
          4
        </button>
        <button className={classes.btn_num} value="1">
          5
        </button>
        <button className={classes.btn_num} value="1">
          6
        </button>
        <button className={classes.btn} value="1">
          x
        </button>
        <button className={classes.btn_num} value="1">
          1
        </button>
        <button className={classes.btn_num} value="1">
          2
        </button>
        <button className={classes.btn_num} value="1">
          3
        </button>
        <button className={classes.btn} value="1">
          --
        </button>
        <button className={classes.btn_num} value="1">
          0
        </button>
        <button className={classes.btn_num} value="1">
          .
        </button>
        <button className={classes.btn_equal} value="1">
          =
        </button>
        <button className={classes.btn} value="1">
          +
        </button>
      </div>
    </div>
  )
}

export default CalculatorButtons
