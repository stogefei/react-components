import React, {useState ,useEffect} from 'react'
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    useEffect(() =>{
        document.title = `${like}次`
    }, [like])
    return(
        <>
            <button onClick={() => {setLike(like + 1)}}>{like}点赞</button>
            <button onClick={() => {setOn(!on)}}>
                {on ? 'On': 'Off'}
            </button>
        </>
    )
}

export default  LikeButton
