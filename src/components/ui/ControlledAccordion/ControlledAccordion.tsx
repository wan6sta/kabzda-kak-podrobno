import {FC, memo, PropsWithChildren} from "react"

interface ControlledAccordionProps {
    show: boolean
    changeAccordionShow: () => void
}

export const ControlledAccordion: FC<PropsWithChildren<ControlledAccordionProps>> = memo(
    ({children, show, changeAccordionShow}) => {

        const showHandler = () => {
            changeAccordionShow()
        }

        return (
            <div>
                <button onClick={showHandler}>{show ? 'Hide' : 'Show'}</button>
                {show && children}
            </div>
        )
    }
)