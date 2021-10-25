import React from 'react';
import type { Node } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Router, Scene, Actions, Stack, Modal } from 'react-native-router-flux'
import { routeName } from '../utils/constants'
import { Provider } from 'react-redux';
import { Provider as ANTDRNProvider } from '@ant-design/react-native'
import store from '../reduxTKL/store'
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Loading from '../components/Loading';

const scenes = Actions.create(
  <Scene key={routeName.ROOT}>
    {/* <Modal key="modal" hideNavBar> */}
    <Stack key="Signin" hideNavBar>
      <Scene key={routeName.signin} component={Signin} />
      <Scene key={routeName.signup} component={Signup} />
    </Stack>
    {/* </Modal> */}
  </Scene>
)

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <ANTDRNProvider>
          <Router scenes={scenes}></Router>
        </ANTDRNProvider>
        <Loading />
      </View>
    </Provider >
  );
};

const styles = StyleSheet.create({

});

export default App;
