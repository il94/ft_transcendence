import { ReduceButton, Interface, Style } from "./style"

function SocialReduce({ setSocial }: { setSocial?: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<Style>
			<Interface />
			<ReduceButton onClick={() => setSocial && setSocial(false)}/>
		</Style>
	)
}

export default SocialReduce