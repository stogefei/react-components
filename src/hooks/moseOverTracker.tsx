import React, {useState ,useEffect} from 'react'
const MouseOverTracker = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() =>{
        const updateMouse = (e: MouseEvent) => {
            // console.log(e, 'e')
            setPosition({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('click', updateMouse)
        return () => {
            document.removeEventListener('click', updateMouse)
        }
    }, [])
    return position
}

export default  MouseOverTracker
