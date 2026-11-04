import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ route, navigation }) {
  const { task } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.label}>Título</Text>
            <Text style={styles.value}>{task.title}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.label}>Disciplina</Text>
            <Text style={styles.value}>{task.discipline}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.value}>{task.description || '—'}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.label}>Data de entrega</Text>
            <Text style={styles.value}>{task.dueDate}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.label}>Estado</Text>
            <View style={styles.statusBadge}>
              <Ionicons
                name={task.completed ? 'checkmark-circle' : 'time-outline'}
                size={20}
                color={task.completed ? '#10B981' : '#F59E0B'}
              />
              <Text
                style={[
                  styles.statusText,
                  { color: task.completed ? '#10B981' : '#F59E0B' },
                ]}
              >
                {task.completed ? 'Concluída' : 'Por concluir'}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
          <Text style={styles.backButtonText}>Voltar à lista</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  content: { padding: 16, paddingBottom: 40 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  section: { marginVertical: 4 },
  label: { fontSize: 13, fontWeight: '600', color: '#6B7280', marginBottom: 4 },
  value: { fontSize: 16, color: '#1F2937', lineHeight: 22 },
  divider: { height: 1, backgroundColor: '#E5E7EB', marginVertical: 12 },
  statusBadge: { flexDirection: 'row', alignItems: 'center' },
  statusText: { marginLeft: 6, fontSize: 16, fontWeight: '600' },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E3A8A',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});