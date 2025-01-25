import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function Chart(props) {
  return <HighchartsReact highcharts={Highcharts} options={props.options} />;
}

export default Chart;
