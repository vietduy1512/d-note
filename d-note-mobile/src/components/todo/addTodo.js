import * as React from 'react';
import { 
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { addNote } from '../../actions/noteAction'
import { connect } from 'react-redux';


function AddTodo(props) {
  const [content, setContent] = React.useState('');
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
          style={{padding: 15, width: '100%', textAlign: 'center', borderColor: '#8842d5', borderWidth: 1}}
          placeholder="Type your note!"
          onChangeText={(text) => setContent(text)}
          value={content}
        />
      <TouchableOpacity
        style={styles.addButton}
        onPress={async () => {
          props.navigation.goBack();
          props.addNote(content);
        }}
      >
        <Image
          style={styles.addButtonImage}    
          source={require('../../../assets/ok.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes.items
});

export default connect(mapStateToProps, { addNote })(AddTodo);

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
  },
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});