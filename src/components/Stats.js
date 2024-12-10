import React from 'react';

const Stats = () => {
  return (
    <section id="stats" className="s-stats">
      <div className="row stats block-1-4 block-m-1-2 block-mob-full">
        <div className="col-block stats__col">
          <div className="stats__count">129</div>
          <h5>Awards Received</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">1507</div>
          <h5>Cups of Coffee</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">108</div>
          <h5>Projects Completed</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">103</div>
          <h5>Happy Clients</h5>
        </div>
      </div>
    </section>
  );
};

export default Stats;
