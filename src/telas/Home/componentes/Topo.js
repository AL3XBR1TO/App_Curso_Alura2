import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import { carregaTopo } from '../../../servicos/carregaDados';
import logo from '../../../../assets/logo.png';

class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: "",
            legenda: "",
        }
    }
    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({topo: retorno})

    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
    return <View style={estilos.topo}>
                <Image style={estilos.imagem} source={logo} />
                <Text style={estilos.boasVindas}>{ this.state.topo.boasVindas}</Text>
                <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
            </View>
    }        
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        fontSize: 26,
        marginTop: 24,
        lineHeight: 42,
        fontWeight: 'bold',
        color: "#464646"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    }

})

export default Topo;