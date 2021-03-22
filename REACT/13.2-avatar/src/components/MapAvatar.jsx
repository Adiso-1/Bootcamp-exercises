import React from 'react';
import Avatar from './Avatar';
import randomAvatar from '../api/randomAvatar';

class MapAvatar extends React.Component {
	state = { avatars: [] };

	async componentDidMount() {
		const avatars = [];
		for (let i = 0; i < 30; i++) {
			const avatar = await randomAvatar.get('https://randomuser.me/api/');
			avatars.push([
				avatar.data.results[0].name,
				avatar.data.results[0].picture.large,
			]);
		}
		await this.setState({ avatars });
		//! Better using promise.all
	}

	render() {
		const filterdAvatar = () => {
			let arr = [...this.state.avatars];
			let myFilteredArr = arr.filter((person) =>
				(person[0].first.toLowerCase() + person[0].last.toLowerCase()).includes(
					this.props.value.toLowerCase()
				)
			);
			return myFilteredArr.map((avatar, i) => {
				return (
					<div key={i}>
						<Avatar
							src={avatar[1]}
							firstName={avatar[0].first}
							lastName={avatar[0].last}
						/>
					</div>
				);
			});
		};
		const createAvatar = () => {
			return this.state.avatars.map((avatar, i) => {
				return (
					<div key={i}>
						<Avatar
							src={avatar[1]}
							firstName={avatar[0].first}
							lastName={avatar[0].last}
						/>
					</div>
				);
			});
		};
		return (
			<div className="grid-container">
				{this.props.value ? filterdAvatar() : createAvatar()}
			</div>
		);
	}
}
export default MapAvatar;
