import React from 'react';
import { FlatList, Text, View } from 'react-native';
import theme from './styles';
import { Avatar, List } from 'react-native-paper';
import LoadingView from '../../../components/LoadingView';
import { Contact } from '../../../../types';

export default function index(props: any) {
    const styles = theme()
    const renderItem = ({ item }: { item: Contact }) => {
        return <List.Item
            key={item.id}
            title={item.name}
            description={item.phone}
            left={props => <Avatar.Image {...props} source={{ uri: item.image }} />}
        />
    }

    if (props.loading) return <LoadingView />

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Contact List</Text>
                <FlatList
                    onEndReachedThreshold={0}
                    onEndReached={() => props.increasePage()}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.scrollContainer}
                    data={props.list}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

