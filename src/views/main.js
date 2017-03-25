import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native'
import {
  ProgramListItem,
  ListSeparator
} from '../components'

import routes from '../routes'
import programs from '../../data/programs.json'

export default function Main ({ route, detailRoute, navigator }) {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const dataSource = ds.cloneWithRows(programs)
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Programs
      </Text>
      <ListView
        style={styles.list}
        dataSource={dataSource}
        renderRow={(program) =>
          <ProgramListItem
            program={program}
            onSelect={onSelect(program, navigator)} />}
        renderSeparator={renderSeperator}>
      </ListView>
    </View>
  )
}

function onSelect (program, navigator) {
  return () =>
    navigator.push({
      ...routes.detail,
      props: {
        program
      }
    })
}

function renderSeperator (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
  return <ListSeparator key={`${sectionID}-${rowID}`} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  h1: {
    fontSize: 28,
    textAlign: 'center',
    margin: 20
  },
  list: {
    margin: 10
  }
})
