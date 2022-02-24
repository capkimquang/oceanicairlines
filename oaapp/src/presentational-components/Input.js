import React from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

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

export function TextInputWithValidation({ size, label, name, value, onChange, disabled, error, helperText }) {
	let handleChange = (event) => onChange(event);

	return (
		<TextField
			required fullWidth autoFocus
			error = { error }
			disabled = { disabled }
			variant = "outlined"
			size = { size }
			id = { name }
			label = { label }
			name = { name }
			value = { value }
			onChange = { (event) => handleChange(event) }
			helperText = { helperText }
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

export function SelectInput({ label, name, choices, size, disabled, onChange }) {
	const handleChange = (event) => onChange(event);

	return (
		<FormControl fullWidth>
			<InputLabel style = {{paddingLeft: '7%'}} id={ name }>{ label }</InputLabel>
			<Select
				required fullWidth select
				variant = "outlined"
				labelId = { name }
				id = { name }
				size = { size }
				label = { label }
				name = { name }
				disabled = { disabled }
				onChange = { (event) => handleChange(event) }
			>
				{ choices.map((choice) => {
					return (
						<MenuItem key = { choice.cityCode } value = { choice.cityCode }>{ `${choice.cityCode} - ${choice.cityName}` }</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	)
};