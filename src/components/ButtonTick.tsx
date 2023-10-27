export default function ButtonTick({isTicked, onClicked}: {isTicked: boolean, onClicked: () => void}) {

    return (
        <button className={"ButtonTick"} onClick={onClicked}>
            {isTicked ? "✅" : "⌛"}
        </button>
    );
};