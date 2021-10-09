import { useState } from "react";
import Modal from "components/Modal";
import Input from "components/Input";
import Button from "components/Button";
import ClearButton from "components/ClearButton";
import "./styles.css";

const NewBuildModal = ({ onClose }) => {
	const [commitHash, setCommitHash] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onClose();
	};

	return (
		<Modal>
			<form className="new-build-modal" onSubmit={handleSubmit}>
				<div className="new-build-modal--title">New build</div>

				<div className="new-build--description">
					Enter the commit hash which you want to build.
				</div>

				<Input
					value={commitHash}
					onChange={(e) => setCommitHash(e.target.value)}
					placeholder="Commit hash"
					required
					autoFocus
					end={<ClearButton onClick={() => setCommitHash("")} />}
				/>

				<div className="new-build-modal--buttons">
					<Button variant="action" type="submit">
						Run build
					</Button>
					<Button variant="pseudo" onClick={onClose}>
						Cancel
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default NewBuildModal;
