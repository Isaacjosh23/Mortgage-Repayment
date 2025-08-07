import MortgageHeader from "./MortgageHeader";

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
  fieldError,
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
            inputMode="decimal"
            pattern="^\d*\.?\d*$"
            value={
              mortgageAmount
                ? Number(mortgageAmount.replace(/,/g, "")).toLocaleString()
                : ""
            }
            onChange={(e) => {
              const rawValue = e.target.value.replace(/,/g, "");

              if (rawValue === "" || /^\d*\.?\d*$/.test(rawValue)) {
                setMortgageAmount(rawValue);
              }
            }}
            className={`w-full mortgage-amount text-[1.2rem] font-semibold text-[var(---color-slate-900)] relative ${
              fieldError && !mortgageAmount ? "error-border" : ""
            }`}
          />

          <span className="text-[1.3rem] text-[var(--color-slate-900)] font-semibold absolute input-icons">
            £
          </span>

          {fieldError && !mortgageAmount && (
            <span className="error inline-block text-red-500 text-[1.2rem] font-semibold">
              This field is required
            </span>
          )}
        </div>

        <div className="flex max-sm:flex-col max-sm:items-stretch items-center justify-between">
          <div className="period-interest relative">
            <label className="text-[1.2rem] text-[var(--color-slate-700)] font-semibold block">
              Mortgage Term
            </label>
            <input
              type="text"
              inputMode="decimal"
              pattern="^\d*\.?\d*$"
              value={mortgageTerm}
              onChange={(e) => {
                if (
                  e.target.value === "" ||
                  /^\d*\.?\d*$/.test(e.target.value)
                ) {
                  setMortgageTerm(e.target.value);
                }
              }}
              className={`text-[1.2rem] font-semibold text-[var(---color-slate-900)] mortgage-term ${
                fieldError && !mortgageTerm ? "error-border" : ""
              }`}
            />

            {fieldError && !mortgageTerm && (
              <span className="error inline-block text-red-500 text-[1.2rem] font-semibold">
                This field is required
              </span>
            )}

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
                inputMode="decimal"
                pattern="^\d*\.?\d*$"
                value={interestRate}
                onChange={(e) => {
                  if (
                    e.target.value === "" ||
                    /^\d*\.?\d*$/.test(e.target.value)
                  ) {
                    setInterestRate(e.target.value);
                  }
                }}
                className={`text-[1.2rem] font-semibold text-[var(---color-slate-900)] mortgage-rate ${
                  fieldError && !interestRate ? "error-border" : ""
                }`}
              />
            </div>

            {fieldError && !interestRate && (
              <span className="error inline-block text-red-500 text-[1.2rem] font-semibold">
                This field is required
              </span>
            )}

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

export default MortgageInputs;
