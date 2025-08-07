import { useState } from "react";

const App = () => {
  return <MortgageRepayment />;
};

const MortgageRepayment = () => {
  const [empty, setEmpty] = useState(true);

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

      return;
    }

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
    <div className="grid grid-cols-[49rem_49rem] rounded-3xl bg-white">
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

const MortgageInputs = ({
  mortgageAmount,
  setMortgageAmount,
  mortgageTerm,
  setMortgageTerm,
  interestRate,
  setInterestRate,
  mortgageType,
  setMortgageType,
  onCalculate,
  onClear,
}) => {
  return (
    <div className="mortgage-inputs flex flex-col justify-center gap-11">
      <MortgageHeader onClear={onClear} />

      <form className="flex flex-col gap-6">
        <div className="relative">
          <label className="text-[1.2rem] text-[var(--color-slate-700)] font-semibold block">
            Mortgage Amount
          </label>

          <input
            type="text"
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
            className="w-full mortgage-amount text-[1.2rem] font-semibold text-[var(---color-slate-900)] relative"
          />

          <span className="text-[1.3rem] text-[var(--color-slate-900)] font-semibold absolute input-icons">
            £
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="period-interest relative">
            <label className="text-[1.2rem] text-[var(--color-slate-700)] font-semibold block">
              Mortgage Term
            </label>
            <input
              type="text"
              value={mortgageTerm}
              onChange={(e) => setMortgageTerm(e.target.value)}
              className="text-[1.2rem] font-semibold text-[var(---color-slate-900)] mortgage-term"
            />

            <span className="text-[1.3rem] text-[var(--color-slate-900)] font-semibold absolute input-icons input-icons-term">
              years
            </span>
          </div>

          <div className="period-interest relative">
            <label className="text-[1.2rem] text-[var(--color-slate-700)] font-semibold block">
              Interest Rate
            </label>
            <div className="overflow-hidden">
              <input
                type="text"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="text-[1.2rem] font-semibold text-[var(---color-slate-900)] mortgage-rate"
              />
            </div>

            <span className="text-[1.3rem] text-[var(--color-slate-900)] font-semibold absolute input-icons input-icons-rate">
              %
            </span>
          </div>
        </div>

        <div>
          <label className="text-[1.2rem] text-[var(--color-slate-700)] font-semibold block">
            Mortgage Type
          </label>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 input-radio">
              <input
                type="radio"
                className="cursor-pointer"
                name="mortgageType"
                value="Repayment"
                checked={mortgageType === "Repayment"}
                onChange={(e) => setMortgageType(e.target.value)}
              />
              <span className="text-[1.2rem] font-bold text-inherit">
                Repayment
              </span>
            </div>

            <div className="flex items-center gap-5 input-radio">
              <input
                type="radio"
                className="cursor-pointer"
                name="mortgageType"
                value="Interest Only"
                checked={mortgageType === "Interest Only"}
                onChange={(e) => setMortgageType(e.target.value)}
              />
              <span className="text-[1.2rem] font-bold text-inherit">
                Interest Only
              </span>
            </div>
          </div>
        </div>
      </form>

      <button
        className="flex items-center justify-center gap-4 w-96 btn-calc bg-[var(--color-lime)] rounded-full text-[1.3rem] hover:bg-[#e6ed7b] font-bold cursor-pointer"
        onClick={onCalculate}
      >
        <img src="/assets/images/icon-calculator.svg" alt="calculator icon" />
        <p>Calculate Repayments</p>
      </button>
    </div>
  );
};

const MortgageOutputs = ({
  monthlyRepayment,
  totalMoneyOverTerm,
  mortgageType,
  interestOnly,
  interestRepaymentOverTerm,
}) => {
  const isMort = mortgageType === "Repayment";
  // const isInterest = interestOnly && isMort;
  // const isRepayment = monthlyRepayment && isMort;

  return (
    <div className="flex flex-col gap-14 w-full mortgage-outputs bg-[var(--color-slate-900)] text-white">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold text-[var(--color-slate-100)]">
          Your results
        </h3>

        <p className="text-[1.2rem] font-normal text-[var(--color-slate-100)]">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again
        </p>
      </div>

      <div className="flex flex-col gap-8 bg-[var(--color-slate-1000)] rounded-2xl output-results">
        <div className="flex flex-col gap-4">
          <span className="block text-[var(--color-slate-100)] text-[1.2rem]">
            {isMort ? `Your monthly repayments` : "Your monthly Interests"}
          </span>

          <p className="text-[var(--color-lime)] text-6xl font-bold">
            {isMort
              ? monthlyRepayment
                ? `£${monthlyRepayment.toFixed(2)}`
                : "£0.00"
              : interestOnly
              ? `£${interestOnly.toFixed(2)}`
              : "£0.00"}

            {/* {monthlyRepayment ? `£${monthlyRepayment.toFixed(2)}` : "£0.00"} */}
          </p>
        </div>

        <hr className="text-[var(--color-slate-900)]" />

        <div className="flex flex-col gap-4">
          <span className="block text-[var(--color-slate-100)] text-[1.2rem]">
            {isMort
              ? `Total you'll repay over the term`
              : "Total interest you'll pay over the term"}
          </span>

          <p className="text-2xl font-bold">
            {isMort
              ? totalMoneyOverTerm
                ? `£${totalMoneyOverTerm.toFixed(2)}`
                : "£0.00"
              : interestRepaymentOverTerm
              ? `£${interestRepaymentOverTerm.toFixed(2)}`
              : "£0.00"}
          </p>
        </div>
      </div>
    </div>
  );
};

const MortgageHeader = ({ onClear }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-2xl text-[var(--color-slate-900)] font-bold">
        Mortgage Calculator
      </h3>

      <button
        onClick={onClear}
        className="underline text-[var(--color-slate-700)] hover:text-[var(--color-slate-900)] hover:font-medium text-[1.2rem] cursor-pointer clear-btn"
      >
        Clear All
      </button>
    </div>
  );
};

const MortgageEmpty = () => {
  return (
    <div className=" flex flex-col gap-12 items-center justify-center bg-[var(--color-slate-900)] mortgage-empty">
      <div>
        <img
          src="/assets/images/illustration-empty.svg"
          alt="Empty Illustration"
        />
      </div>

      <div className="flex flex-col text-center gap-7 text-[var(--color-slate-100)]">
        <h3 className="text-2xl font-semibold">Results shown here</h3>

        <p className="text-[1.2rem] font-normal">
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be
        </p>
      </div>
    </div>
  );
};

export default App;
