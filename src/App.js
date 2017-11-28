import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Platform,
  Dimensions
} from "react-native";
import moment from "moment";
import * as MC from "material-colors";

import * as vibe from "./vibe";

export default class App extends React.Component {
  state = {
    intervalID: undefined,
    startTime: undefined,
    timerText: "00:00",
    buttonColor: MC.red[400]
  };

  render() {
    const { statusBarOffset, timerText, buttonColor } = this.state;
    return (
      <SafeAreaView style={[styles.container, styles.debugBorder]}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text style={[styles.timerText, styles.monospace, styles.debugBorder]}>
          {timerText}
        </Text>
        <View style={[styles.flex1, styles.spaceBetween]}>
          <Button
            title="Start run"
            color={buttonColor}
            onPress={this.onStartRun}
          />
          <Button title="Speed up" color={buttonColor} onPress={vibe.speedUp} />
          <Button
            title="Slow down"
            color={buttonColor}
            onPress={vibe.slowDown}
          />
          <Button title="All done" color={buttonColor} onPress={vibe.allDone} />
        </View>
      </SafeAreaView>
    );
  }

  onStartRun = () => {
    // vibe.speedUp();
    // vibe.slowDown();
    // vibe.allDone();
    this.setState({
      startTime: new Date(),
      intervalID: setInterval(this.tick, 500),
      buttonColor: MC.blue[400]
    });
  };

  stopTimer() {
    const { intervalID } = this.state;
    if (intervalID) {
      clearInterval(intervalID);
    }
    // vibe.speedUp();
    // vibe.slowDown();
    vibe.allDone();
    this.setState({
      timerText: "00:00",
      intervalID: undefined
    });
  }

  tick = () => {
    const now = new Date();
    const duration = now - this.state.startTime;
    const remaining = 2 * 1000 - duration;
    if (remaining <= 0) {
      vibe.allDone();
      this.stopTimer();
    } else {
      const format = moment.utc(remaining).format("mm:ss");
      this.setState({ timerText: format });
    }
  };
}

const styles = StyleSheet.create({
  debugBorder: {
    borderWidth: 0,
    borderColor: "gold"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  flex1: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  timerText: {
    fontSize: 80,
    marginBottom: 20,
    color: "white"
  },
  monospace: Platform.select({
    android: {
      fontFamily: "Roboto"
    },
    ios: {
      fontFamily: "Avenir"
    }
  })
});
