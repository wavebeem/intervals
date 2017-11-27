import { Vibration } from "react-native";

// Milisecond durations
const S = 100;
const M = 300;
const L = 600;

// Starts with wait time, goes to vibrate time, etc
// wait-vibrate-wait-vibrate-...
const up = [S, M, S, M, S, M, S, L];
const down = [S, L, M, L];
const done = [S, L, S, L, S, L];

export function speedUp() {
  Vibration.vibrate(up);
}

export function slowDown() {
  Vibration.vibrate(down);
}

export function allDone() {
  Vibration.vibrate(done);
}
