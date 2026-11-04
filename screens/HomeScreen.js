import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation, tasks, onToggleComplete }) {
  const completedCount = tasks.filter((t) => t.completed).length;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, item.completed && styles.cardCompleted]}
      onPress={() => navigation.navigate('Details', { task: item })}
      activeOpacity={0.7}
    >
      <View style={styles.cardHeader}>
        <Text
          style={[styles.title, item.completed && styles.titleCompleted]}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={() => onToggleComplete(item.id)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name={item.completed ? 'checkmark-circle' : 'ellipse-outline'}
            size={28}
            color={item.completed ? '#10B981' : '#9CA3AF'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.discipline}>{item.discipline}</Text>
      <View style={styles.statusRow}>
        <Ionicons
          name={item.completed ? 'checkmark-done' : 'time-outline'}
          size={16}
          color={item.completed ? '#10B981' : '#F59E0B'}
        />
        <Text
          style={[
            styles.statusText,
            { color: item.completed ? '#10B981' : '#F59E0B' },
          ]}
        >
          {item.completed ? 'Concluída' : 'Por concluir'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Ionicons name="checkmark-done-circle" size={24} color="#1E3A8A" />
        <Text style={styles.counterText}>
          {completedCount} de {tasks.length} concluídas
        </Text>
      </View>

      {tasks.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="clipboard-outline" size={64} color="#9CA3AF" />
          <Text style={styles.emptyText}>Nenhuma tarefa ainda.</Text>
          <Text style={styles.emptySubText}>
            Toca no botão + para adicionar a primeira.
          </Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddTask')}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E7FF',
    marginHorizontal: 16,
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
  },
  counterText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#1E3A8A',
  },
  listContent: { padding: 16, paddingBottom: 100 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  cardCompleted: { opacity: 0.75, borderLeftWidth: 4, borderLeftColor: '#10B981' },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 17, fontWeight: 'bold', color: '#1F2937', flex: 1 },
  titleCompleted: { textDecorationLine: 'line-through', color: '#6B7280' },
  discipline: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  statusText: { marginLeft: 4, fontSize: 13, fontWeight: '600' },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    backgroundColor: '#1E3A8A',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
  emptyText: { fontSize: 18, fontWeight: '600', color: '#6B7280', marginTop: 16 },
  emptySubText: { fontSize: 14, color: '#9CA3AF', textAlign: 'center', marginTop: 8 },
});