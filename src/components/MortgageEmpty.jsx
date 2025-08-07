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

export default MortgageEmpty;
