import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";

import { withStyles } from "@material-ui/core/styles";
import { EventTracker } from "@devexpress/dx-react-chart";
import { Animation } from "@devexpress/dx-react-chart";
import { resources as data } from "../asset/ChartData";

const legendStyles = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row",
  },
});
const legendLabelStyles = (theme) => ({
  label: {
    paddingTop: theme.spacing(1),
    whiteSpace: "nowrap",
  },
});
const legendItemStyles = () => ({
  item: {
    flexDirection: "column",
  },
});

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
  legendLabelBase
);
const Item = withStyles(legendItemStyles, { name: "LegendItem" })(
  legendItemBase
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <PieSeries valueField="value" argumentField="resource" />
          <Legend
            position="bottom"
            rootComponent={Root}
            itemComponent={Item}
            labelComponent={Label}
          />

          <Title text="REVENUE RESOURCES" />
          <EventTracker />
          <Tooltip />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
