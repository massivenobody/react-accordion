import { ExpandMore, ExpandLess } from "@mui/icons-material";

function AccordionItem({ title, content, isOpen, onToggle }: { title: string, content: string, isOpen: boolean, onToggle: () => void }) {

    return (
        <div className="accordion-item" onClick={onToggle}>
            <div className="accordion-title">
                <h2>{title}</h2>
                {isOpen
                    ? <ExpandLess />
                    : <ExpandMore />
                }
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}

export default AccordionItem;