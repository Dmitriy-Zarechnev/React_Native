import {Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native'
import {ReactNode, useState} from 'react'
import {Checkbox} from 'expo-checkbox'
import {Input} from './input/Input'

type Tasks = {
    id: number,
    title: string,
    isDone: boolean
}


export default function App() {
    const [textInputValue, setTextInputValue] = useState('TextInput')
    const [show, setShow] = useState(0)
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


    const addTask = () => {
        const newTask = {
            id: tasks.length + 1,
            title: textInputValue,
            isDone: false
        }
        setTasks([...tasks, newTask])
        setTextInputValue('')
    }

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter((el) => el.id !== taskId))
    }

    const changeCheckBox = (taskId: number, isDone: boolean) => {
        setTasks(tasks.map((el) => el.id === taskId ? {...el, isDone: !isDone} : el))
    }

    const changeTitle = (taskId:number, title:string) => {
        setTasks(tasks.map((el) => el.id === taskId ? {...el, title} : el))
        setShow(0)
    }

    return (
        <View style={styles.container}>
            <HideKeyboard>
                <View style={[globalStyles.border, {width: '80%', alignItems: 'center', paddingVertical: 20}]}>
                    <TextInput value={textInputValue}
                               onChangeText={setTextInputValue}
                               style={styles.textInput}/>
                </View>
            </HideKeyboard>
            <View style={{marginBottom: 5}}>
                <Button title={'Add Task'} onPress={addTask}/>
            </View>
            <View style={{width: 300}}>
                {tasks.map((el) => {
                    return <View key={el.id} style={[globalStyles.border, styles.taskBox]}>
                        <Checkbox value={el.isDone}
                                  onValueChange={() => changeCheckBox(el.id, el.isDone)}/>
                        {show === el.id
                            ? <Input title={el.title}
                                     id={el.id}
                                     changeTitle={changeTitle}/>
                            : <Text onPress={() => setShow(el.id)}>{el.title}</Text>}
                        <View>
                            <Button title={'Delete Task'} onPress={() => deleteTask(el.id)}/>
                        </View>
                    </View>
                })}
            </View>
        </View>
    )
}

const HideKeyboard = ({children}: { children: ReactNode }) => {
    return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
    },
    textChange: {
        width: 150,
        backgroundColor: '#c9be1c',
        color: '#fff',
        fontSize: 20,
        padding: 10
    }
})

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#121313'
    }
})