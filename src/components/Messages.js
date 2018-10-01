import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet
} from 'react-native';

export default class Messages extends Component {
    list = React.createRef();

    componentDidUpdate() {
        setTimeout(() => {
            this.list.current.scrollToEnd();
        }, 100);
    }

    render() {
        return (
            <FlatList
                viewabilityConfig={0}
                ref={this.list}
                data={this.props.allMessage}
                style={styles.messageBox}
                renderItem={({item}) => (
                    <View>
                        {item.user === this.props.user ? (
                            <View>
                                <Text style={styles.name}>{item.user}</Text>
                                <View key={item.key} style={styles.userMessageView}>
                                    <Text style={styles.userMessage}>
                                        {item.message}
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <Text style={[styles.name, styles.friend]}>{item.user}</Text>
                                <View key={item.key} style={[styles.userMessageView, styles.friendMessageView]}>
                                    <Text style={[styles.userMessage, styles.friendMessage]}>
                                        {item.message}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </View>
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    messageBox: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 8
    },
    userMessageView: {
        alignSelf: 'flex-end',
        backgroundColor: '#2a96ff',
        borderRadius: 25,
        maxWidth: '75%',
        marginTop: 3,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    userMessage: {
        color: "white",
        fontSize: 16
    },
    name: {
        color: '#898d90',
        fontSize: 12,
        textAlign: 'right'
    },
    friendMessageView: {
        alignSelf: 'flex-start',
        backgroundColor: '#dbdfe2',
    },
    friendMessage: {
        color: 'black'
    },
    friend: {
        textAlign: 'left'
    }
});