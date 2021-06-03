import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

// constants
import { images, theme } from "../../constants";
const { onboarding1, onboarding2, onboarding3,onboarding4 } = images;

// theme
const { COLORS, FONTS, SIZES } = theme;

const onBoardings = [
    {
        title: "채식의 유형",
        subtitle:"다양한 채식의 세계",
        description: "가끔 육식을 하는 플렉시테리언부터 페스토, 폴로, 락토 오보 락토, 오보, 채소만 먹는 비건까지 채식의 세계는 다양합니다. ",
        subdescription:"채식 입문자부터 비건 지향까지\n QVECO를 통해 건강한 채식 라이프를 즐겨보세요!",
        img: onboarding1
    },
    {
        title: "퀘스트",
        subtitle:"퀘스트를 통해\n 함께 실천해 나가는 채식 라이프",
        description: "퀘스트를 통해 생각만 하고 실천하지 못했던 것들을 함께 수행하면서 이루어갈 수 있습니다.",
        subdescription:"건강한 채식 라이프에 대한 정보를 공유하고, 함께 배워나가요!",
        img: onboarding2
    },
    {
        title: "포인트",
        subtitle:"포인트로 얻는 다양한 보상",
        description: "포인트를 통해 기부도 하고, 기프티콘 구매도 하며 다양한 보상을 얻을 수 있습니다.",
        subdescription:"지속적인 동기 부여가 될 거에요.",
        img: onboarding3
    },
    {
        title: "캐릭터",
        subtitle:"각양각색 매력만점 캐릭터",
        description: "다양한 매력의 캐릭터를 취향에 맞게 선택할 수 있습니다.",
        subdescription:"나만의 캐릭터를 통해 나를 표현해봐요.",
        img: onboarding4
    }
];

const Tutorial = ({navigation}) => {
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    // Render

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                    >
                        <View style={{ flex: 2, alignItems: 'center', marginBottom:'30%',justifyContent: 'center' }}>
                            <Image
                                source={item.img}
                                resizeMode="contain"
                                
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: '12%',
                                left: 40,
                                right: 40
                            }}
                        >
                            <Text style={{
                                ...FONTS.h1,
                                color: COLORS.black,
                                textAlign: 'right',
                            }}
                            >
                                {item.title}
                            </Text>
                            <Text style={{
                                ...FONTS.h4,
                                color: COLORS.black,
                                textAlign: 'right',
                            }}
                            >
                                {item.subtitle}
                            </Text>

                            <Text style={{
                                ...FONTS.body5,
                                textAlign: 'right',
                                marginTop: SIZES.base*2,
                                color: COLORS.gray,
                            }}
                            >
                                {item.description}
                            </Text>
                            <Text style={{
                                ...FONTS.body5,
                                textAlign: 'right',
                                marginTop: SIZES.base*2,
                                color: COLORS.gray,
                            }}
                            >
                                {item.subdescription}
                            </Text>
                        </View>
                        {/* Button */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 50,
                                width: 150,
                                height: 60,
                                paddingLeft: 20,
                                justifyContent: 'center',
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                            }}
                            onPress={() => navigation.navigate("QuestMain")}
                        >
                            <Text style={{ ...FONTS.h4, color: COLORS.black }}>{completed ? "Let's Go" : "Skip"}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

    

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    imageAndTextContainer: {
        width: SIZES.width
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: SIZES.height > 700 ? '20%' : '16%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding / 2,
        marginBottom: SIZES.padding * 3,
        height: SIZES.padding,
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.blue,
        marginHorizontal: SIZES.radius / 2
    }
});

export default Tutorial;
