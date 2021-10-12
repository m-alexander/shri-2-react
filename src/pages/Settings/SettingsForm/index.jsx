import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "components/Button";
import Input from "components/Input";
import Label from "components/Label";
import ClearButton from "components/ClearButton";
import "./styles.css";

const SettingsForm = ({ defaultValues, onSaveSettings }) => {
	const [values, setValues] = useState(() => ({
		repository: defaultValues?.repository ?? "",
		buildCommand: defaultValues?.buildCommand ?? "",
		mainBranch: defaultValues?.mainBranch ?? "",
		syncTime: defaultValues?.syncTime ?? "",
	}));

	const handleChange = (e) => {
		setValues((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleChangeNumberOnly = (e) => {
		setValues((prev) => ({
			...prev,
			[e.target.name]: e.target.value.replace(/[^.\d]/g, ""),
		}));
	};

	const clear = (fieldName) => {
		setValues((prev) => ({
			...prev,
			[fieldName]: "",
		}));
	};

	const history = useHistory();
	const [isSubmitting, setSubmitting] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();

		setSubmitting(true);
		setTimeout(() => {
			onSaveSettings(values);
			setSubmitting(false);
			history.push("/");
		}, 1000);
	};

	return (
		<form className="settings-form" onSubmit={handleSubmit}>
			<Label
				title="GitHub repository"
				className="settings-form--field"
				required
			>
				<Input
					name="repository"
					required
					placeholder="user-name/repo-name"
					value={values.repository}
					onChange={handleChange}
					spellCheck={false}
					end={<ClearButton onClick={() => clear("repository")} />}
				/>
			</Label>

			<Label title="Build command" className="settings-form--field" required>
				<Input
					name="buildCommand"
					required
					placeholder="npm ci && npm run build"
					value={values.buildCommand}
					onChange={handleChange}
					spellCheck={false}
					end={<ClearButton onClick={() => clear("buildCommand")} />}
				/>
			</Label>

			<Label title="Main branch" className="settings-form--field">
				<Input
					name="mainBranch"
					placeholder="master"
					value={values.mainBranch}
					onChange={handleChange}
					spellCheck={false}
					end={<ClearButton onClick={() => clear("mainBranch")} />}
				/>
			</Label>

			<div className="settings-form--sync">
				Synchronize every
				<Input
					placeholder="10"
					className="settings-form--sync-minutes"
					controlClassName="settings-form--sync-control"
					name="syncTime"
					value={values.syncTime}
					onChange={handleChangeNumberOnly}
					spellCheck={false}
				/>
				minutes
			</div>

			<div className="settings-form--buttons">
				<Button variant="action" type="submit" disabled={isSubmitting}>
					Save
				</Button>

				<Button href="/" disabled={isSubmitting}>
					Cancel
				</Button>
			</div>
		</form>
	);
};

export default SettingsForm;
