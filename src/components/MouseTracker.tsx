import React, {useState ,useEffect} from 'react'
const MouseTracker: React.FC = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() =>{
       const updateMouse = (e: MouseEvent) => {
           // console.log(e, 'e')
           setPosition({x: e.clientX, y: e.clientY})
       }
       document.addEventListener('mousemove', updateMouse)
        return () => {
           document.removeEventListener('mousemove', updateMouse)
        }
    }, [])
    return(
        <p>
            x: {position.x}
            <br/>
            y: {position.y}
        </p>
    )
}

export default  MouseTracker
