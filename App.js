import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

const initialTasks = [
  {
    id: '1',
    title: 'Estudar React Native',
    discipline: 'Programação de Dispositivos Móveis',
    description: 'Rever os conceitos de navegação e FlatList.',
    dueDate: '15/06/2025',
    completed: false,
  },
  {
    id: '2',
    title: 'Fazer relatório de redes',
    discipline: 'Redes de Computadores',
    description: 'Relatório sobre protocolos TCP/IP.',
    dueDate: '20/06/2025',
    completed: true,
  },
  {
    id: '3',
    title: 'Preparar apresentação',
    discipline: 'Sistemas Operativos',
    description: 'Apresentação sobre escalonamento de processos.',
    dueDate: '25/06/2025',
    completed: false,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    setTasks((prev) => [
      ...prev,
      { ...newTask, id: Date.now().toString(), completed: false },
    ]);
  };

  const toggleComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1E3A8A' }, // azul escuro
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackTitle: 'Voltar',
        }}
      >
        <Stack.Screen name="Home" options={{ title: 'As Minhas Tarefas' }}>
          {(props) => (
            <HomeScreen
              {...props}
              tasks={tasks}
              onToggleComplete={toggleComplete}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Details" options={{ title: 'Detalhes da Tarefa' }}>
          {(props) => <DetailsScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="AddTask" options={{ title: 'Nova Tarefa' }}>
          {(props) => <AddTaskScreen {...props} onAddTask={addTask} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}