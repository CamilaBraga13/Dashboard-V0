import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";

function Dashboard() {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    // Configuração inicial do gráfico
    setChartOptions({
      title: { text: "Meu Primeiro Gráfico" },
      series: [{ data: [10, 20, 30, 40, 50] }],
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {chartOptions && <Chart options={chartOptions} />}
    </div>
  );
}

export default Dashboard;
