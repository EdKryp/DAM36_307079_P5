import { Text, View, StyleSheet, SafeAreaView, ScrollView,} from "react-native";

const TextComponent = () => {
    return (
      <SafeAreaView>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>Nombre: Edwin Cano</Text>
          <Text style={styles.text}>Ocupación: Estudiante de Ingeniería de Software</Text>
          <Text style={styles.text}>Edad: 20</Text>
          <Text style={styles.text}>Fecha de Nacimiento: 05/06/2003</Text>
          <Text style={styles.text}>Sobre mí: Estudiante 6to semestre</Text>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    textContainer: {
      backgroundColor: '#2d3e50',
      borderRadius: 8,
      padding: 16,
    },
    text: {
      fontSize: 16,
      fontWeight: 'normal',
      color: '#dfe6e9',
      marginBottom: 8,
    },
  });
  
  export default TextComponent;