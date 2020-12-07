import React, { useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';

import { addChartItem } from '../redux/actions';

const urlWebSockets = 'ws://localhost:8080';

const ws = new WebSocket(urlWebSockets);

const RootContainer = (props) => {

  useEffect(() => {
    
    ws.onopen = () => {
    }

    ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      props.dispatchAddChartItem(message.value)

    }

    ws.onclose = () => {
    }

  }, [])

  return (
    <View/>
  );
}
 const mapStateToProps = () => ({})

 const mapDispatchToProps = (dispatch) => ({
   dispatchAddChartItem: (value) => (dispatch(addChartItem(value)))
 })

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);