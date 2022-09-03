import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet,Text, View, TextInput, Image, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Fundo from "./assets/fundo2.png";

import Mail from "./assets/mail.png";
import Locker from "./assets/locker.png";
import Gmail from "./assets/gmail.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";

import Mail2 from "./assets/mail2.png";
import User from "./assets/user01.png";
import User2 from "./assets/user02.png";
import Senha from "./assets/locker2.png";
import ConfirmSenha from "./assets/locker2Aberto.png";
import Arrow from "./assets/arrow.png";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CriarConta" component={CriarConta}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = (props) => {
  const navigation = useNavigation();
  return (
    
      <ImageBackground source={Fundo} resizeMode="cover" style={styles.container}>
        <View style={styles.containerLogo}>
          <Text style={{ fontSize: 22, fontWeight: "900", color: "#fff" }}>
            LOGO
          </Text>
        </View>
        <View style={styles.section}>
          <Image source={Mail} style={styles.imagemMail} />
          <TextInput
            style={{ color:"#fff", flex: 1, marginLeft: 15 }}
            placeholder="Email"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.section}>
          <Image source={Locker} style={styles.imagemLocker} />
          <TextInput
            style={{ color:"#fff", flex: 1, marginLeft: 15 }}
            placeholder="Senha"
            underlineColorAndroid="transparent"
          />
        </View>

        <Pressable
          style={styles.btnEsqueciSenha}
          onPress={(_) => alert("Página em construção")}
        >
          <Text style={styles.txtEsqueciSenha}>ESQUECI SENHA</Text>
        </Pressable>

        <Pressable
          style={styles.btnLogin}
          onPress={(_) => alert("Página em construção")}
        >
          <Text style={styles.txtLogin}>LOGIN</Text>
        </Pressable>
        <Text style={{color:"#fff", fontSize: 14, marginBottom: 30, textShadowColor: "#000",textShadowOffset: {width: 1, height: 1},textShadowRadius: 3}}>ou acesse com:</Text>
        <View style={styles.containerMidiasSociais}>
          <Pressable onPress={(_) => alert("Página em Construção")}>
            <Image source={Gmail} style={styles.imagemMidias} />
          </Pressable>
          <Pressable onPress={(_) => alert("Página em Construção")}>
            <Image source={Facebook} style={styles.imagemMidias} />
          </Pressable>
          <Pressable onPress={(_) => alert("Página em Construção")}>
            <Image source={Twitter} style={styles.imagemMidias} />
          </Pressable>
        </View>

        <View style={styles.containerRegistro}>
          <Text style={{ color:"#fff", fontSize: 18, marginRight: 10 }}>Novo no GSN?</Text>
          <Pressable onPress={() => navigation.navigate("CriarConta")}>
            <Text style={styles.registro}>
              Registre-se
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
  );
};

const CriarConta = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View
          style={{
            overflow: "hidden",
            paddingBottom: 20,
            width: "100%",
          }}
        >
        </View>
        <View style={styles.sectionConta}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18}}
            placeholder="Email"
            underlineColorAndroid="transparent"
          />
          <Image source={Mail2} style={styles.imagem} />
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Nome"
            underlineColorAndroid="transparent"
          />
          <Image source={User} style={styles.imagem} />
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Sobrenome"
            underlineColorAndroid="transparent"
          />
          <Image source={User2} style={styles.imagem} />
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Senha"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <Image source={Senha} style={styles.imagem} />
        </View>

        <View style={styles.sectionConta}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, fontSize: 18 }}
            placeholder="Confirmar Senha"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <Image source={ConfirmSenha} style={styles.imagem} />
        </View>
        <Pressable
          style={styles.btnRegistro}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
            REGISTRAR
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor:"#9a9a9a",
            width: 330,
            height: 50,
            borderRadius: 10,
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center"}}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
            CANCELAR
          </Text>
        </Pressable>
      </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  },
  containerLogo: {
    width: 260,
    height: 160,
    borderRadius: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: 260,
    height: 50,
    borderRadius: 10,
    marginBottom: 30,
  },
  imagemMail: {
    padding: 10,
    marginLeft: 15,
    height: 32,
    width: 32,
    resizeMode: "stretch",
    alignItems: "center",
  },
  imagemLocker: {
    padding: 10,
    marginLeft: 15,
    height: 26,
    width: 32,
    resizeMode: "stretch",
    alignItems: "center",
  },
  btnEsqueciSenha: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "#fff",
    width: 130,
    height: 30,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  txtEsqueciSenha: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  btnLogin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32a060",
    borderRadius: 10,
    width: 260,
    height: 50,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  txtLogin: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  containerMidiasSociais: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
  },
  imagemMidias: {
    padding: 10,
    height: 50,
    width: 50,
    resizeMode: "stretch",
    alignItems: "center",
    
  },
  containerRegistro: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registro: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#32a060",
    textShadowColor: "#000",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },  
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    width: "100%",
    height: 60,
    marginBottom: 60,
  },
  seta: {
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    height: 22,
    width: 22,
    resizeMode: "stretch",
  },
  sectionConta: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderBottomWidth: 3,
    borderBottomColor: "#32a060",
    width: 330,
    height: 60,
    borderRadius: 10,
    marginBottom: 30,
  },
  imagem: {
    padding: 10,
    marginRight: 15,
    height: 26,
    width: 26,
    resizeMode: "stretch",
    alignItems: "center",
  },
  btnRegistro: {
    backgroundColor: "#32a060",
    width: 330,
    height: 50,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
