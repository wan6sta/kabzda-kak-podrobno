import {FC, useMemo} from "react"

interface StarProps {
    id: number
    isActive: boolean
    updateRatingList: (id: number) => void
}

export const Star: FC<StarProps> = (props) => {

    const {id, isActive, updateRatingList} = props

    const onClickStarHandler = () => {
        updateRatingList(id)
    }

    const starStyle = useMemo(() => ({
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: isActive ? '#20f79b' : 'white',
        transition: '.1s ease-in'
    }), [isActive])

    return (
        <div onClick={onClickStarHandler} style={starStyle}>

        </div>
    )
}