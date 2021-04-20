const { MongoClient, ObjectId } = require('mongodb');

const connenctionURL = 'mongodb://127.0.0.1"27017';
const databaseName = 'BlogData';

MongoClient.connect(
	connenctionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			console.log('Unable to connect to database');
			return;
		}
		const db = client.db(databaseName);

		//! create user
		// db.collection('users').insertOne({
		// 	name: 'Sapir',
		// 	email: 'sapir@gmail.com',
		// 	posts: [],
		// 	comments: [],
		// });

		//! create post + Update posts
		// db.collection('posts')
		// 	.insertOne({
		// 		userId: ObjectId('607eb71fd094ec03f051167c'),
		// 		author: 'Adi',
		// 		email: 'adi@gmail.com',
		// 		published_date: new Date(),
		// 		content: 'COOL! It works!!',
		// 		comments: [],
		// 	})
		// 	//* DONT CHANGE THIS!!!
		// 	.then((post) => {
		// 		console.log(post.ops[0]);
		// 		db.collection('users').updateOne(
		// 			{
		// 				_id: post.ops[0].userId,
		// 			},
		// 			{
		// 				$push: {
		// 					posts: post.ops[0]._id,
		// 				},
		// 			}
		// 		);
		// 	})
		// 	.catch((err) => {
		// 		console.log('Error' + err);
		// 	});

		//! create comment + Update comments
		// db.collection('comments')
		// 	.insertOne({
		// 		postId: ObjectId('607eb781f80f7c3798dc21d3'),
		// 		userId: ObjectId('607eb71fd094ec03f051167c'),
		// 		author: 'Adi',
		// 		email: 'adi@gmail.com',
		// 		published_date: new Date(),
		// 		content: 'Hello, test test commenttt!!',
		// 	})
		// //* DONT CHANGE THIS!!!
		// 	.then((comment) => {
		// 		console.log(comment.ops[0]);
		// 		db.collection('users').updateOne(
		// 			{
		// 				_id: comment.ops[0].userId,
		// 			},
		// 			{
		// 				$push: {
		// 					comments: comment.ops[0]._id,
		// 				},
		// 			}
		// 		);
		// 		db.collection('posts').updateOne(
		// 			{
		// 				_id: comment.ops[0].postId,
		// 			},
		// 			{
		// 				$push: {
		// 					comments: comment.ops[0]._id,
		// 				},
		// 			}
		// 		);
		// 	})
		// 	.catch((err) => {
		// 		console.log('Error' + err);
		// 	});
	}
);
