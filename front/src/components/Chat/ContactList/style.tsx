import styled from "styled-components"
import colors from "../../../utils/colors"

export const Style = styled.div`

	display: flex;
	flex-direction: column;

	width: 33.42%;
	height: 100%;

	overflow-y: auto;
	overflow-x: hidden;

	background-color: ${colors.contactList};

	&:not(:hover) {
		&::-webkit-scrollbar {
			display: none;
		}
	}

	&:hover {
		
		&::-webkit-scrollbar {
			width: 5px;
			-webkit-appearance: none;
		}
	
		&::-webkit-scrollbar-thumb {
			background-color: ${colors.scrollingBarTransparent};
		}
		
	}


`