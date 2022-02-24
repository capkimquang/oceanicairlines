import React from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export function TextInput({ size, label, name, value, onChange, disabled }) {
	let handleChange = (event) => onChange(event);

	return (
		<TextField
			required fullWidth autoFocus
			disabled = { disabled }
			variant = "outlined"
			size = { size }
			id = { name }
			label = { label }
			name = { name }
			value = { value }
			onChange = { (event) => handleChange(event) }
		/>
	);
};

export function PasswordInput({ label, name, value, onChange }) {
	const handleChange = (event) => onChange(event);

	return (
		<TextField
			required fullWidth autoFocus
			variant = "outlined"
			type = "password"
			id = { name }
			label = { label }
			name = { name }
			value = { value }
			onChange = { (event) => handleChange(event) }
		/>
	);
};

export function SelectInput({ label, name, choices }) {
	return (
		<Select
			required fullWidth select
			variant = "outlined"
			id = { name }
			label = { label }
		>
			{ choices.map((choice) => {
				return (
					<MenuItem key = { choice } value = { choice }>{ choice }</MenuItem>
				);
			})}
		</Select>
	)
};