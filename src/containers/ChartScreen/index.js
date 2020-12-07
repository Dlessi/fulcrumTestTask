import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {
  LineChart,
} from "react-native-chart-kit";

import { clearChart } from '../../redux/actions';

import styles from './styles';

const screenWidth = Dimensions.get("window").width
const chartBgColor = '#ffffff';
const chartColorFunction = (opacity = 1) => `rgba(138, 138, 138, ${opacity})`;

const chartHorizontalPaddings = 10;

const chartConfig = {
  backgroundColor: chartBgColor,
  backgroundGradientFrom: chartBgColor,
  backgroundGradientTo: chartBgColor,
  color: chartColorFunction,
  labelColor: chartColorFunction,
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: chartBgColor
  }
}

const ChartScreen = (props) => {
  console.log(props.chartList)

  const handleClearButton = () => {
    props.dispatchClearChart();
  }
  
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          datasets: [
            {
              data: props.chartList.data
            }
          ]
        }}
        width={screenWidth - chartHorizontalPaddings}
        height={screenWidth}
        chartConfig={chartConfig}
        bezier
        style={styles.chartStyle}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => (handleClearButton())}
      >
        <Text style={styles.buttonText}>
          {'Clear'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => ({
  chartList: state.chart.chartList
});

const mapDispatchToProps = (dispatch) => ({
  dispatchClearChart: () => (dispatch(clearChart()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen);