import "./numbers.css";

const Numbers = () => {
  return (
    <>
      <section className="numbers-container">
        <div className="title">Numbers</div>
        <h2>Referrizer In Numbers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mattis non tellus eget volutpat pulvinar accumsan, dictum eu. </p>
        <div className="numbers">
          <div className="number-stats">
            <div className="number">2008</div>
            <div className="number-title">Year Founded</div>
          </div>
          <div className="number-stats">
            <div className="number">150+</div>
            <div className="number-title">Clients</div>
          </div>
          <div className="number-stats">
            <div className="number">90+</div>
            <div className="number-title">Countries Served</div>
          </div>
          <div className="number-stats">
            <div className="number">100+</div>
            <div className="number-title">Full-time Employees</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Numbers;
