import React from 'react';
import {StyleSheet, Text, View, NetInfo} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class App extends React.Component {
    state = {
        connection: null,
    };

    componentDidMount() {
        NetInfo.addEventListener(
            'change',
            this._handleConnectionInfoChange
        );
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'change',
            this._handleConnectionInfoChange
        );
    }

    _handleConnectionInfoChange = (connectionInfo) => {
        this.setState({
            connection: connectionInfo,
        });
    };

    render() {

        let connectionState = null;
        let connection = this.state.connection

        if (connection == "WIFI") {
            connectionState = <View style={styles.wifi}>
                <Text style={styles.text}>{this.state.connection}</Text>
                <Icon name="emoticon-excited" size={100} color="#fff"/>
            </View>
        } else if (connection == "MOBILE") {
            connectionState = <View style={styles.mobile}>
                <Text style={styles.text}>{this.state.connection}</Text>
                <Icon name="emoticon-tongue" size={100} color="#fff"/>
                <Text style={styles.textRich}>you rich is nice!</Text>
            </View>
        }
        else if (connection == "NONE") {
            connectionState = <View style={styles.noNet}>
                <Text style={styles.text}>no internet</Text>
                <Icon name="emoticon-sad" size={100} color="#fff"/>
            </View>
        } else {
            connectionState = <View style={styles.noNet}>
                <Text style={styles.text}>Unknown connection</Text>
                <Icon name="emoticon-neutral" size={100} color="#fff"/>
            </View>
        }

        return (
            <View style={styles.main}>
                {connectionState}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wifi: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008744',


    },
    mobile: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0057e7',


    },
    noNet: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d62d20',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    textRich: {
        color: '#fff',
        fontStyle: 'italic',
        fontSize: 20,
    }

});
