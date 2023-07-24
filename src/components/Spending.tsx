const Spending = () => {
  const days = [
    { day: "mon", amount: 30, color: "hsl(10, 79%, 65%)" },
    { day: "tue", amount: 60, color: "hsl(10, 79%, 65%)" },
    { day: "wed", amount: 90, color: "hsl(186, 34%, 60%)" },
    { day: "thu", amount: 45, color: "hsl(10, 79%, 65%)" },
    { day: "fri", amount: 38, color: "hsl(10, 79%, 65%)" },
    { day: "sat", amount: 70, color: "hsl(10, 79%, 65%)" },
    { day: "sun", amount: 45, color: "hsl(10, 79%, 65%)" },
  ];

  function bars({ day, amount, color }) {
    return (
      <div className="bar" key={day}>
        <div
          className="imBar"
          style={{ height: `${amount}px`, backgroundColor: `${color}` }}
        ></div>
        <p>{day}</p>
      </div>
    );
  }

  return (
    <div className="spending">
      <p className="header">Spending - Last 7 days</p>
      <div className="graph">{days.map((day) => bars(day))}</div>
      <div className="divider"></div>
      <p className="total">Total this month</p>
      <div className="summary">
        <h2 className="amt">$478.33</h2>
        <div className="change">
          <p>+2.4%</p>
          <p className="text">from last month</p>
        </div>
      </div>
    </div>
  );
};
export default Spending;
