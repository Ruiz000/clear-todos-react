import { useState } from "react"

/**
 * @interface Item { context: string }
 */
export default function TodoItem({props,removeItem,item}) {
    //const Colors = props.Colors
    //console.log(Colors)
    const [ startX, setStartX ] = useState()
    const [ currentX, setCurrentX ] = useState()
    const [ mouseD, setMouseD ] = useState(false)
    const [ isDel , setisDel ] = useState(false)
    const [ isFinish, setisFinish] = useState(false)
    // Touch listener
    function TS(e){
        setStartX(e.touches[0].clientX)
    }
    function TM(e){
        setCurrentX(e.touches[0].clientX)
        const differX = currentX - startX
        e.target.style.transform = `translateX(${differX }px)`
        if(differX > window.innerWidth / 2) {
        setisDel(true)
        }
    }
    function TE(e){
        //console.log('3')
        console.log(isDel)
        if(isDel){
        removeItem(e.target.id)
        }
        else {
        e.target.style.transform = `translateX(0)`
        }
        setisFinish(true)
        setCurrentX(0)
        setStartX(0)
    }

    // mouse 
    function mS(e){
        console.log(e)
        setMouseD(true)
        setStartX(e.clientX)
    }
    function mM(e){
        if(mouseD){
        setCurrentX(e.clientX)
        const differX = currentX - startX
        e.target.style.transform = `translateX(${differX }px)`
        console.log(differX)
        if( differX > window.innerWidth / 2) {
            setisDel(true)
        } else if ( differX < 0 && -differX > window.innerWidth / 4 ) {
            const state = isFinish
            setisFinish(!state)
        }
        }
    }
    function mE(e){
        //console.log('3')
        setMouseD(false)
        if(isDel){
        removeItem(e.target.id)
        }
        else {      
        e.target.style.transform = `translateX(0)`
        }
        setCurrentX(0)
        setStartX(0)
        setisDel(false)
    }
    const Colorobj = 
        {
            y0: "bg-yellow-900",
            y1: "bg-yellow-800",
            y2: "bg-yellow-700",
            y3: "bg-yellow-600",
            y4: "bg-yellow-500",
            y5: "bg-yellow-400",
            y6: "bg-yellow-300",
            y7: "bg-yellow-200",
            y8: "bg-yellow-100",
            b0: "bg-blue-900",
            b1: "bg-blue-800",
            b2: "bg-blue-700",
            b3: "bg-blue-600",
            b4: "bg-blue-500",
            b5: "bg-blue-400",
            b6: "bg-blue-300",
            b7: "bg-blue-200",
            b8: "bg-blue-100",
            g0: "bg-green-900",
            g1: "bg-green-800",
            g2: "bg-green-700",
            g3: "bg-green-600",
            g4: "bg-green-500",
            g5: "bg-green-400",
            g6: "bg-green-300",
            g7: "bg-green-200",
            g8: "bg-green-100",
            o0: "bg-orange-900",
            o1: "bg-orange-800",
            o2: "bg-orange-700",
            o3: "bg-orange-600",
            o4: "bg-orange-500",
            o5: "bg-orange-400",
            o6: "bg-orange-300",
            o7: "bg-orange-200",
            o8: "bg-orange-100",
            s0: "bg-sky-900",
            s1: "bg-sky-800",
            s2: "bg-sky-700",
            s3: "bg-sky-600",
            s4: "bg-sky-500",
            s5: "bg-sky-400",
            s6: "bg-sky-300",
            s7: "bg-sky-200",
            s8: "bg-sky-100",
            p0: "bg-purple-900",
            p1: "bg-purple-800",
            p2: "bg-purple-700",
            p3: "bg-purple-600",
            p4: "bg-purple-500",
            p5: "bg-purple-400",
            p6: "bg-purple-300",
            p7: "bg-purple-200",
            p8: "bg-purple-100",
            r0: "bg-rose-900",
            r1: "bg-rose-800",
            r2: "bg-rose-700",
            r3: "bg-rose-600",
            r4: "bg-rose-500",
            r5: "bg-rose-400",
            r6: "bg-rose-300",
            r7: "bg-rose-200",
            r8: "bg-rose-100"
        }
        const obj = props.colorTags[props.tn] + item.id
    return (
        <p id={item.id} onMouseDown={mS} onMouseMove={mM} onMouseUp={mE} className={`${Colorobj[obj]} flex p-2 justify-start items-center h-20 drop-shadow drow-shadow-gray-300 hover:drop-shadow-lg`}>
                            {isFinish ? <del>{item.context}</del> : item.context }
        </p>
    )
}