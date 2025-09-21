

export const ButtonSelector = ({options, selected, callback}) => {
    return (
    <div className="button-selector-container">
      {options.map((opt) => (
        <button 
            key={opt}
        >
            <span className="interactable-text text-[20px] cursor-pointer"
              onClick={() => {
              callback(opt);
            }}
            >
              {opt}
            </span>
        </button>
      ))}
    </div>
  );
};