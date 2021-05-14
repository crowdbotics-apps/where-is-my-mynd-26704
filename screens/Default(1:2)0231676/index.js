import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_35}>
        <View style={styles.View_I1_35_406_15}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf1/552f/b5345709e27a9d859100fd21292dfdbc"
            }}
            style={styles.ImageBackground_I1_35_406_16}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67f4/f8fa/9b8f9b82e2950ddbc039e563ccf6e7a8"
            }}
            style={styles.ImageBackground_I1_35_406_17}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b32e/efee/d74ee8d2d68c6633e6c781f87f2e0bd1"
            }}
            style={styles.ImageBackground_I1_35_406_20}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67f4/f8fa/9b8f9b82e2950ddbc039e563ccf6e7a8"
            }}
            style={styles.ImageBackground_I1_35_406_21}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4411/5cd7/d5c8bb196af221d632d7164da1575487"
            }}
            style={styles.ImageBackground_I1_35_406_24}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e29/5585/e542314a705a215fd7b23e9f9096919c"
            }}
            style={styles.ImageBackground_I1_35_406_25}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf1/552f/b5345709e27a9d859100fd21292dfdbc"
            }}
            style={styles.ImageBackground_I1_35_406_26}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/970d/2be1/cca1e25a22c5062195a82d8f9213a2ea"
            }}
            style={styles.ImageBackground_I1_35_406_27}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b32e/efee/d74ee8d2d68c6633e6c781f87f2e0bd1"
            }}
            style={styles.ImageBackground_I1_35_406_28}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3fc/3c0b/da7c3d5b54654ebb417168a5ce37e807"
            }}
            style={styles.ImageBackground_I1_35_406_29}
          />
        </View>
        <View style={styles.View_I1_35_1_117}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1046/e4e9/708ebb7be202fc52e5a27c7b568c3620"
            }}
            style={styles.ImageBackground_I1_35_1_118}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77e4/3884/a4ae61276c4334b279bbcf56547530ba"
            }}
            style={styles.ImageBackground_I1_35_1_123}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4525/ae69/93deb0040d7c5963d2fdcfc13a4bd1d1"
          }}
          style={styles.ImageBackground_I1_35_1_177}
        />
      </View>
      <View style={styles.View_1_118}>
        <View style={styles.View_I1_118_2_51}>
          <Text style={styles.Text_I1_118_2_51}>Save your location</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_35: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("17.541229385307346%"),
    minHeight: hp("17.541229385307346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    top: hp("23.988005997001498%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_35_406_15: {
    flexGrow: 1,
    width: wp("39.546337890625%"),
    height: hp("1.3986361616555003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.142593223651847%")
  },
  ImageBackground_I1_35_406_16: {
    width: wp("2.589193979899089%"),
    height: hp("1.3986361616555003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1_35_406_17: {
    width: wp("2.316277567545573%"),
    height: hp("1.383512345389805%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.692911783854164%")
  },
  ImageBackground_I1_35_406_20: {
    width: wp("2.0713541666666666%"),
    height: hp("1.3986361616555003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.072965494791667%")
  },
  ImageBackground_I1_35_406_21: {
    width: wp("2.3162801106770834%"),
    height: hp("1.383512345389805%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.24444580078125%")
  },
  ImageBackground_I1_35_406_24: {
    width: wp("2.0713541666666666%"),
    height: hp("1.3986361616555003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.62449544270833%")
  },
  ImageBackground_I1_35_406_25: {
    width: wp("1.3809041341145833%"),
    height: hp("1.3986361616555003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.79597574869792%")
  },
  ImageBackground_I1_35_406_26: {
    width: wp("2.589190673828125%"),
    height: hp("1.3986361616555003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.237449137369794%")
  },
  ImageBackground_I1_35_406_27: {
    width: wp("1.4672098795572917%"),
    height: hp("1.3986361616555003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.930356852213535%")
  },
  ImageBackground_I1_35_406_28: {
    width: wp("2.071356201171875%"),
    height: hp("1.3986361616555003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.47611694335937%")
  },
  ImageBackground_I1_35_406_29: {
    width: wp("1.8987426757812498%"),
    height: hp("1.3986361616555003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.647595214843754%")
  },
  View_I1_35_1_117: {
    flexGrow: 1,
    width: wp("39.733333333333334%"),
    height: hp("3.7710541549293715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.9804213493839%")
  },
  ImageBackground_I1_35_1_118: {
    width: wp("39.733333333333334%"),
    height: hp("3.7710541549293715%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1_35_1_123: {
    width: wp("2.8761311848958333%"),
    height: hp("2.262140642935368%"),
    top: hp("0.7544590436715239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.244250488281246%")
  },
  ImageBackground_I1_35_1_177: {
    flexGrow: 1,
    width: wp("21.58740234375%"),
    height: hp("8.319474410438824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.072965494791667%"),
    top: hp("0%")
  },
  View_1_118: {
    width: wp("57.86666666666667%"),
    minWidth: wp("57.86666666666667%"),
    height: hp("7.496251874062969%"),
    minHeight: hp("7.496251874062969%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("71.66416791604198%"),
    backgroundColor: "rgba(255, 142, 60, 1)"
  },
  View_I1_118_2_51: {
    flexGrow: 1,
    width: wp("45.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000002%"),
    top: hp("2.3988005997001522%")
  },
  Text_I1_118_2_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_2: { height: 667 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
