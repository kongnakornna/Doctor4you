import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const Withoutrating = (props) => (
    <Svg
        width={26}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            opacity={0.2}
            d="M26 9.688c0-.389-.292-.63-.875-.725l-7.844-1.15L13.766.646C13.568.216 13.312 0 13 0s-.568.215-.765.646L8.719 7.813.875 8.963C.292 9.058 0 9.3 0 9.688c0 .22.13.473.39.756l5.688 5.577-1.343 7.876a2.58 2.58 0 0 0-.032.315c0 .22.055.407.164.56.11.152.274.228.492.228.188 0 .396-.063.625-.189L13 21.093l7.016 3.718c.219.126.427.189.625.189a.549.549 0 0 0 .477-.229.935.935 0 0 0 .163-.559c0-.136-.005-.241-.015-.315l-1.344-7.876 5.671-5.577c.272-.273.407-.525.407-.756Z"
            fill="#A0A2B3"
        />
    </Svg>
)

export default memo(Withoutrating);
