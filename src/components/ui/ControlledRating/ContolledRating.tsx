import {FC, memo} from "react"
import cls from './ContolledRating.module.css'
import classNames from "classnames";

interface ContolledRatingProps {
    value: number
    changeStarsValue: (id: number) => void
}


export const ContolledRating: FC<ContolledRatingProps> = memo(
    ({value, changeStarsValue}) => {
        const stars = [false, false, false, false, false]

        const starClickHandler = (id: number) => {
            changeStarsValue(id)
        }

        const starsList = stars
            .map((star, index) => index < value)
            .map((star, index) => (
                <div
                    key={index}
                    onClick={() => starClickHandler(index)}
                    className={classNames(cls.star, {[cls.starSelected]: star})}
                >
                    {index + 1}
                </div>
            ))

        return (
            <div className={cls.stars}>
                {starsList}
            </div>
        )
    }
)