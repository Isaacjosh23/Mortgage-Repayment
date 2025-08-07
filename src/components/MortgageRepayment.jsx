import { useState } from "react";
import MortgageEmpty from "./MortgageEmpty";
import MortgageInputs from "./MortgageInputs";
import MortgageOutputs from "./MortgageOutputs";

const MortgageRepayment = () => {
  const [empty, setEmpty] = useState(true);

  // Error State
  const [fieldError, setFieldError] = useState(false);

  // States to Controll and Calculate the values
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("Repayment");

  // States To Display Values
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalMoneyOverTerm, setTotalMoneyOverTerm] = useState(0);
  const [interestOnly, setInterestOnly] = useState(0);
  const [interestRepaymentOverTerm, setInterestRepaymentOverTerm] = useState(0);

  // Function To Calculate
  const handleCalculate = () => {
    if (!mortgageAmount || !mortgageTerm || !interestRate) {
      setEmpty(true);
      setFieldError(true);

      return;
    }
    setFieldError(false);

    const principal = Number(mortgageAmount);
    const changeToPercent = Number(interestRate / 100);
    const monthlyInterestRate = changeToPercent / 12;
    const totalMonthlyPayments = Number(mortgageTerm) * 12;

    const numerator =
      monthlyInterestRate * (1 + monthlyInterestRate) ** totalMonthlyPayments;

    const denominator = (1 + monthlyInterestRate) ** 300 - 1;

    // Repayment Option
    const monthlyRepayment = principal * (numerator / denominator);

    const totalMoneyOverTermCalc = monthlyRepayment * totalMonthlyPayments;

    // Interest only Option
    const interestOnlyCalc = principal * monthlyInterestRate;
    const interestRepaymentOverTermCalc =
      interestOnlyCalc * totalMonthlyPayments;

    setMonthlyRepayment(monthlyRepayment);
    setTotalMoneyOverTerm(totalMoneyOverTermCalc);
    setInterestOnly(interestOnlyCalc);
    setInterestRepaymentOverTerm(interestRepaymentOverTermCalc);
    setEmpty(false);
  };

  const handleClear = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("Repayment");

    setMonthlyRepayment(0);
    setTotalMoneyOverTerm(0);
    setInterestOnly(0);
    setInterestRepaymentOverTerm(0);
    setEmpty(true);
  };

  return (
    <div className="grid grid-cols-[49rem_49rem] max-sm:grid-cols-[30rem] rounded-3xl mortgage-repayment bg-white">
      <MortgageInputs
        mortgageAmount={mortgageAmount}
        setMortgageAmount={setMortgageAmount}
        mortgageTerm={mortgageTerm}
        setMortgageTerm={setMortgageTerm}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
        mortgageType={mortgageType}
        setMortgageType={setMortgageType}
        onCalculate={handleCalculate}
        onClear={handleClear}
        fieldError={fieldError}
      />

      {empty ? (
        <MortgageEmpty />
      ) : (
        <MortgageOutputs
          monthlyRepayment={monthlyRepayment}
          totalMoneyOverTerm={totalMoneyOverTerm}
          mortgageType={mortgageType}
          interestOnly={interestOnly}
          interestRepaymentOverTerm={interestRepaymentOverTerm}
        />
      )}
    </div>
  );
};

export default MortgageRepayment;
