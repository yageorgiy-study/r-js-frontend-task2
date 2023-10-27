export default function ButtonAction({text, onClicked}: {text: string, onClicked: () => void}) {

    return (
        <button className={"ButtonAction"} onClick={onClicked}>
            {text}
        </button>
    );
};