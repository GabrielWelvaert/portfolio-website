

export const ButtonSelector = ({options, selected, callback}) => {
    return (
    <div className="button-selector-container">
      {options.map((opt) => (
        <button 
            className={`${selected === opt ? "button-selector-selected-item" : "button-selector-item"}`}
            // className="button-selector-item"
            key={opt}
            onClick={() => {
              callback(opt);
              console.log(opt);
            }}
        >
            <span className="passage-text">
              {opt}
            </span>
        </button>
      ))}
    </div>
  );
};