export const BaseCard = ({ title, children }) => {
  return (
    <div className={`card-item`}>
      <h3 className="card-header">{title}</h3>
      {children}
    </div>
  );
}
