import classNames from "classnames"
import {FC, memo, PropsWithChildren, useMemo, useState} from "react"
import cls from './UncontrolledAccordion.module.css'

interface AccordionProps {
    className?: string
}

export const UncontrolledAccordion: FC<PropsWithChildren<AccordionProps>> = memo(
    (props) => {
        const {children, className} = props

        const [show, setShow] = useState(false)

        const showHandler = () => {
            setShow(prev => !prev)
        }

        return (
            <div className={cls.Accordion}>
                <button
                    onClick={showHandler}
                    className={cls.btn}
                >
                    {show ? 'Hide' : 'Show'}
                </button>

                <div
                    className={classNames(cls.main, className, {[cls.mainHide]: !show})}
                >
                    {children}
                </div>
            </div>
        )
    }
)