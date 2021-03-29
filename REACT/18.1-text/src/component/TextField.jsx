import React, { useState } from 'react';
import './TextField.css';
const TextField = () => {
	const [showMore, setShowMore] = useState(false);

	const handleClick = () => {
		if (showMore) {
			setShowMore(false);
		} else {
			setShowMore(true);
		}
	};
	const text = (
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quo
			saepe cum quidem, laudantium omnis dicta eveniet perspiciatis ipsa
			laboriosam eligendi ut nostrum aspernatur sit excepturi accusamus
			inventore earum architecto reiciendis nam libero praesentium quae
			exercitationem vero. Minus rerum veniam illum ut eveniet dicta sequi
			inventore culpa vero vitae neque modi temporibus placeat numquam maxime,
			tempore impedit aliquid quas? Facere ipsam dignissimos debitis dolorum
			nostrum. Quisquam molestiae officia eos iusto. Id beatae nobis esse sint
			tempora? Quis nihil ipsa ad numquam, itaque fugit hic accusamus rerum, ab
			sit necessitatibus reprehenderit quasi assumenda est quas animi fuga
			voluptates ex! Nostrum tenetur sit sint fuga veniam, vel inventore illo
			libero possimus itaque soluta rerum, quas accusamus iste, consequuntur
			quod ipsam! Nemo officia totam vitae consectetur esse voluptatum, corrupti
			explicabo reiciendis harum dolore vero eum atque, tempora suscipit
			tempore. Doloribus, nesciunt quis hic recusandae eius eaque, eos aliquid
			accusantium nihil corporis odio nemo perspiciatis error voluptas tempore
			laborum rem consequatur! Aliquid rerum, vero error aut fugit rem iure,
			impedit in illum quos quasi suscipit atque officiis amet debitis nobis!
			Velit asperiores quis cum quisquam adipisci, unde blanditiis odit quod
			obcaecati cumque amet ipsum! Quidem explicabo labore, laudantium
			consequatur eos quos perferendis possimus eius!
		</p>
	);
	const filterText = text.props.children.split('').splice(0, 100).join('');
	console.log(showMore);
	return (
		<div className="text-field">
			{showMore ? (
				<div>
					{text}{' '}
					<span
						style={{ color: 'blue', cursor: 'pointer' }}
						onClick={() => handleClick()}
					>
						Show less
					</span>
				</div>
			) : (
				<div>
					<div>
						{filterText}
						<span
							style={{ color: 'blue', cursor: 'pointer' }}
							onClick={() => handleClick()}
						>
							Show More...
						</span>
					</div>
				</div>
			)}
		</div>
	);
};
export default TextField;
