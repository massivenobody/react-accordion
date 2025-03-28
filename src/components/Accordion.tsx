import AccordionItem from "./AccordionItem";
import { accordionData } from "../data/accordionData";
import { useState } from "react";

function Accordion() {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setActiveId(activeId === id ? null : id);
    }

    const accordionItems = accordionData.map((item) => (
        <AccordionItem
            key={item.id}
            title={item.title}
            content={item.content}
            isOpen={activeId === item.id}
            onToggle={() => handleToggle(item.id)}
        />
    ))

    return (
        <div className="accordion">
            {accordionItems}
        </div>
    )
}

export default Accordion;