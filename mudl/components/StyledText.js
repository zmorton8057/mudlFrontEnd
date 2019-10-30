import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

export function GoldenHillsText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'golden-hills' }]} />
  );
}

export function HangoverBrushText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'hangover-brush' }]} />
  );
}

export function RobotoLightTest(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'roboto-light' }]} />
  );
}

export function RobotoRegularText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'roboto-regular' }]} />
  );
}