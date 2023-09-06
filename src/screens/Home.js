import React from 'react'
import { List } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'

const Home = ({ navigation }) => {

  const navigate = (route) => navigation.navigate(route)
  return (
    <View styles={{ flex: 1 }}>
      <List.Accordion
        title="Bottom Tab Navigation"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Animatable Tab2" onPress={() => navigate('Tab2')} />
        {/* <List.Item title="Animatable Tab1" onPress={() => navigate('Tab1')} /> */}
        {/* <List.Item title="Animatable Tab3" onPress={() => navigate('Tab3')} /> */}
        {/* <List.Item title="Animatable Tab4" onPress={() => navigate('Tab4')} /> */}
        {/* <List.Item title="Animatable Tab5" onPress={() => navigate('Tab5')} /> */}
      </List.Accordion>
      <List.Accordion
        title="List Animation"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Contacts Screen" onPress={() => navigate('Contacts')} />
        <List.Item title="List Screen" onPress={() => navigate('List')} />
        <List.Item title="Products Screen" onPress={() => navigate('Products')} />
      </List.Accordion>
      <List.Accordion
        title="Floating Action Button"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Animated Fab" onPress={() => navigate('Fab')} />
      </List.Accordion>
      <List.Accordion
        title="Drawer Navigation"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Drawer 1" onPress={() => navigate('Drawer1')} />
      </List.Accordion>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
