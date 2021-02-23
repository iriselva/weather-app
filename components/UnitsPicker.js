import React, {useState} from 'react'
import { View, StyleSheet, Modal, Text, Pressable, Alert } from 'react-native'
import { colors } from '../utils/colors'

const { PRIMARY_COLOR, SECONDARY_COLOR, TRI_COLOR } = colors


export default function UnitsPicker({unitsSystem, setUnitsSystem}) {
    const [modalVisible, setModalVisible] = useState(false);
    /* change button title dependent on units being used */
    const unitsTitle = unitsSystem === 'metric' ? '°C' : '°F';
    
    /* Modal for changing from Celcius to Farenheit */
    return (
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          selectedValue={unitsSystem} 
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setUnitsSystem(!unitsSystem);
          }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/* Closing modal button */}
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.buttonText}>✕</Text>
                    </Pressable>
                    <Text style={styles.modalText}>Change unit measurement</Text>
                    {/* Changing to Celcius */}
                    <Pressable
                        style={[styles.button, styles.buttonChoose]}
                        onPress={() => setUnitsSystem('metric')}
                    >
                        <Text style={styles.textStyle}>Celcius</Text>
                    </Pressable>
                    {/* Changing to Farenheit */}
                    <Pressable
                        style={[styles.button, styles.buttonChoose]}
                        onPress={() => setUnitsSystem('imperial')}
                    >
                        <Text style={styles.textStyle}>Farenheit</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        {/* Showing modal when pressing */}
        <Pressable
          style={[styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>{unitsTitle}</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
      modalView: {
        margin: 20,
        backgroundColor: TRI_COLOR,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: SECONDARY_COLOR,
        shadowOffset: {
          width: 0,
          height: 2,
          blur: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        margin: 10,
      },
      buttonOpen: {
        alignSelf: 'baseline',
        marginTop: 0,
        marginLeft: 10,
      },
      buttonText: {
        fontSize: 26,
        color: SECONDARY_COLOR,
      },
      buttonChoose: {
        backgroundColor: PRIMARY_COLOR,
        width: 140,
      },
      buttonClose: {
        position: 'absolute',
        right: 0,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        margin: 15,
        fontWeight: 'bold',
        textAlign: "center",
        color: SECONDARY_COLOR,
      }
})

