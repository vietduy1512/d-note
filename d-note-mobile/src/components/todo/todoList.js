import * as React from 'react';
import { Text, View, TouchableOpacity, Alert, Image, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { fetchNotes } from '../../actions/noteAction/'

function TodoList({ navigation }) {
  let [notes, setNotes] = React.useState([{content: 'Default note'}]);

  let updateNotes = async () => {
    // notes = JSON.parse(await AsyncStorage.getItem(NOTE_LIST_DATA));
    // setNotes(notes);
  };
  updateNotes();

  let completed = false;
  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
              <CheckBox
                checked = {completed}
                onPress = {() => Alert.alert('Checked!')}
              />
              <Text>{item.content}</Text>
                <TouchableOpacity
                  style={{position:'absolute', right: 0, backgroundColor: '#ddd', padding: 10}}
                  onPress={() => Alert.alert('Deleted!')}
                >
                </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.home}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Add Todo')}
        >
          <Image
            style={styles.addButtonImage}    
            source={require('./assets/add.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes.items,
  newNote: state.notes.item
});

export default connect(mapStateToProps, { fetchNotes })(TodoList);