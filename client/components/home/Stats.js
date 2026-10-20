export default function Stats({ stats }) {
  if (!stats || !stats.totalWishes) {
    return <p className="stats-empty">Be the first to leave a wish.</p>;
  }

  const items = [
    { label: "Wishes", value: stats.totalWishes },
    { label: "Countries", value: stats.totalCountries },
    { label: "Languages", value: stats.totalLanguages },
  ];

  return (
    <ul className="stats">
      {items.map((item) => (
        <li key={item.label} className="stat">
          <span className="stat-value">{item.value.toLocaleString()}</span>
          <span className="stat-label">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}