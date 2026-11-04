import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Alert,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddTaskScreen({ navigation, onAddTask }) {
  const [title, setTitle] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'O título é obrigatório.';
    if (!discipline.trim()) newErrors.discipline = 'A disciplina é obrigatória.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    onAddTask({
      title: title.trim(),
      discipline: discipline.trim(),
      description: description.trim(),
      dueDate: dueDate.trim() || 'Sem data',
    });

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.field}>
          <Text style={styles.label}>Título *</Text>
          <TextInput
            style={[styles.input, errors.title && styles.inputError]}
            placeholder="Ex.: Estudar React Native"
            value={title}
            onChangeText={(text) => {
              setTitle(text);
              if (errors.title) setErrors((e) => ({ ...e, title: null }));
            }}
          />
          {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Disciplina *</Text>
          <TextInput
            style={[styles.input, errors.discipline && styles.inputError]}
            placeholder="Ex.: Programação de Dispositivos Móveis"
            value={discipline}
            onChangeText={(text) => {
              setDiscipline(text);
              if (errors.discipline) setErrors((e) => ({ ...e, discipline: null }));
            }}
          />
          {errors.discipline && (
            <Text style={styles.errorText}>{errors.discipline}</Text>
          )}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Detalhes da tarefa..."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Data de entrega</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={dueDate}
            onChangeText={setDueDate}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          activeOpacity={0.8}
        >
          <Ionicons name="save-outline" size={22} color="#FFFFFF" />
          <Text style={styles.saveButtonText}>Guardar Tarefa</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  content: { padding: 20, paddingBottom: 40 },
  field: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 6 },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  inputError: { borderColor: '#EF4444' },
  textArea: { height: 100, textAlignVertical: 'top' },
  errorText: { color: '#EF4444', fontSize: 13, marginTop: 4 },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E3A8A',
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 12,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});