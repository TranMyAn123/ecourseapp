import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator, List, Searchbar } from "react-native-paper";
import Styles from "../../styles/Styles";

const Home = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadCourses = async () => {
        try {
            setLoading(true);

            let url = endpoints['courses']
            let res = await Apis.get(url);
            setCourses(res.data.results);
        } catch (ex) {

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCourses();
    }, []);

    return(
        <View>
            <Searchbar
                placeholder="Tìm khóa học" />
            <FlatList data={courses} ListFooterComponent={loading && <ActivityIndicator />}
                renderItem={({item}) => <List.Item
                                        title={item.subject}
                                        description={item.created_date}
                                        left={props => <Image style={Styles.avatar} source={{uri: item.image}} />}
                                    /> } />
            
        </View>
    );
}

export default Home;