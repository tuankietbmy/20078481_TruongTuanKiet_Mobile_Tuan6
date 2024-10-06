import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image,TouchableOpacity  } from 'react-native';

const products = [
  {
    id: '1',
    image: require('../assets/ca_nau_lau.png'),
    mota: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Devang',
  },
  {
    id: '2',
    image: require('../assets/ga_bo_toi.png'),
    mota: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'LTD Food',
  },
  {
    id: '3',
    image: require('../assets/xa_can_cau.png'),
    mota: 'Xe cẩn cẩu đa năng',
    shop: 'Thế gới đồ chơi',
  },
  {
    id: '4',
    image: require('../assets/do_choi_dang_mo_hinh.png'),
    mota: 'Đồ chơi dạng mô hình',
    shop: 'Thế gới đồ chơi',
  },
  {
    id: '5',
    image: require('../assets/lanh_dao_gian_don.png'),
    mota: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
  },
  {
    id: '6',
    image: require('../assets/hieu_long_con_tre.png'),
    mota: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
  },
  {
    id: '7',
    image: require('../assets/trump1.png'),
    mota: 'Donal Trump thiên tài lãnh đạo',
    shop: 'Minh Long Book',
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text>{item.mota}</Text>
        <Text style={{color:'gray'}}>Shop <Text style={styles.shopText}>{item.shop}</Text></Text>
      </View>
      <TouchableOpacity style={{backgroundColor:'red',width:70,height:40,alignItems:'center'}}>
        <Text style={{color:'white',margin:'auto'}}>Chat</Text>
      </TouchableOpacity>
     
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <Image source={require('../assets/muiten.png')} style={styles.icon} />
        <Text style={{ color: 'white' }}>Chat</Text>
        <Image source={require('../assets/Vector.png')} style={styles.icon} />
      </View>
      <View style={styles.part2}>
        <ScrollView>
          <Text style={styles.introText}>
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
          </Text>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </View>
      <View style={styles.part3}>
        <Image source={require('../assets/Group10.png')} style={styles.icon} />
        <Image source={require('../assets/home.png')} style={styles.icon} />
        <Image source={require('../assets/back.png')} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  part1: {
    flex: 1, // Tỷ lệ 1
    flexDirection: 'row',
    backgroundColor: '#0099FF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  part2: {
    flex: 8, // Tỷ lệ 8
    backgroundColor: '#CCCCCC',
  },
  part3: {
    flex: 1, // Tỷ lệ 1
    flexDirection: 'row',
    backgroundColor: '#0099FF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  itemContainer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:10,
  },
  image: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  shopText: {
    color: 'red', // Màu cho tên shop
  },
  introText: {
    marginHorizontal: 25,
    marginVertical: 10,
  },
  icon: {
    height: 23,
    width: 23,
  },
});

export default App;
