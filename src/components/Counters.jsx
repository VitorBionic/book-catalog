function Counters({ total, filtered }) {
  return (
    <div class="counters">
      <h3>Total: {total}</h3>
      <span style={{ margin: "0 20px" }}>|</span>
      <h3>Filtrados: {filtered}</h3>
    </div>
  );
}

export default Counters;
