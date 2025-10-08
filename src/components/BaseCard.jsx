export const BaseCard = ({ title, children, className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="card-header">{title}</h3>
      {children}
    </div>
  );
}
