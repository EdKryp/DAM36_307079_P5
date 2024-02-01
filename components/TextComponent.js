import { Text, View, StyleSheet, SafeAreaView, ScrollView,} from "react-native";

const TextComponent = () => {
    return[
    <SafeAreaView>
    <ScrollView style={styles.container}>
        <Text style={styles.text}>Nombre: Edwin Cano</Text>
        <Text style={styles.text}>Ocupación: Estudiante de Ingenieria de Software</Text>
        <Text style={styles.text}>Edad: 20</Text>
        <Text style={styles.text}>Fecha de Nacimiento: 05/06/2003</Text>
        <Text style={styles.text}>Sobre mi: Estudiante 6semestre</Text>
    </ScrollView>
    </SafeAreaView>
    ]
}

const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        fontWeight: 'normal',
        color: '#dfe6e9'
    }
    })

export default TextComponent;