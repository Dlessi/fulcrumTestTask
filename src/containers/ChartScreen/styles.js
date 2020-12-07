import { StyleSheet } from "react-native";

const mainBgColor = '#ffffff'
const buttonBgColor = '#F5F5F5'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainBgColor
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: buttonBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30
  },
  buttonText: {
    fontSize: 15
  },
  chartStyle: {
    marginRight: 10,
    borderRadius: 16
  }
});

export default styles;