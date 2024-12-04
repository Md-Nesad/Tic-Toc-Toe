export default function Square({ value, onSquareClick }) {
  return (
    <div>
      <button
        onClick={onSquareClick}
        className={
          value === "X" ? "text-white square" : "text-green-400 square"
        }
      >
        <h1>{value}</h1>
      </button>
    </div>
  );
}
