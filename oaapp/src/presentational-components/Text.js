import React from 'react';
import Typography from "@material-ui/core/Typography";
import { Link as RouteLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

export function TitleText({ value, fontSize, color }) {
	return (
		<Typography noWrap
					variant = 'inherit'
					style = {{ fontWeight: 'bold', fontSize: fontSize, color: color }}
		>
			{ value }
		</Typography>
	);
}

export function Text({ value, align }) {
	return (
		<Typography
			align = { align }
		>
			{ value }
		</Typography>
	)
}

// export function TextWithLink({ value, to }) {
// 	return (
// 		<Link component = { RouteLink } to = { to } underline = 'none'>
// 			<Typography
// 				variant = "body2">
// 				{ value }
// 			</Typography>
// 		</Link>
// 	);
// }