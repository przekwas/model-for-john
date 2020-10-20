import * as React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';

const App = (props: AppProps) => {
	const [subscribed, setSubscribed] = React.useState<number>(0);
	const [email, setEmail] = React.useState<string>('jwoods2@student.com');

	React.useEffect(() => {
		getCount();
	}, []);

	const getCount = async () => {
		const res = await fetch('/api/users/count');
		const count = await res.json();
		setSubscribed(count.subscribed);
	};

	const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const res = await fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		});

		if (res.ok) {
			const canned = await res.json();
		}

		setEmail('');
	};

	return (
		<div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
			<h1 className="display-1 App-thicc">Welcome to the Cult!</h1>
			<h4 className="font-weight-light text-muted">
				We have <span className="display-4 text-dark font-weight-bolder">{subscribed}</span>{' '}
				users!
			</h4>
			<br />
			<h6 className="mb-3">
				<FaChevronDown /> Join the Fun! <FaChevronDown />
			</h6>
			<form className="form-group">
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text">
							<MdEmail />
						</span>
					</div>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="d-flex justify-content-center align-items-center mt-3">
					<button onClick={handleRegister} className="btn btn-primary shadow">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

interface AppProps {}

export default App;
