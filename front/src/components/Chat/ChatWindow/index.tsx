import styled from "styled-components"

import TextInput from "./TextInput"
import CreateChannelMenu from "./CreateChannelMenu"
import DiscussionInterface from "./DiscussionInterface"
import Banner from "./Banner"

import { Channel } from "../../../utils/types"

import colors from "../../../utils/colors"

const Style = styled.div`

	display: flex;
	flex-direction: column;

	width: 245px;
	height: 100%;

	background-color: ${colors.chatWindow};

`

type PropsChatWindow = {
	channelToDisplay: Channel,
	createChannelMenu: boolean
}

function ChatWindow({ channelToDisplay, createChannelMenu } : PropsChatWindow) {
	return (
		<Style>
			<Banner name={channelToDisplay.name} />
			{
				!createChannelMenu ?
					<CreateChannelMenu />
				:
					<>
						<DiscussionInterface /* targetId={channelToDisplay.id} */ />
						<TextInput />
					</>
			}
		</Style>
	)
}

export default ChatWindow