import { BaseCard } from "./BaseCard";

export const ColumnCard = ({ title, description, className }) => {
  return (
    <BaseCard title={title} className={`${className}`}>
        {Array.isArray(description) ? (
        <ul className="list">
            {description.map((item, i) => (
                <li key={i} className="card-button-text ">{item}</li>
            ))}
            </ul>
        ) : (
            <p className="text-gray-300">{description}</p>
        )}
    </BaseCard>
  );
}