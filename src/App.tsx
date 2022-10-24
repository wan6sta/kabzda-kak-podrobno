import {UncontrolledAccordion} from "./components/ui/UncontrolledAccordion/UncontrolledAccordion";
import {UncotrolledRating} from "./components/ui/UncontrolledRating/UnconrolledRating";
import {ContolledRating} from "./components/ui/ControlledRating/ContolledRating";
import {memo, useCallback, useState} from "react";
import {ControlledAccordion} from "./components/ui/ControlledAccordion/ControlledAccordion";

export const App = memo(
    () => {
        const [starsValue, setStarsValue] = useState(0)
        const [show, setShow] = useState(false)

        const changeStarsValue = useCallback((id: number) => {
            setStarsValue(id + 1)
        }, [])

        const changeAccordionShow = useCallback(() => {
            setShow(prev => !prev)
        }, [])

        return (
            <div className='app'>
                <ContolledRating
                    value={starsValue}
                    changeStarsValue={changeStarsValue}
                />

                <ControlledAccordion
                    show={show}
                    changeAccordionShow={changeAccordionShow}
                >
                    <ul>
                        <li>hi</li>
                        <li>how</li>
                        <li>are</li>
                        <li>you</li>
                    </ul>
                </ControlledAccordion>

                <UncotrolledRating/>

                <UncontrolledAccordion className='testList'>
                    <ul>
                        <li>One li</li>
                        <li>Two li</li>
                        <li>Three li</li>
                    </ul>

                    <ul>
                        <li>One li</li>
                        <li>Two li</li>
                        <li>Three li</li>
                    </ul>
                </UncontrolledAccordion>

                <UncontrolledAccordion>
                    Hello World
                </UncontrolledAccordion>
            </div>
        )
    }
)
