import React, {memo, useState} from "react";
import {useMeasure, usePrevious} from "./Helpers";
import {a, useSpring} from "react-spring"
import * as Icons from "./Icons";
import {Content, Frame, Title, toggle} from "./Styles";

const Tree = memo(({children, name, style, dire}) => {
    const [isOpen, setOpen] = useState(true)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)}/>
            <Title style={style} onClick={dire}> {name} </Title>
            <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
            </Content>
        </Frame>
    )
})

export default Tree