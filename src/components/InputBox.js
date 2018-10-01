import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class InputBox extends Component {
    input = React.createRef();

    onSubmitMessage = () => {
        this.input.current.clear();
        this.props.onSendMessage();
        this.props.onChangeText('');
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    ref={this.input}
                    onChangeText={this.props.onChangeText}
                    style={styles.messageInput}
                    placeholder="Type your message"
                    multiline={true}
                />
                <TouchableOpacity
                    activeOpacity={.5}
                    onPress={this.onSubmitMessage}
                    style={styles.messageButton}>
                    <Text style={styles.messageButtonText}>
                        Send
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
        width: '100%',
    },
    messageInput: {
        borderTopWidth: 1,
        borderTopColor: '#c4cacd',
        width: "75%"
    },
    messageButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a96ff',
        width: '25%',
        height: '100%'
    },
    messageButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});