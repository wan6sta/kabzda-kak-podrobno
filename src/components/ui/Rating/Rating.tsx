import {useCallback, useMemo, useState} from "react";
import {Star} from "./Star";

const initialRatingList = [false, false, false, false, false]

export const Rating = () => {
    const [ratingList, setRatingList] = useState<boolean[]>(initialRatingList)


    const updateRatingList = useCallback((id: number) => {
        setRatingList(ratingList.map((item, index) => index <= id))
    }, [])

    const stars = ratingList.map((star, index) => (
        <Star
            key={index}
            id={index}
            isActive={star}
            updateRatingList={updateRatingList}
        />
    ))

    const ratingStyle = useMemo(() => ({
        display: 'flex',
        columnGap: '5px'
    }), [])

    return (
        <div style={ratingStyle}>
            {stars}
        </div>
    )
}