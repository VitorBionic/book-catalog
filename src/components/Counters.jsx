function Counters({total, filtered}) {
  return(
    <div class="counters">
      <p>Total: {total}</p>
      <span style={{margin: "0 20px"}}>|</span>
      <p>Filtrados: {filtered}</p>
    </div>
  )
}

export default Counters