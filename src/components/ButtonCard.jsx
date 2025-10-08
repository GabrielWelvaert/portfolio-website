import { BaseCard } from "./BaseCard";

export const ButtonCard = ({ title, description, className  }) => {
  return (
    <BaseCard title={title} className={`${className}`}>
      {Array.isArray(description) ? (
        <div className="flex flex-wrap gap-2 justify-center">
          {description.map((item, i) => (
            <span
              key={i}
              className="small-button-text"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-300">{description}</p>
      )}
    </BaseCard>
  );
};