import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import InputBox from './src/components/InputBox';
import Messages from './src/components/Messages';
import NickNameInput from './src/components/NickNameInput'
import io from 'socket.io-client/dist/socket.io';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            message: null,
            allMessage: []
        };
        this.socket = io('https://lets-chat-server.herokuapp.com');
        this.socket.on('chat', data => {
            this.setState(prevState => ({
                allMessage: prevState.allMessage.concat(data),
            }))
        });
    }

    messageChangeHandler = message => {
        this.setState(() => ({ message }));
    };

    sendMessageHandler = () => {
        if (this.state.message) {
            this.socket.emit('chat', {
                key: Math.random().toString(),
                user: this.state.user,
                message: this.state.message
            })
        }
    };

    userInputHandler = user => {
        this.setState(() => ({ user }));
    };

    render() {
        return (
            <View style={styles.container}>
                <NickNameInput
                    userInputHandler={this.userInputHandler}
                    user={this.state.user}/>
                <InputBox
                    onChangeText={this.messageChangeHandler}
                    onSendMessage={this.sendMessageHandler}
                />
                <Messages
                    allMessage={this.state.allMessage}
                    user={this.state.user}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        backgroundColor: '#f1f8fb',
    }
});
