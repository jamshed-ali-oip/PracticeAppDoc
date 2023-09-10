import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import {
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
} from '../../../GlobalStyles';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
// import Svg, {
//   Circle,
//   Ellipse,
//   G,
//   TSpan,
//   TextPath,
//   Path,
//   Polygon,
//   Polyline,
//   Line,
//   Rect,
//   Use,
//   Image,
//   Symbol,
//   Defs,
//   LinearGradient,
//   RadialGradient,
//   Stop,
//   ClipPath,
//   Pattern,
//   Mask,
// } from 'react-native-svg';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {FlatList} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {
  get_Records_of_health,
  post_Records_of_health,
} from '../../redux/actions/user.action';

const MyHealthSurvey = ({navigation}) => {
  const [dob, setDob] = useState('');
  const [date, setDate] = useState(new Date());
  const [datePlaceholder, setDatePlaceholder] = useState('Select Date');
  const [activeTab, setActiveTab] = useState('available');
  const [open, setOpen] = useState(false);
  const [availableSurveys, setAvailableSurveys] = useState([]);
  const [systole, setSystole] = useState('');
  const [bp, setBp] = useState('');
  const [sugar, setSugar] = useState('');
  const [sleeping, setSleeping] = useState('');
  const [weight, setWeight] = useState('');
  const [activeTab1, setActiveTab1] = useState('Painchart');
  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = React.useState('');
  const [alldata, setalldata] = useState('');
  const [B, setB] = useState([]);

  const handleTabChange = tab => {
    setActiveTab(tab);
  };
  const handleTabChange2 = tab => {
    setActiveTab1(tab);
  };

  const screenWidth = Dimensions.get('window').width;

  
  useEffect(() => {
    setDatePlaceholder('Select Date');

  }, []);
  useEffect(() => {
    getrecord();
    // setup()
  }, [dob]);
  // useEffect(() => {
   
  //   setup()
  // }, [alldata]);
  const dispatch = useDispatch();
  const getrecord = async () => {
    const ii = new Date();
    const tarekh = moment(ii).format('DD-MM-YYYY');
    console.log('tareeekh', dob, 'jkggh', tarekh);
    const body = {
      date1: dob ? dob : tarekh,
      date2: tarekh,
    };
    const mydata = await dispatch(get_Records_of_health(body));
    console.log('myyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', mydata?.data);
    setalldata(mydata?.data?.data);
  };

  const records = async () => {
    const body = {
      blood_pressure_systole: systole,
      blood_pressure: bp,
      sugar_level: sugar,
      sleeping_hours: sleeping,
      weight: weight,
    };
    dispatch(post_Records_of_health(body, navigation));
  };
  
  useEffect(()=>{
    const blood_pressureArr=[]
   if(alldata){
    alldata.forEach(item => {
      blood_pressureArr.push(item.blood_pressure);
    });
   }
   console.log("faskk",blood_pressureArr)
    setB(blood_pressureArr)
  },[alldata,dob])
  console.log("0000000000000000000000000",B)
  const data = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    datasets: [
      {
        data:  [25, 37.5, 50, 62.5, 80, 90],
        color: () => '#0F0ADE',
        strokeWidth: 1, // optional
      },
    ],
    // legend: ["Rainy Days"] // optional
  };
  const data1 = {
    // labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [0, 0, 100, 10, 40, 20],
        color: () => 'red',
        strokeWidth: 1, // optional
      },
    ],
    // legend: ["Rainy Days"] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: '#aaa',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#aaa',
    backgroundGradientToOpacity: 0.5,
    color: () => '#0F0ADE',
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, //
    color: () => '#0F0ADE',
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: 'gray',
    },
    propsForDots: {
      r: '1',
      strokeWidth: '1.5',
      stroke: 'gray',
    },
    labelColor: () => '#0F0ADE',
  };

  const chartConfig1 = {
    backgroundGradientFrom: '#FFF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFF',
    backgroundGradientToOpacity: 0.5,
    color: () => 'red',
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, //
    labelColor: () => '#FFF',
    propsForDots: {
      r: '1',
      strokeWidth: '2',
      stroke: 'blue',
    },
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={{marginTop: 20, width: '95%', marginHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={Colors.purple}
              style={{}}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: '28%'}}>
            <Text
              style={{color: Colors.purple, fontWeight: 'bold', fontSize: 18}}>
              Record & Progress
            </Text>
          </View>
        </View>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tabItem,
              activeTab === 'available' && styles.activeTab,
            ]}
            onPress={() => handleTabChange('available')}>
            <Text style={styles.tabText}>My Records</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabItem,
              activeTab === 'completed' && styles.activeTab,
            ]}
            onPress={() => handleTabChange('completed')}>
            <Text style={styles.tabText}>Show Reports</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'available' && (
          <View style={styles.tabContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PainAnalog')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderWidth: 0.5,
                    padding: 8,
                    borderRadius: 20,
                    borderColor: '#aaa',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{height: 35, width: 35}}
                      source={require('../../../assets/headache-1-1.png')}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontWeight: 'bold',
                        color: Colors.purple,
                      }}>
                      Pain Analogue
                    </Text>
                  </View>
                  <View>
                    <FontAwesome
                      name="angle-right"
                      size={25}
                      color={Colors.purple}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  height: 55,
                  width: '100%',
                  backgroundColor: 'transparent',
                  alignSelf: 'center',

                  borderRadius: 10,
                  // paddingLeft: 10,
                  // paddingRight: 5,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{fontSize: 16, color: Color.systemBlack}}
                  placeholder="Update Blod Pressure (Systole)"
                  placeholderTextColor={'lightgrey'}
                  placeholderStyle={{}}
                  value={systole}
                  keyboardType="numeric"
                  onChangeText={value => setSystole(value)}
                />
              </View>
              <View
                style={{
                  height: 55,
                  width: '100%',
                  backgroundColor: 'transparent',
                  alignSelf: 'center',

                  borderRadius: 10,
                  // paddingLeft: 10,
                  // paddingRight: 5,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{fontSize: 16, color: Color.systemBlack}}
                  placeholder="Update Blod Pressure"
                  placeholderTextColor={'lightgrey'}
                  placeholderStyle={{}}
                  value={bp}
                  keyboardType="numeric"
                  onChangeText={value => setBp(value)}
                />
              </View>
              <View
                style={{
                  height: 55,
                  width: '100%',
                  backgroundColor: 'transparent',
                  alignSelf: 'center',

                  borderRadius: 10,
                  // paddingLeft: 10,
                  // paddingRight: 5,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{fontSize: 16, color: Color.systemBlack}}
                  placeholder="Sugar level (mg)"
                  placeholderTextColor={'lightgrey'}
                  placeholderStyle={{}}
                  value={sugar}
                  keyboardType="numeric"
                  onChangeText={value => setSugar(value)}
                />
              </View>
              <View
                style={{
                  height: 55,
                  width: '100%',
                  backgroundColor: 'transparent',
                  alignSelf: 'center',

                  borderRadius: 10,
                  // paddingLeft: 10,
                  // paddingRight: 5,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{fontSize: 16, color: Color.systemBlack}}
                  placeholder="Sleeping hours"
                  placeholderTextColor={'lightgrey'}
                  placeholderStyle={{}}
                  value={sleeping}
                  keyboardType="numeric"
                  onChangeText={value => setSleeping(value)}
                />
              </View>
              <View
                style={{
                  height: 55,
                  width: '100%',
                  backgroundColor: 'transparent',
                  alignSelf: 'center',

                  borderRadius: 10,
                  // paddingLeft: 10,
                  // paddingRight: 5,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{fontSize: 16, color: Color.systemBlack}}
                  placeholder="Weight"
                  placeholderTextColor={'lightgrey'}
                  placeholderStyle={{}}
                  value={weight}
                  keyboardType="numeric"
                  onChangeText={value => setWeight(value)}
                />
              </View>
              <View style={{width: '90%', alignSelf: 'center', marginTop: 50}}>
                <LinearGradient
                  style={[styles.buttons, styles.buttonsPosition]}
                  locations={[0, 1]}
                  colors={['#bf6bbb', '#716eaa']}
                  useAngle={true}
                  angle={180}>
                  <TouchableOpacity
                    onPress={() => {
                      records();
                    }}
                    style={[styles.pressable, styles.parentFlexBox]}>
                    <View>
                      <Text style={styles.button1}>Save</Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </ScrollView>
          </View>
        )}

        {activeTab === 'completed' && (
          <View style={styles.tabContent}>
            <View style={styles.tabItemsContainer}>
              <TouchableOpacity
                style={[
                  styles.tabItemSmall,
                  activeTab1 === 'Painchart' && styles.activeTabSmall,
                ]}
                onPress={() => handleTabChange2('Painchart')}>
                <Text
                  style={[
                    styles.tabTextSmall,
                    {
                      color:
                        activeTab1 === 'Painchart' ? Colors.purple : '#999',
                    },
                  ]}>
                  Painchart
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabItemSmall,
                  activeTab1 === 'Bp' && styles.activeTabSmall,
                ]}
                onPress={() => handleTabChange2('Bp')}>
                <Text
                  style={[
                    styles.tabTextSmall,
                    {color: activeTab1 === 'Bp' ? Colors.purple : '#999'},
                  ]}>
                  Bp
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabItemSmall,
                  activeTab1 === 'SL' && styles.activeTabSmall,
                ]}
                onPress={() => handleTabChange2('SL')}>
                <Text
                  style={[
                    styles.tabTextSmall,
                    {color: activeTab1 === 'SL' ? Colors.purple : '#999'},
                  ]}>
                  SL
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabItemSmall,
                  activeTab1 === 'SH' && styles.activeTabSmall,
                ]}
                onPress={() => handleTabChange2('SH')}>
                <Text
                  style={[
                    styles.tabTextSmall,
                    {color: activeTab1 === 'SH' ? Colors.purple : '#999'},
                  ]}>
                  SH
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabItemSmall,
                  activeTab1 === 'Weight' && styles.activeTabSmall,
                ]}
                onPress={() => handleTabChange2('Weight')}>
                <Text
                  style={[
                    styles.tabTextSmall,
                    {color: activeTab1 === 'Weight' ? Colors.purple : '#999'},
                  ]}>
                  Weight
                </Text>
              </TouchableOpacity>
            </View>
            {/* Render the tabs' content below the tabs */}
            <View style={styles.tabContentContainer}>
              {activeTab1 === 'Painchart' && (
                <>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: dob === '' ? 'lightgrey' : 'black',
                          }}>
                          {' '}
                          {datePlaceholder || moment(date).format('DD-MM-YYYY')}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setOpen(true);
                          setDatePlaceholder('');
                        }}>
                        <Ionicons name="calendar" size={24} color="black" />
                      </TouchableOpacity>
                      <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={date => {
                          setOpen(false);
                          setDate(date);
                          const a = moment(date).format('DD-MM-YYYY');
                          setDob(a);
                        }}
                        onCancel={() => {
                          setOpen(false);
                        }}
                        mode="date"
                        onDateChange={setDate}
                      />
                    </View>
                    <Image
                      style={{
                        height: 200,
                        width: '100%',
                        marginTop: 20,
                        borderRadius: 10,
                      }}
                      source={require('../../../assets/rectangle-22603.png')}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        justifyContent: 'space-between',
                        marginLeft: 3,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Body Part:Head
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Pain Level{' '}
                        </Text>
                        <Image
                          style={{height: 22, width: 22}}
                          source={require('../../../assets/frame.png')}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        justifyContent: 'space-between',
                        marginLeft: 3,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Body Part:Mouth
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Pain Level{' '}
                        </Text>
                        <Image
                          style={{height: 22, width: 22}}
                          source={require('../../../assets/frame.png')}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        justifyContent: 'space-between',
                        marginLeft: 3,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Body Part:Ears
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Pain Level{' '}
                        </Text>
                        <Image
                          style={{height: 22, width: 22}}
                          source={require('../../../assets/frame.png')}
                        />
                      </View>
                    </View>
                  </View>
                </>
              )}
            </View>
            <View style={styles.tabContentContainer}>
              {activeTab1 === 'Weight' && (
                <>
                  <ScrollView>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: dob === '' ? 'lightgrey' : 'black',
                          }}>
                          {' '}
                          {datePlaceholder || moment(date).format('DD-MM-YYYY')}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setOpen(true);
                          setDatePlaceholder('');
                        }}>
                        <Ionicons name="calendar" size={24} color="black" />
                      </TouchableOpacity>
                      <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={date => {
                          setOpen(false);
                          setDate(date);
                          const a = moment(date).format('DD-MM-YYYY');
                          setDob(a);
                        }}
                        onCancel={() => {
                          setOpen(false);
                        }}
                        mode="date"
                        onDateChange={setDate}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <LineChart
                        // style={{backgroundColor:'red'}}
                        data={data}
                        width={screenWidth}
                        height={250}
                        verticalLabelRotation={80}
                        chartConfig={chartConfig}
                        bezier
                        withVerticalLines={false}
                      />

                      {/* <LineChart
          style={{position: 'absolute', top: 30}}
          data={data1}
          width={screenWidth}
          height={220}
          verticalLabelRotation={80}
          chartConfig={chartConfig1}
          bezier
        /> */}
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginTop: 10,
                        }}>
                        Records
                      </Text>
                     
                      {alldata?.map(i => (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20,
                          }}>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {moment(i?.createdAt).format('DD-MM-YYYY')}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {moment(i?.createdAt).format('HH:MM A')}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {i?.weight}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </ScrollView>
                </>
              )}
            </View>
            <View style={styles.tabContentContainer}>
              {activeTab1 === 'SL' && (
                <>
                  <ScrollView>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: dob === '' ? 'lightgrey' : 'black',
                          }}>
                          {' '}
                          {datePlaceholder || moment(date).format('DD-MM-YYYY')}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setOpen(true);
                          setDatePlaceholder('');
                        }}>
                        <Ionicons name="calendar" size={24} color="black" />
                      </TouchableOpacity>
                      <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={date => {
                          setOpen(false);
                          setDate(date);
                          const a = moment(date).format('DD-MM-YYYY');
                          setDob(a);
                        }}
                        onCancel={() => {
                          setOpen(false);
                        }}
                        mode="date"
                        onDateChange={setDate}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <LineChart
                        // style={{backgroundColor:'red'}}
                        data={data}
                        width={screenWidth}
                        height={250}
                        verticalLabelRotation={80}
                        chartConfig={chartConfig}
                        bezier
                        withVerticalLines={false}
                      />

                      {/* <LineChart
          style={{position: 'absolute', top: 30}}
          data={data1}
          width={screenWidth}
          height={220}
          verticalLabelRotation={80}
          chartConfig={chartConfig1}
          bezier
        /> */}
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginTop: 30,
                        }}>
                        Records
                      </Text>
                      {alldata?.map(i => (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20,
                          }}>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {moment(i?.createdAt).format('DD-MM-YYYY')}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {moment(i?.createdAt).format('HH:MM A')}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {i?.sugar_level}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </ScrollView>
                </>
              )}
            </View>
            <View style={styles.tabContentContainer}>
              {activeTab1 === 'SH' && (
                <>
                  <ScrollView>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: dob === '' ? 'lightgrey' : 'black',
                          }}>
                          {' '}
                          {datePlaceholder || moment(date).format('DD-MM-YYYY')}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setOpen(true);
                          setDatePlaceholder('');
                        }}>
                        <Ionicons name="calendar" size={24} color="black" />
                      </TouchableOpacity>
                      <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={date => {
                          setOpen(false);
                          setDate(date);
                          const a = moment(date).format('DD-MM-YYYY');
                          setDob(a);
                        }}
                        onCancel={() => {
                          setOpen(false);
                        }}
                        mode="date"
                        onDateChange={setDate}
                      />
                    </View>
                    <View style={{marginTop: 20}}>
                      <LineChart
                        style={{
                          backgroundColor: Colors.light,
                          borderRadius: 10,
                        }}
                        data={data}
                        width={screenWidth}
                        height={300}
                        verticalLabelRotation={80}
                        chartConfig={chartConfig}
                        bezier
                        withVerticalLines={false}
                      />

                      {/* <LineChart
          style={{position: 'absolute', top: 30}}
          data={data1}
          width={screenWidth}
          height={220}
          verticalLabelRotation={80}
          chartConfig={chartConfig1}
          bezier
        /> */}
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginTop: 10,
                        }}>
                        Records
                      </Text>
                      {alldata?.map(i => (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20,
                          }}>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {moment(i?.createdAt).format('DD-MM-YYYY')}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {moment(i?.createdAt).format('HH:MM A')}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {i?.sleeping_hours}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </ScrollView>
                </>
              )}
            </View>
            <View style={styles.tabContentContainer}>
              {activeTab1 === 'Bp' && (
                <>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: dob === '' ? 'lightgrey' : 'black',
                          }}>
                          {' '}
                          {datePlaceholder || moment(date).format('DD-MM-YYYY')}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setOpen(true);
                          setDatePlaceholder('');
                        }}>
                        <Ionicons name="calendar" size={24} color="black" />
                      </TouchableOpacity>
                      <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={date => {
                          setOpen(false);
                          setDate(date);
                          const a = moment(date).format('DD-MM-YYYY');
                          setDob(a);
                        }}
                        onCancel={() => {
                          setOpen(false);
                        }}
                        mode="date"
                        onDateChange={setDate}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <LineChart
                        style={{borderRadius: 10}}
                        data={data}
                        width={screenWidth}
                        height={350}
                        verticalLabelRotation={95}
                        chartConfig={chartConfig}
                        bezier
                        withVerticalLines={false}
                      />

                      <LineChart
                        style={{position: 'absolute'}}
                        data={data1}
                        width={screenWidth}
                        height={300}
                        verticalLabelRotation={80}
                        chartConfig={chartConfig1}
                        bezier
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 20,
                      }}></View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          borderRadius: 100,
                          backgroundColor: '#0F0ADE',
                          height: 10,
                          width: 10,
                        }}></View>
                      <Text> Diastole</Text>
                    </View>
                    <TouchableOpacity onPress={records}>
                      <LinearGradient
                        style={{
                          height: 45,
                          width: 343,
                          alignSelf: 'center',
                          justifyContent: 'center',
                          marginTop: 40,
                          borderRadius: 40,
                        }}
                        locations={[0, 1]}
                        colors={['#bf6bbb', '#716eaa']}
                        useAngle={true}
                        angle={180}>
                        <Text style={[styles.button1, styles.logInTypo]}>
                          Save
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>

                    <Modal
                      animationType="fade"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <View
                        style={{
                          backgroundColor: '#8BB561',
                          height: 80,
                          width: '90%',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          position: 'absolute',
                          bottom: 40,
                          borderRadius: 10,
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Ionicons
                            style={{marginLeft: 20}}
                            name="checkmark-circle"
                            size={65}
                            color={'white'}
                          />

                          <View style={{}}>
                            <Text
                              style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 12,
                                textAlign: 'center',
                              }}>
                              Saved Successfully
                            </Text>
                          </View>
                        </View>
                      </View>
                    </Modal>

                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginTop: 20,
                        }}>
                        Bp Guide
                      </Text>
                      <View style={{marginHorizontal: 10}}>
                        <Image
                          style={{
                            width: 350,
                            height: 220,
                            resizeMode: 'contain',
                          }}
                          source={require('../../../assets/rectangle-226031.png')}
                        />
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginTop: 10,
                        }}>
                        Records
                      </Text>
                      {alldata?.map(i => (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20,
                          }}>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {moment(i?.createdAt).format('DD-MM-YYYY')}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {moment(i?.createdAt).format('HH:MM A')}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {i?.blood_pressure}/{i?.blood_pressure_systole}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </ScrollView>
                </>
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyHealthSurvey;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 20,
    // paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  tabsContainer: {
    padding: 3,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: Colors.light,
    borderRadius: 20,
    width: '95%',
    height: 42,
    alignSelf: 'center',
  },
  tabItem: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    // borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  activeTab: {
    // borderBottomColor: 'blue',
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  tabContent: {
    // flex: 1,
    height: '80%',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width:'100%',
    // overflow:'scroll',
    width: '95%',
    marginHorizontal: 10,
    marginTop: 10,
    // backgroundColor:'red'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: Colors.light,
    width: '90%',
    marginHorizontal: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 6,
    fontSize: 16,
  },
  navPosition: {
    width: 375,
    left: 0,
    position: 'absolute',
  },
  parentPosition2: {
    left: 16,
    alignItems: 'center',
    position: 'absolute',
  },
  separatorLayout: {
    display: 'none',
    backgroundColor: Color.separatorColorLightWithTransparency,
    borderRadius: 0,
    width: '0.57%',
    position: 'absolute',
  },
  labelTypo1: {
    width: 147,
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.regularFootnote13pt,
    fontWeight: '500',
    fontSize: 13,
    left: 8,
    height: 15,
    top: '50%',
    letterSpacing: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  parentPosition: {
    top: 13,
    position: 'absolute',
  },
  childLayout: {
    width: 115,
    height: 110,
  },
  caloriesSpaceBlock: {
    marginTop: 5,
    width: 195,
    textAlign: 'left',
  },
  maskLayout: {
    height: 136,
    width: 343,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: 'absolute',
  },
  tabsPosition: {
    marginLeft: -187.5,
    left: '50%',
    width: 375,
    position: 'absolute',
  },
  homeLayout: {
    borderRadius: Border.br_81xl,
    position: 'absolute',
  },
  timePosition: {
    left: 0,
    top: 0,
  },
  parentPosition1: {
    top: '50%',
    left: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  labelTypo: {
    marginTop: 2,
    color: Color.plum_200,
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    fontFamily: FontFamily.regularFootnote13pt,
    fontWeight: '500',
    letterSpacing: 0,
  },
  image4Icon: {
    height: 180,
    top: 0,
  },
  videosKnowledgeBaseChild: {
    // top: 100,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowRadius: 50,
    elevation: 50,
    height: 943,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 375,
    left: 0,
    position: 'absolute',
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_11xl,
  },
  iconMagnifyingglass: {
    width: 16,
    height: 16,
  },
  placeholder: {
    fontSize: FontSize.defaultRegularBody_size,
    lineHeight: 22,
    fontFamily: FontFamily.defaultRegularBody,
    color: Color.labelColorLightSecondary,
    marginLeft: 6,
    textAlign: 'left',
    letterSpacing: 0,
    flex: 1,
  },
  searchfield: {
    backgroundColor: Color.fillColorLightTertiary,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    flexDirection: 'row',
    width: 343,
    borderRadius: Border.br_3xs,
    alignItems: 'center',
  },
  separator: {
    height: '55.87%',
    top: '20.95%',
    right: '1.73%',
    bottom: '23.18%',
    left: '97.7%',
  },
  label: {
    marginTop: -8.13,
    lineHeight: 19,
    color: Color.neutral900,
    height: 15,
  },
  segmentedpickerOption: {
    borderColor: 'rgba(0, 0, 0, 0.04)',
    borderWidth: 0.5,
    height: 43,
    borderStyle: 'solid',
    borderRadius: 48,
    flex: 1,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  separator1: {
    height: '57.14%',
    top: '21.43%',
    right: '1.15%',
    bottom: '21.43%',
    left: '98.28%',
  },
  label1: {
    marginTop: -6.69,
    color: Color.dimgray_400,
    height: 15,
  },
  segmentedpickerOption1: {
    alignSelf: 'stretch',
    flex: 1,
  },
  segmentedpicker: {
    backgroundColor: Color.whitesmoke_100,
    width: 328,
    height: 46,
    padding: 2,
    marginTop: 16,
    borderRadius: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  maskShadowBox: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    elevation: 40,
    shadowRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: Border.br_base,
    left: '-0.15%',
    bottom: '-0.37%',
    right: '-0.15%',
    top: '-0.37%',
    width: '100.29%',
    height: '100.74%',
    borderStyle: 'solid',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: 'absolute',
    backgroundColor: Color.labelColorDarkPrimary,
  },
  frameChild: {
    height: 110,
    borderRadius: Border.br_3xs,
    width: 115,
  },
  calories: {
    fontSize: FontSize.size_3xs,
    fontWeight: '600',
    fontFamily: FontFamily.boldFootnote13pt,
    width: 195,
    color: Color.gray_100,
    textAlign: 'left',
  },
  calories1: {
    fontSize: FontSize.size_base,
    lineHeight: 15,
    textTransform: 'uppercase',
    fontWeight: '900',
    fontFamily: FontFamily.satoshiVariableBlack,
    color: Color.dimgray_200,
  },
  calories2: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.generalSansVariableRegular,
    color: Color.gray_100,
    marginTop: 5,
  },
  caloriesParent: {
    marginLeft: 8,
  },
  rectangleParent: {
    left: 13,
    flexDirection: 'row',
  },
  maskGroup: {
    marginTop: 12,
  },
  groupChild: {
    height: 110,
    borderRadius: Border.br_3xs,
    width: 115,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  playIcon: {
    top: 43,
    left: 45,
    position: 'absolute',
    overflow: 'hidden',
  },
  rectangleParent2: {
    height: 110,
  },
  groupParent: {
    marginTop: 16,
  },
  searchfieldParent: {
    // top: 155,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSideIcon: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: 'absolute',
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    lineHeight: 20,
    fontFamily: FontFamily.interMedium,
    height: 20,
    color: Color.labelColorDarkPrimary,
    width: 54,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0,
    left: 0,
    position: 'absolute',
  },
  time: {
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  leftSide: {
    top: 12,
    left: 21,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    top: 0,
    overflow: 'hidden',
  },
  title: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.1,
    fontWeight: '700',
    fontFamily: FontFamily.satoshiVariableBold,
    color: Color.labelColorDarkPrimary,
    textAlign: 'left',
  },
  bell01Icon: {
    width: 30,
    height: 30,
    overflow: 'hidden',
  },
  titleParent: {
    top: 60,
    width: 342,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navChild: {
    height: '11.86%',
    width: '26.13%',
    top: '0%',
    right: '33.87%',
    bottom: '88.14%',
    left: '40%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    width: 134,
    height: 5,
    left: '50%',
    backgroundColor: Color.labelColorDarkPrimary,
  },
  homeindicator: {
    top: 65,
    height: 32,
    left: '50%',
  },
  homeIcon: {
    overflow: 'hidden',
  },
  label2: {
    marginTop: 1,
    color: Color.plum_200,
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    fontFamily: FontFamily.regularFootnote13pt,
    fontWeight: '500',
    letterSpacing: 0,
  },
  homeParent: {
    top: 14,
    left: 21,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  tabbarHome: {
    width: 74,
    height: 64,
  },
  smileParent: {
    marginTop: -20.12,
    marginLeft: -14,
    left: '50%',
  },
  tabbarHome1: {
    width: 76,
    height: 64,
  },
  tabbarHomeChild: {
    top: 5,
    left: 10,
    backgroundColor: Color.plum_300,
    width: 55,
    height: 55,
  },
  label4: {
    color: Color.plum_100,
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    fontFamily: FontFamily.regularFootnote13pt,
    fontWeight: '500',
    letterSpacing: 0,
  },
  searchRefractionParent: {
    marginTop: -19.12,
    marginLeft: -21.5,
    left: '50%',
  },
  tabbarHome2: {
    width: 75,
    height: 64,
  },
  vectorIcon: {
    width: 25,
    height: 25,
  },
  label5: {
    width: 51,
    height: 15,
  },
  vectorParent: {
    top: 11,
    left: 11,
    width: 51,
    alignItems: 'center',
    position: 'absolute',
  },
  iconlycurvedprofileParent: {
    left: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbarHomeParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
  },
  tabs: {
    height: 65,
    left: '50%',
    top: 0,
    overflow: 'hidden',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '85%',
    marginTop: 20,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonsPosition: {
    borderRadius: 40,
    // width: 343,
    width: '100%',
    alignSelf: 'center',
    // position:'absolute',
  },
  buttons: {
    // top: '165%',
    height: 45,
    // marginTop:10
  },
  pressable: {
    borderRadius: Border.br_47xl,
    height: '100%',
    backgroundColor: 'transparent',
    width: '100%',
  },
  parentFlexBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.labelColorDarkPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
  },
  tabItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabItemSmall: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTabSmall: {
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  tabTextSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  tabContentContainer: {
    // marginTop: 10,
    // Add any additional styling you need for the content container
  },
});
