import React, {useState} from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'

type Props = {
    title: string
    changeTitle: (taskId: number, title: string) => void
    id: number
}


export const Input = (props: Props) => {
    const [newTitle, setNewTitle] = useState(props.title)

    const changeNewTitle = (title: string) => {
        setNewTitle(title)
    }

    return (
        <View>
            <TextInput value={newTitle}
                       onChangeText={(title) => changeNewTitle(title)}
                       style={styles.textChange}/>
            <Button title={'+'} onPress={() => props.changeTitle(props.id, newTitle)}/>
        </View>
    )
}


const styles = StyleSheet.create({
    textChange: {
        width: 150,
        backgroundColor: '#c9be1c',
        color: '#fff',
        fontSize: 20,
        padding: 10
    }
})
