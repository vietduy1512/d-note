import * as React from 'react';
import { 
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { fetchNotes, deleteNote } from '../../actions/noteAction'
import { connect } from 'react-redux';


function TodoList(props) {
  React.useEffect(() => {
    props.fetchNotes();
  }, []) // Add [] to stop infinite loop

  let completed = false;
  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={props.notes}
          renderItem={({item, index}) => (
            <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
              <CheckBox
                checked = {completed}
                onPress = {() => props.deleteNote(index)}
              />
              <Text>{item.content}</Text>
                <TouchableOpacity
                  style={{position:'absolute', right: 0, backgroundColor: '#ddd', padding: 10}}
                  onPress={() => props.deleteNote(index)}
                >
                </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.home}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => props.navigation.push('Add Todo')}
        >
          <Image
            style={styles.addButtonImage}    
            source={require('../../../assets/add.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes.items
});

export default connect(mapStateToProps, { fetchNotes, deleteNote })(TodoList);

const styles = StyleSheet.create({
  home: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  addButton: {
    position: 'absolute',
    borderRadius: 40,
    height: 80,
    width: 80,
    padding: 5,
    right: 15,
    bottom: 15
  },
  addButtonImage: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});