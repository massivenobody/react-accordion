import AccordionItem from "./AccordionItem";
import { accordionData } from "../data/accordionData";

function Accordion() {
    const accordionItems = accordionData.map((item) => (
        <AccordionItem key={item.id} title={item.title} content={item.content} />
    ))

    return (
        <div className="accordion">
            {accordionItems}
        </div>
    )
}

export default Accordion;