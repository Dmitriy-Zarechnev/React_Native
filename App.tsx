import {StyleSheet, TextInput, View} from 'react-native'
import {useState} from 'react'

type Tasks = {
    id: number,
    title: string,
    isDone: boolean
}


export default function App() {
    const [textInputValue, setTextInputValue] = useState('TextInput')
    const [tasks, setTasks] = useState<Tasks[]>([
        {
            id: 1,
            title: 'HTML',
            isDone: true
        },
        {
            id: 2,
            title: 'React',
            isDone: false
        },
        {
            id: 3,
            title: 'CSS',
            isDone: true
        }
    ])


    return (
        <View style={styles.container}>
            <TextInput value={textInputValue}
                       onChangeText={setTextInputValue}
                       style={styles.textInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#355434',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: 300,
        backgroundColor: '#c9be1c',
        color: '#fff',
        fontSize: 25,
        borderRadius: 5,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'blue'
    }
})

// const globalStyles = StyleSheet.create({
//     border: {
//         borderStyle: 'solid',
//         borderWidth: 2,
//         borderColor: 'blue'
//     }
// })