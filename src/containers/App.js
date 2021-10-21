import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Router, Scene, Actions, Stack, Modal } from 'react-native-router-flux'
import { routeName } from '../utils/constants'
import { Component } from 'react';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const scenes = Actions.create(
  <Scene key={routeName.ROOT}>
    <Modal key="modal" hideNavBar>
      <Stack key="Signin" hideNavBar>
        <Scene key={routeName.signin} component={Signin} />
        <Scene key={routeName.signup} component={Signup} />
      </Stack>
    </Modal>
  </Scene>
)

const App: () => Node = () => {
  return (
    <View style={{ flex: 1 }}>
      <Router scenes={scenes}></Router>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
