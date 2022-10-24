import {Rating} from "./components/ui/Rating/Rating";
import {Accordion} from "./components/ui/Accordion/Accordion";

export const App = () => {

    return (
        <div className='app'>
            <Rating/>

            <Accordion className='testList'>
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
            </Accordion>

            <Accordion>
                Hello World
            </Accordion>
        </div>
    )
}
