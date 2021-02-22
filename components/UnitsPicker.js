import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import {Picker} from '@react-native-picker/picker';

export default function UnitsPicker({unitsSystem, setUnitsSystem}) {
    return (

       <Picker 
            style={{height: 20, width: 40, borderWidth: 2,
                borderColor: 'blue',
                borderRadius: 10,}}
            selectedValue={unitsSystem} 
            onValueChange={(item) => setUnitsSystem(item)
            }>
            <Picker.Item label="C°" value="metric" />
            <Picker.Item label="F°" value="imperial" />
        </Picker>
    )
}

