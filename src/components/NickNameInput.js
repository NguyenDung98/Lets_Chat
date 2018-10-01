import React, {Component} from 'react';
import {
    Modal,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native';

export default class NickNameInput extends Component {
    state = {
        nickname: null,
        inputStyles: []
    };

    input = React.createRef();

    onChangeNickName = nickname => {
        this.setState(() => ({nickname}));
    };

    onHighlightInput = () => {
        this.setState(prevState => ({
            inputStyles: prevState.inputStyles.concat(styles.nicknameInput)
        }))
    };

    render() {
        return (
            <Modal
                animationType="slide"
                visible={this.props.user === null}
                onRequestClose={() => this.props.userInputHandler('no name')}
            >
                <View style={styles.modalContainer}>
                    <TextInput
                        ref={this.input}
                        style={this.state.inputStyles}
                        placeholder='Enter your nick name'
                        onChangeText={this.onChangeNickName}
                        onFocus={this.onHighlightInput}
                    />
                    <TouchableOpacity
                        style={styles.nicknameButton}
                        activeOpacity={.6}
                        onPress={() => this.props.userInputHandler(this.state.nickname)}
                    >
                        <Text style={styles.nicknameButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    nicknameInput: {
        borderBottomWidth: 1,
        borderColor: '#c4cacd',
        padding: 0,
        marginBottom: 3
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nicknameButton: {
        backgroundColor: '#2a96ff',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    nicknameButtonText: {
        color: 'white'
    }
});