import {
	useContext,
	useRef,
	RefObject,
	MouseEvent,
	Dispatch,
	SetStateAction
} from "react"

import {
	Style,
	ProfileName,
	ProfilePicture,
	ProfileInfo,
	ProfileStatus
} from "./style"

import CardContext from "../../../contexts/CardContext"
import ZIndexContext from "../../../contexts/ZIndexContext"

type PropsFriendSection = {
	id: number,
	username: string,
	profilePicture: string,
	state: string,
	social: boolean,
	color: string,
	displayMenuContextual: Dispatch<SetStateAction<boolean>>,
	setMenuContextualPosition: Dispatch<SetStateAction<{
		top: number,
		left: number
	}>>
}

function FriendSection({ id, username, profilePicture, state, social, color, displayMenuContextual, setMenuContextualPosition }: PropsFriendSection) {

	const { card, displayCard, setCardPosition, cardIdTarget, setIdTargetCard } = useContext(CardContext)!
	const { zChatIndex, setZCardIndex } = useContext(ZIndexContext)!
	const friendContainerRef: RefObject<HTMLElement> = useRef(null)

	function showCard() {

		if (card && cardIdTarget === id) {
			displayCard(false)
			return;
		}

		const friendcontainer = friendContainerRef.current

		if (friendcontainer) {
			const topCurrentElement = friendcontainer.getBoundingClientRect().top
			const { top: topParentElement, height: heightParentElement } = friendcontainer.parentElement!.getBoundingClientRect()

			const topMax = heightParentElement - 371 // taille de la carte

			const target = topCurrentElement - topParentElement
			const topCard = target > topMax ? topMax : target // s'assure que la carte ne sorte pas de l'écran si elle est trop basse

			setIdTargetCard(id)
			setCardPosition({ top: topCard.toString() + "px", left: "0px" })
			setZCardIndex(zChatIndex + 1)

			displayCard(true)
		}
	}

	function showMenuContextual(event: MouseEvent<HTMLDivElement>) {

		const friendcontainer = friendContainerRef.current

		if (friendcontainer) {
			const { bottom: bottomParentElement } = friendcontainer.parentElement!.getBoundingClientRect()

			const topMax = bottomParentElement - 175 // taille du menu
			const target = event.clientY
	
			const topMenu = target > topMax ? topMax : target // s'assure que la carte ne sorte pas de l'écran si elle est trop basse

			setMenuContextualPosition({ top: topMenu, left: event.clientX + 1 }) // +1 pour eviter que la souris soit directement sur le menu
			displayMenuContextual(true)
		}
	}

	function handleContextMenu(event: MouseEvent<HTMLDivElement>) {
		event.preventDefault();
	}

	return (
		<Style
			onClick={showCard}
			onAuxClick={showMenuContextual}
			onContextMenu={handleContextMenu}
			color={color} ref={friendContainerRef}>
			<ProfilePicture src={profilePicture} />
			{
				!social &&
				<ProfileInfo>
					<ProfileName>
						{username}
					</ProfileName>
					<ProfileStatus>
						{state}
					</ProfileStatus>
				</ProfileInfo>
			}
		</Style>
	)
}

export default FriendSection