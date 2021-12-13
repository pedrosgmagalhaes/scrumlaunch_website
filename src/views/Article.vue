<template>

	<div class="article">
		
		<div class="article__meta">
			<div class="article__category">{{ post.category }}</div>
			<div class="article__date">Published on {{ post.date }}</div>
		</div>

		<h1 class="header-big">{{ post.title }}</h1>

		<div class="article__user">

			<div class="article__user_photo" :style="{ 'background-image': `url('${post.user.photo}')` }"></div>

			<div class="article__user_data">
				<div class="article__user_name">{{ post.user.name }}</div>
				<div class="article__user_position">{{ post.user.position }}</div>
			</div>

		</div>

		<div class="article__body" v-html="post.text"></div>


		<div class="article__recommended">

			<h2 class="article__recommended_title header-1">Recommended articles</h2>

			<div class="article__recommended_list">
				
				<div class="article__recommended_item" v-for="(item, index) in recommended_items" :key="index">
					<div class="article__recommended_item_image" :style="{ 'background-image': `url('${item.image}')` }"></div>
					<div class="article__recommended_item_contet">
						<div class="article__recommended_item_title">{{ item.title }}</div>
						<div class="article__recommended_item_text">{{ item.text }}</div>
						<div class="article__recommended_item_date">{{ item.date }}</div>
					</div>
					<a href="#" class="article__recommended_item_arr"></a>
				</div>

			</div>

		</div>

	</div>

</template>



<script>
export default {
	
	data() {
		return {
			post: {
				category: 'Insights',
				date: 'November 14, 2021',
				user: {
					photo: 'https://i.pinimg.com/736x/6d/ba/da/6dbada3de8fbf11cf1e6ca3cd7802c44.jpg',
					name: 'Name Surname',
					position: 'Head of marketing',
				},
				title: 'Get more of our INSIGHTS, ideas, and guides',
				text: '<p><i>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</i></p><p><img src="https://dummyimage.com/1800x840/eee/fff" alt=""></p><p>&nbsp;</p><p>&nbsp;</p><h2>We build flexible teams with client business goals in mind</h2><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p><p><img src="https://dummyimage.com/1800x840/eee/fff" alt=""></p><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p><blockquote>Our leadership team is lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum non, odio nunc quisque lobortis ac proin vitae, eu. Lorem ac ipsum, senectus elementum venenatis aliquam.</blockquote><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. </p><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. </p><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p><p>Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business. Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p>',

			},

			recommended_items: [
				{
					image: 'https://dummyimage.com/240x200/fff2e2/fff',
					title: 'How does FGN app help seniors and why is it so important?',
					text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive biases is critical when starting a company.',
					date: '02 Dec 21',
				},
				{
					image: 'https://dummyimage.com/240x200/fff2e2/fff',
					title: 'How ScrumLaunch became the best company of 2021?',
					text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive biases is critical when starting a company.',
					date: '02 Dec 21',
				},
				{
					image: 'https://dummyimage.com/240x200/fff2e2/fff',
					title: 'What is the secret of startup success? Let’s find out!',
					text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive biases is critical when starting a company.',
					date: '02 Dec 21',
				},
			],
		}
	},

}
</script>



<style lang="scss" scoped>

.article {
	margin: 0 auto;
	padding-top: 240px;
	padding-bottom: 240px;
	padding-left: 8.34%;
	padding-right: 8.34%;
	width: 100%;
	max-width: 1586px;

	@media screen and (max-width: 1900px) {
		padding-top: 186px;
		padding-bottom: 220px;
	}

	* {
		box-sizing: border-box;
	}

	@media screen and (max-width: 1440px) {
		max-width: 1200px;
	}

	@media screen and (max-width: 1140px) {
		padding-left: 44px;
		padding-right: 44px;
		padding-top: 197px;
		padding-bottom: 197px;
		max-width: 100%;
		width: auto;
	}

	.header-big {
		margin-bottom: 60px;
		text-align: left;
		font-size: 90px;
		line-height: 140%;

		@media screen and (max-width: 1900px) {
			margin-bottom: 40px;
			font-size: 70px;
		}

		@media screen and (max-width: 1140px) {
			font-size: 56px;
		}

		@media screen and (max-width: 768px) {
			margin-bottom: 60px;
			text-align: center;
		}
	}

	&__meta {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 60px;

		@media screen and (max-width: 1900px) {
			margin-bottom: 40px;
		}
	}

	&__category {
		margin-right: 20px;
		font-weight: bold;
		font-size: 20px;
		line-height: 140%;

		@media screen and (max-width: 1900px) {
			font-size: 16px;
		}
	}

	&__date {
		font-weight: 500;
		font-size: 20px;
		line-height: 140%;

		@media screen and (max-width: 1900px) {
			font-size: 16px;
		}
	}

	&__user {
		display: flex;
		margin-bottom: 60px;
	}

	&__user_photo {
		margin-right: 20px;
		width: 68px;
		height: 68px;
		background-color: #eee;
		border-radius: 50%;
		background-size: cover;
		background-position: center center;
	}

	&__user_data {
		text-align: left;
	}

	&__user_name {
		font-weight: bold;
		font-size: 26px;
		line-height: 140%;
	}

	&__user_position {
		font-weight: 500;
		font-size: 16px;
		line-height: 140%;
		letter-spacing: 0.01em;
		text-transform: uppercase;
	}

	&__body {
		margin: 0 auto;
		max-width: 1200px;
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 150%;
		text-align: left;

		@media screen and (max-width: 1900px) {
			font-size: 16px;
		}

		@media screen and (max-width: 1440px) {
			max-width: 900px;
		}

		:deep(h2) {
			margin-bottom: 40px;
			font-style: normal;
			font-weight: 900;
			font-size: 48px;
			line-height: 140%;
			letter-spacing: 0.02em;
			text-transform: uppercase;
		}

		:deep(p) {
			margin-bottom: 23px;
			
			@media screen and (max-width: 1900px) {
				margin-bottom: 20px;
			}
		}

		:deep(img) {
			display: block;
			max-width: 100%;
		}

		:deep(blockquote) {
			margin-top: 40px;
			margin-bottom: 40px;
			padding-left: 212px;
			min-height: 127px;
			font-style: italic;
			font-weight: normal;
			font-size: 26px;
			line-height: 150%;
			background: url(../assets/icons/quotes.svg) 0 0 no-repeat;
		}
	}

	&__recommended {
		margin-top: 140px;
		text-align: left;
	}

	&__recommended_title {
		margin-bottom: 40px;
	}

	&__recommended_list {

	}

	&__recommended_item {
		display: flex;
		padding-top: 50px;
		padding-bottom: 50px;
		border-bottom: 1px solid #1E1F21;

		&:first-child {
			border-top: 1px solid #1E1F21;
		}
	}

	&__recommended_item_image {
		flex: 0 0 177px;
		margin-right: 40px;
		width: 177px;
		height: 177px;
		background-size: cover;
		background-position: center center;
	}

	&__recommended_item_contet {
		display: flex;
		flex-direction: column;
	}

	&__recommended_item_title {
		margin-bottom: 10px;
		font-size: 40px;
		line-height: 140%;
		font-weight: bold;

		@media screen and (max-width: 1900px) {
			font-size: 30px;
		}
	}

	&__recommended_item_text {
		font-size: 20px;
		line-height: 150%;
		font-weight: 600;

		@media screen and (max-width: 1900px) {
			font-size: 18px;
		}
	}

	&__recommended_item_date {
		margin-top: auto;
		font-size: 16px;
		font-weight: 600;

		@media screen and (max-width: 1900px) {
			font-size: 14px;
		}
	}

	&__recommended_item_arr {
		display: block;
		margin-left: 60px;
		flex: 0 0 75px;
		width: 75px;
		height: 37px;
		background-image: url("../assets/icons/union-empty.svg");
		background-size: contain;
		background-repeat: no-repeat;
		transition: all 0.4s ease;
		cursor: pointer;

		&:hover {
			background-image: url("../assets/icons/union.svg");
		}
	}
	
}

</style>