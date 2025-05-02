export default function MyButton({onClick}: {onClick: (newName: string, newImageUrl: string) => void;}) {
	return (
		<button onClick={() => onClick("staticValue", "staticValue")}>I'm a button</button>
	);
}
