import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ImageBackground, ActivityIndicator } from 'react-native';

export default function App() {
  const [isSplash, setIsSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const agregarLibro = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero,
      };
      setLibros([nuevoLibro, ...libros]);
      setTitulo('');
      setAutor('');
      setGenero('');
      alert('Libro guardado correctamente.');
    }, 4000);
  };

  if (isSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Aaron Ferrer Cuellar</Text>
        <Text style={styles.splashTitle}>UPQ</Text>
        <Text style={styles.splashSubtitle}>Universidad Politecnica de Queretaro</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#888"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#888"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#888"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable style={styles.button} onPress={agregarLibro} disabled={loading}>
          <Text style={styles.buttonText}>Agregar Libro</Text>
        </Pressable>

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.loadingText}>Guardando...</Text>
          </View>
        )}

        <Text style={styles.totalText}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.bookTitle}>{item.titulo}</Text>
              <Text style={styles.bookDetail}>Autor: {item.autor}</Text>
              <Text style={styles.bookDetail}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#1b2a4a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  splashText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  splashTitle: {
    color: '#a91d3a',
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  splashSubtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1b4f91',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  loadingText: {
    color: '#fff',
    marginTop: 5,
  },
  totalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  bookDetail: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
});