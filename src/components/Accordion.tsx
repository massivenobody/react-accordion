import AccordionItem from "./AccordionItem";
import { useState } from "react";
import { AccordionItemData } from "./AccordionItem";

function Accordion({ data }: { data: AccordionItemData[] }) {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setActiveId(activeId === id ? null : id);
    }

    const accordionItems = data.map((item) => (
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