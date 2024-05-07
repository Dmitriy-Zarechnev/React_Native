import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native'
import {ReactElement, ReactNode, useState} from 'react'
import {Checkbox} from 'expo-checkbox'

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
            <View style={{width: 300}}>
                {tasks.map((el) => {
                    return <View key={el.id} style={[globalStyles.border, styles.taskBox]}>
                        <Checkbox value={el.isDone}
                                  onValueChange={() => {
                                  }}/>
                        <Text>{el.title}</Text>
                    </View>
                })}
            </View>
        </View>
    )
}

const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => {
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
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
        marginBottom: 10
    },
    taskBox: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#3e69c4',
        marginBottom: 5,
        alignItems: 'center',
        padding: 5
    }
})

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#121313'
    }
})