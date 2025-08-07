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

export default MortgageHeader;
