import styled from "styled-components"
import effects from "../../../utils/effects"
import colors from "../../../utils/colors"

export const Style = styled.div`

	display: flex;
	flex-direction: column;

	min-height: 35px;
	max-height: 280px;
	
	margin-top: 8px;

	clip-path: ${effects.pixelateWindow};
	
`

export const Group = styled.div`
	
	display: flex;
	align-items: center;

	min-height: 35px;

	padding-left: 10px;

	font-size: 16px;

	background-color: ${colors.sectionAlt};

`

export const Result = styled.div`

	display: flex;
	align-items: center;

	min-height: 35px;
	
	padding-left: 10px;

	background-color: ${colors.section};

	&:hover {
		background-color: ${colors.sectionHover};
	}

`

export const NoResult = styled.div`

	display: flex;
	justify-content: center;
	align-items: center;

	min-height: 35px;
	
	background-color: ${colors.section};

`

export const AvatarResult = styled.img`
	
	width: 28px;
	height: 28px;

	margin-right: 10px;

	border-radius: 50%;

`