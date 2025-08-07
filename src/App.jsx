import { useState } from "react";

const App = () => {
  return <MortgageRepayment />;
};

const MortgageRepayment = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const principal = Number(mortgageAmount);
  const changeToPercent = Number(interestRate / 100);
  const monthlyInterestRate = changeToPercent / 12;
  const totalMonthlyPayments = Number(mortgageTerm) * 12;

  const numerator =
    monthlyInterestRate * (1 + monthlyInterestRate) ** totalMonthlyPayments;

  const denominator = (1 + monthlyInterestRate) ** 300 - 1;

  const monthlyRepayment = principal * (numerator / denominator);

  const totalMoneyOverTerm = monthlyRepayment * totalMonthlyPayments;

  console.log(numerator, denominator, monthlyRepayment);

  return (
    <div className="grid grid-cols-[49rem_49rem] rounded-3xl bg-white">
      <MortgageInputs
        mortgageAmount={mortgageAmount}
        setMortgageAmount={setMortgageAmount}
        mortgageTerm={mortgageTerm}
        setMortgageTerm={setMortgageTerm}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
      />

      <MortgageOutputs
        monthlyRepayment={monthlyRepayment}
        totalMoneyOverTerm={totalMoneyOverTerm}
      />
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
}) => {
  return (
    <div className="mortgage-inputs flex flex-col justify-center gap-11">
      <MortgageHeader />

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
              <input type="radio" className="cursor-pointer" />
              <span className="text-[1.2rem] font-bold text-inherit">
                Repayment
              </span>
            </div>

            <div className="flex items-center gap-5 input-radio">
              <input type="radio" className="cursor-pointer" />
              <span className="text-[1.2rem] font-bold text-inherit">
                Interest Only
              </span>
            </div>
          </div>
        </div>
      </form>

      <button className="flex items-center justify-center gap-4 w-96 btn-calc bg-[var(--color-lime)] rounded-full text-[1.3rem] font-bold cursor-pointer">
        <img src="/assets/images/icon-calculator.svg" alt="calculator icon" />
        <p>Calculate Repayments</p>
      </button>
    </div>
  );
};

const MortgageOutputs = ({ monthlyRepayment, totalMoneyOverTerm }) => {
  return (
    <div className="flex flex-col gap-14 w-full mortgage-outputs bg-[var(--color-slate-900)] text-white">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">Your results</h3>

        <p className="text-[1.2rem] font-normal text-[var(--color-slate-100)]">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again
        </p>
      </div>

      <div className="flex flex-col gap-8 bg-[var(--color-slate-1000)] rounded-2xl output-results">
        <div className="flex flex-col gap-4">
          <span className="block text-[var(--color-slate-100)] text-[1.2rem]">
            Your monthly repayments
          </span>

          <p className="text-[var(--color-lime)] text-6xl font-bold">
            {monthlyRepayment ? `£${monthlyRepayment.toFixed(2)}` : "£0.00"}
          </p>
        </div>

        <hr className="text-[var(--color-slate-900)]" />

        <div className="flex flex-col gap-4">
          <span className="block text-[var(--color-slate-100)] text-[1.2rem]">
            Total you'll repay over the term
          </span>

          <p className="text-2xl font-bold">
            {totalMoneyOverTerm ? `£${totalMoneyOverTerm.toFixed(2)}` : "£0.00"}
          </p>
        </div>
      </div>
    </div>
  );
};

const MortgageHeader = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-2xl text-[var(--color-slate-900)] font-bold">
        Mortgage Calculator
      </h3>

      <button className="underline text-[var(--color-slate-700)] text-[1.2rem] cursor-pointer">
        Clear All
      </button>
    </div>
  );
};

export default App;
