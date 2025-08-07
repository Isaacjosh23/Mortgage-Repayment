const MortgageOutputs = ({
  monthlyRepayment,
  totalMoneyOverTerm,
  mortgageType,
  interestOnly,
  interestRepaymentOverTerm,
}) => {
  const isMort = mortgageType === "Repayment";

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

          <p className="text-[var(--color-lime)] text-6xl max-sm:text-5xl font-bold">
            {isMort
              ? monthlyRepayment
                ? `£${monthlyRepayment.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : "£0.00"
              : interestOnly
              ? `£${interestOnly.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
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
                ? `£${totalMoneyOverTerm.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : "£0.00"
              : interestRepaymentOverTerm
              ? `£${interestRepaymentOverTerm.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : "£0.00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageOutputs;
